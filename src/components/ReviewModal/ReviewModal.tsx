import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import { ReviewType } from '../BookReview/Review';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { useEffect, useState } from 'react';
import { getDetailReview } from '../../apis/review';
import { Rating } from '../common/Rating/Rating';
import { Comment } from '../Comment/Comment';
import IconComment from '../../assets/svg/comment.svg';
import { Heart } from '../Heart/Heart';
import { useQuery } from '@tanstack/react-query';

type ReviewIdModalProps = {
  selectedReviewId: number | null;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export type CommentType = {
  commentAuthor: string;
  commentCreatedAt: string;
  commentAuthorProfileUrl: string;
  commentId: number;
  contents: string;
  isMine: boolean;
  reviewId: number;
};

export function ReviewModal({ reviewModal, selectedReviewId, setReviewModal }: ReviewIdModalProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentsOpen, setCommentOpen] = useState<boolean>(false);

  const detailReview = async () => {
    if (selectedReviewId) {
      return await getDetailReview(selectedReviewId);
    } else {
      return {
        reviewId: 0,
        reviewAuthorProfileUrl: null,
        reviewTitle: '',
        reviewPhrase: '',
        reviewContents: '',
        reviewRating: 0,
        isLike: false,
        likeCount: 0,
        comments: [],
      };
    }
  };

  const { data: review } = useQuery<ReviewType>({
    queryKey: ['detailReview', selectedReviewId],
    queryFn: detailReview,
    enabled: !!selectedReviewId,
  });

  const modalClose = () => {
    setReviewModal(false);
    setCommentOpen(false);
  };
  if (review) {
    return (
      <S.ReviewModalContainer reviewModal={reviewModal}>
        <S.Review reviewModal={reviewModal}>
          <S.XContainer>
            <img src={IconX} onClick={modalClose} />
          </S.XContainer>
          <S.ReviewContainer>
            {review?.reviewAuthorProfileUrl === null ? (
              <S.UserImage src={IconNoImage} />
            ) : (
              <S.UserImage src={review.reviewAuthorProfileUrl} />
            )}
            <Rating count={review?.reviewRating} readonly />
            <S.ReviewTitle>{review?.reviewTitle}</S.ReviewTitle>
            <S.PhraseContainer>
              <p>"</p>
              <S.ReviewPhrase>{review?.reviewPhrase}</S.ReviewPhrase>
              <p>"</p>
            </S.PhraseContainer>
            <S.ReviewContent>{review?.reviewContents}</S.ReviewContent>
            <S.HeartContainer>
              <Heart
                reviewId={review?.reviewId}
                isLike={review?.isLike}
                likeCount={review?.likeCount}
                // onLikeChange={() => detailReview(selectedReview?.reviewId)}
              />
            </S.HeartContainer>
          </S.ReviewContainer>
          <S.CommentInfo onClick={() => setCommentOpen(!commentsOpen)}>
            <img src={IconComment} />
            <p>
              comment <span>{review?.comments.length}</span>
            </p>
          </S.CommentInfo>
          {commentsOpen && (
            <Comment
              reviewId={review?.reviewId}
              setComments={setComments}
              comments={review?.comments}
            />
          )}
        </S.Review>
      </S.ReviewModalContainer>
    );
  }
}
