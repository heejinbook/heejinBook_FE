import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import { ReviewType } from '../BookReview/Review';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { useEffect, useState } from 'react';
import { getDetailReview } from '../../apis/review';
import { Rating } from '../common/Rating/Rating';
import { Comment } from '../Comment/Comment';
import IconComment from '../../assets/svg/comment.svg';

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
  const [selectedReview, setSelectedReview] = useState<ReviewType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentsOpen, setCommentOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedReviewId) {
      detailReview(selectedReviewId);
    }
  }, [selectedReviewId]);

  const detailReview = (reviewId: number) => {
    getDetailReview(reviewId)
      .then((result) => {
        if (result.status === 200) setSelectedReview(result.data.data);
        setComments(result.data.data.comments);
      })
      .catch((error) => console.error(error));
  };

  const modalClose = () => {
    setReviewModal(false);
    setSelectedReview(null);
    setCommentOpen(false);
  };

  const commentClose = () => {
    setCommentOpen(!commentsOpen);
  };

  if (!selectedReview) return null;
  return (
    <S.ReviewModalContainer reviewModal={reviewModal}>
      <S.Review reviewModal={reviewModal}>
        <S.XContainer>
          <img src={IconX} onClick={modalClose} />
        </S.XContainer>
        <S.ReviewContainer>
          {selectedReview.reviewAuthorProfileUrl === null ? (
            <S.UserImage src={IconNoImage} />
          ) : (
            <S.UserImage src={selectedReview.reviewAuthorProfileUrl} />
          )}
          <Rating count={selectedReview.reviewRating} readonly />
          <S.ReviewTitle>{selectedReview.reviewTitle}</S.ReviewTitle>
          <S.PhraseContainer>
            <p>"</p>
            <S.ReviewPhrase>{selectedReview.reviewPhrase}</S.ReviewPhrase>
            <p>"</p>
          </S.PhraseContainer>
          <S.ReviewContent>{selectedReview.reviewContents}</S.ReviewContent>
        </S.ReviewContainer>
        <S.CommentInfo onClick={commentClose}>
          <img src={IconComment} />
          <p>
            comment <span>{comments.length}</span>
          </p>
        </S.CommentInfo>
        {commentsOpen && (
          <Comment setComments={setComments} detailReview={detailReview} comments={comments} />
        )}
      </S.Review>
    </S.ReviewModalContainer>
  );
}
