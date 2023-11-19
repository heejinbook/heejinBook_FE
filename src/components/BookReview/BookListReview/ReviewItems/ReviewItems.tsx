import React from 'react';
import * as S from './ReviewItems.styles';
import { Rating } from '../../../common/Rating/Rating';
import { Heart } from '../../../Heart/Heart';
import IconNoImage from '../../../../assets/svg/noImageUser.svg';

type Text = {
  text: string;
};

type Props = {
  reviewAuthorProfileUrl: string | null;
  reviewRating: number;
  reviewTitle: string;
  reviewPhrase: string;
  reviewId: number;
  isLike: boolean;
  likeCount: number;
  modalOpen: (reviewId: number) => void;
};

const equalProps = (prevProps: any, nextProps: any) => {
  const key1 = Object.keys(prevProps);
  const key2 = Object.keys(nextProps);

  if (key1.length !== key2.length) {
    return false;
  }

  return key1.every((key) => prevProps[key] === nextProps[key]);
};

const ReviewItems = React.memo(function ({
  reviewAuthorProfileUrl,
  reviewRating,
  reviewTitle,
  reviewPhrase,
  reviewId,
  isLike,
  likeCount,
  modalOpen,
}: Props) {
  const EllipsisText = ({ text }: Text) => {
    const maxLength = 20;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <S.LibraryReview>
      <S.ReviewContainer onClick={() => modalOpen(reviewId)}>
        {reviewAuthorProfileUrl === null ? (
          <S.ReviewImage src={IconNoImage} />
        ) : (
          <S.ReviewImage src={reviewAuthorProfileUrl} />
        )}
        <Rating count={reviewRating} readonly />
        <S.ReviewTitle>{reviewTitle}</S.ReviewTitle>
        <S.ReviewPhraseContainer>
          <p>"</p>
          <S.ReviewPhrase>{EllipsisText({ text: reviewPhrase })}</S.ReviewPhrase>
          <p>"</p>
        </S.ReviewPhraseContainer>
      </S.ReviewContainer>
      <S.HeartContainer>
        <Heart reviewId={reviewId} isLike={isLike} likeCount={likeCount} />
      </S.HeartContainer>
    </S.LibraryReview>
  );
},
equalProps);

export default ReviewItems;
