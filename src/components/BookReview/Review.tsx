import { BookSwiper } from './BookSwiper/BookSwiper';
import * as S from './Review.styles';
import { BookListReview } from './BookListReview/BookListReview';
import { CommentType } from '../Comment/Comment';
import { useGetReviewSwiper } from '../../querys/reviewQuery';

export type ReviewType = {
  reviewId: number;
  reviewAuthorProfileUrl: string | null;
  reviewTitle: string;
  reviewPhrase: string;
  reviewContents: string;
  reviewRating: number;
  isLike: boolean;
  likeCount: number;
  commentCount: number;
  comments: CommentType[];
};

export function Review() {
  const { data: review } = useGetReviewSwiper();

  return (
    <S.ReviewContainer>
      <S.Review>
        <p>책 리뷰</p>
        {review && review.length > 0 ? (
          <>
            <S.BookSwiperContainer>
              <BookSwiper review={review} />
            </S.BookSwiperContainer>
            <BookListReview />
          </>
        ) : (
          <S.NoReview>
            <p>리뷰가 없어요</p>
            <p>이 책의 리뷰를 작성하는 첫 번째 회원이 되어주세요</p>
          </S.NoReview>
        )}
      </S.Review>
    </S.ReviewContainer>
  );
}
