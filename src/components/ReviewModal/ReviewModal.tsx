import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import { ReviewType } from '../BookReview/Review';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { useEffect, useState } from 'react';
import { getDetailReview } from '../../apis/review';

type ReviewIdModalProps = {
  selectedReviewId: number | null;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function ReviewModal({ reviewModal, selectedReviewId, setReviewModal }: ReviewIdModalProps) {
  const [selectedReview, setSelectedReview] = useState<ReviewType | null>(null);

  useEffect(() => {
    if (selectedReviewId) {
      detailReview(selectedReviewId);
    }
  }, [selectedReviewId]);

  const detailReview = (reviewId: number) => {
    getDetailReview(reviewId)
      .then((result) => {
        if (result.status === 200) setSelectedReview(result.data.data);
      })
      .catch((error) => console.error(error));
  };

  const modalClose = () => {
    setReviewModal(false);
    setSelectedReview(null);
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
          <S.ReviewTitle>{selectedReview.reviewTitle}</S.ReviewTitle>
          <S.PhraseContainer>
            <p>"</p>
            <S.ReviewPhrase>{selectedReview.reviewPhrase}</S.ReviewPhrase>
            <p>"</p>
          </S.PhraseContainer>
          <S.ReviewContent>{selectedReview.reviewContents}</S.ReviewContent>
        </S.ReviewContainer>
      </S.Review>
    </S.ReviewModalContainer>
  );
}
