import { useEffect, useState } from 'react';
import * as S from './LibraryReview.styles';
import { getMyReview } from '../../../apis/library';

export type MyReview = {
  reviewId: number;
  bookId: number;
  bookThumbnail: string;
  bookTitle: string;
  bookAuthor: string;
  reviewPhrase: string;
};

export function LibraryReview() {
  const [myReview, setMyReview] = useState<MyReview[]>([]);

  useEffect(() => {
    getMyReview()
      .then((result) => {
        setMyReview(result.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  type Text = {
    text: string;
  };

  const EllipsisText = ({ text }: Text) => {
    const maxLength = 100;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <S.LibraryReviewContainer>
      <p>리뷰 {myReview.length}</p>
      <S.LibraryReviewGrid>
        {myReview.map((review) => (
          <S.LibraryReview key={review.reviewId}>
            <S.BookImage src={review.bookThumbnail} />
            <S.BookTitle>{review.bookTitle}</S.BookTitle>
            <S.BookAuthor>{review.bookAuthor}</S.BookAuthor>
            <S.ReviewPhraseContainer>
              <p>"</p>
              <S.ReviewPhrase>{EllipsisText({ text: review.reviewPhrase })}</S.ReviewPhrase>
              <p>"</p>
            </S.ReviewPhraseContainer>
            <S.ReviewDelete>리뷰 삭제</S.ReviewDelete>
          </S.LibraryReview>
        ))}
      </S.LibraryReviewGrid>
    </S.LibraryReviewContainer>
  );
}
