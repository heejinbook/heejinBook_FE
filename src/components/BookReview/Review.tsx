import { useParams } from 'react-router-dom';
import { BookSwiper } from './BookSwiper/BookSwiper';
import * as S from './Review.styles';
import { useEffect, useState } from 'react';
import { BookListReview } from './BookListReview/BookListReview';
import { getSwiperReview } from '../../apis/review';

export type ReviewType = {
  reviewId: number;
  reviewAuthorProfileUrl: string | null;
  reviewTitle: string;
  reviewPhrase: string;
  reviewContents: string;
};

export function Review() {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    getBookReview(Number(bookId));
  }, []);

  const getBookReview = (bookId: number) => {
    getSwiperReview(bookId, {
      size: 3,
    }).then((result) => {
      if (result.status === 200) {
        setReviews(result.data.data);
      }
    });
  };

  return (
    <S.ReviewContainer>
      <S.Review>
        <p>책 리뷰</p>
        {reviews.length > 0 ? (
          <>
            <S.BookSwiperContainer>
              <BookSwiper reviews={reviews} />
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
