import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { useState } from 'react';
import { Rating } from '../common/Rating/Rating';
import { Comment } from '../Comment/Comment';
import IconComment from '../../assets/svg/comment.svg';
import { Heart } from '../Heart/Heart';
import { useGetDetailReview } from '../../querys/reviewQuery';
import { Loading } from '../common/Loading/Loading';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { useDeleteComment } from '../../querys/commentsMutation';
import { useLockScroll } from '../../hooks/useLockScroll';

type ReviewIdModalProps = {
  selectedReviewId: number | null;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function ReviewModal({ reviewModal, selectedReviewId, setReviewModal }: ReviewIdModalProps) {
  const [commentsOpen, setCommentOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const { data: review, isLoading } = useGetDetailReview(selectedReviewId);

  const { deleteCommentMutate } = useDeleteComment();

  useLockScroll(reviewModal);

  const modalClose = () => {
    setReviewModal(false);
    setCommentOpen(false);
  };

  const selectedCommentId = (commentId: number) => {
    setSelectedId(commentId);
  };

  if (isLoading) return <Loading />;

  if (review) {
    return (
      <S.ReviewModalContainer reviewModal={reviewModal}>
        <DeleteModal
          modalOpen={deleteModalOpen}
          modalClose={() => setDeleteModalOpen(false)}
          clickDelete={deleteCommentMutate}
          selected={selectedId}
          phrase={'댓글을 삭제하시겠습니까?'}
        />
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
            {review.reviewTitle.split('\n').map((title, idx) => (
              <S.ReviewTitle key={idx}>
                {title}
                <br />
              </S.ReviewTitle>
            ))}
            <S.PhraseContainer>
              <p className="quotationMarks">"</p>
              {review.reviewPhrase.split('\n').map((phrase, idx) => (
                <S.ReviewPhrase key={idx}>
                  {phrase}
                  <br />
                </S.ReviewPhrase>
              ))}
              <p className="quotationMarks">"</p>
            </S.PhraseContainer>
            {review.reviewContents.split('\n').map((contents, idx) => (
              <S.ReviewContent key={idx}>
                {contents}
                <br />
              </S.ReviewContent>
            ))}
            <S.CountContainer>
              <S.CommentContainer onClick={() => setCommentOpen(!commentsOpen)}>
                <img src={IconComment} />
                <p className="commentCount">
                  comment <span>{review.commentCount}</span>
                </p>
              </S.CommentContainer>
              <Heart
                reviewId={review.reviewId}
                isLike={review.isLike}
                likeCount={review.likeCount}
              />
            </S.CountContainer>
          </S.ReviewContainer>
          {commentsOpen && (
            <Comment
              reviewId={review.reviewId}
              comments={review.comments}
              selectedCommentId={(commentId: number) => selectedCommentId(commentId)}
              modalOpen={() => setDeleteModalOpen(true)}
            />
          )}
        </S.Review>
      </S.ReviewModalContainer>
    );
  }
}
