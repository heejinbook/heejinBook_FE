import { Heart } from '../../../Heart/Heart';
import { Rating } from '../../../common/Rating/Rating';
import * as S from './ReviewSwiperItems.styles';
import IconNoImage from '../../../../assets/svg/noImageUser.svg';
import IconComment from '../../../../assets/svg/comment.svg';
import { Text } from '../../BookListReview/ReviewItems/ReviewItems';
import { ReviewType } from '../../Review';

type ReviewSwiperProps = {
  modalOpenHandler: (reviewId: number) => void;
  r: ReviewType;
};

export function ReviewSwiperItems({ modalOpenHandler, r }: ReviewSwiperProps) {
  const EllipsisText = ({ text }: Text) => {
    const maxLength = 155;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  return (
    <S.ReviewSlide key={r.reviewId}>
      <S.ReviewContainer onClick={() => modalOpenHandler(r.reviewId)}>
        {r.reviewAuthorProfileUrl === null ? (
          <S.UserImage src={IconNoImage} />
        ) : (
          <S.UserImage src={r.reviewAuthorProfileUrl} />
        )}
        <Rating count={r.reviewRating} readonly />
        <S.ReviewTitle>{r.reviewTitle}</S.ReviewTitle>
        <S.PhraseContainer>
          <p>"</p>
          <S.ReviewPhrase>{r.reviewPhrase}</S.ReviewPhrase>
          <p>"</p>
        </S.PhraseContainer>
        <S.ReviewContent>{EllipsisText({ text: r.reviewContents })}</S.ReviewContent>
      </S.ReviewContainer>
      <S.CountContainer>
        <S.CommentContainer>
          <img src={IconComment} />
          <S.CommentCount>{r.commentCount}</S.CommentCount>
        </S.CommentContainer>
        <Heart reviewId={r.reviewId} isLike={r.isLike} likeCount={r.likeCount} />
      </S.CountContainer>
    </S.ReviewSlide>
  );
}
