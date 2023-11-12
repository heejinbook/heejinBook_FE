import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { useState } from 'react';
import { Rating } from '../common/Rating/Rating';
import { Comment, CommentType } from '../Comment/Comment';
import IconComment from '../../assets/svg/comment.svg';
import { Heart } from '../Heart/Heart';
import { useGetDetailReview } from '../../querys/reviewQuery';

type ReviewIdModalProps = {
  selectedReviewId: number | null;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function ReviewModal({ reviewModal, selectedReviewId, setReviewModal }: ReviewIdModalProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentsOpen, setCommentOpen] = useState<boolean>(false);

  const { data: review } = useGetDetailReview(selectedReviewId);

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
            {review.reviewAuthorProfileUrl === null ? (
              <S.UserImage src={IconNoImage} />
            ) : (
              <S.UserImage src={review.reviewAuthorProfileUrl} />
            )}
            <Rating count={review.reviewRating} readonly />
            <S.ReviewTitle>{review.reviewTitle}</S.ReviewTitle>
            <S.PhraseContainer>
              <p>"</p>
              <S.ReviewPhrase>{review.reviewPhrase}</S.ReviewPhrase>
              <p>"</p>
            </S.PhraseContainer>
            <S.ReviewContent>{review.reviewContents}</S.ReviewContent>
            <S.HeartContainer>
              <Heart
                reviewId={review.reviewId}
                isLike={review.isLike}
                likeCount={review.likeCount}
              />
            </S.HeartContainer>
          </S.ReviewContainer>
          <S.CommentInfo onClick={() => setCommentOpen(!commentsOpen)}>
            <img src={IconComment} />
            <p>
              comment <span>{review.comments.length}</span>
            </p>
          </S.CommentInfo>
          {commentsOpen && (
            <Comment
              reviewId={review.reviewId}
              setComments={setComments}
              comments={review.comments}
            />
          )}
        </S.Review>
      </S.ReviewModalContainer>
    );
  }
}
