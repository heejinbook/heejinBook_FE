import * as S from './ReviewModal.styles';
import IconX from '../../assets/svg/X.svg';
import { ReviewType } from '../BookReview/Review';

type ReviewIdModalProps = {
  selectedReview: ReviewType | null;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function ReviewModal({ reviewModal, selectedReview, setReviewModal }: ReviewIdModalProps) {
  if (!selectedReview) return null;

  return (
    <S.ReviewModalContainer reviewModal={reviewModal}>
      <S.Review reviewModal={reviewModal}>
        <S.XContainer>
          <img src={IconX} onClick={() => setReviewModal(false)} />
        </S.XContainer>
        <S.ReviewContainer>
          <S.UserImage src={selectedReview.reviewAuthorProfileUrl} />
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
