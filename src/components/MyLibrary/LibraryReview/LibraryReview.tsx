import { useState } from 'react';
import * as S from './LibraryReview.styles';
import { useNavigate } from 'react-router-dom';
import { CreateReview } from '../../CreateReview/CreateReview';
import { useGetMyReview } from '../../../querys/reviewQuery';
import { useDeleteReview } from '../../../querys/reviewMutation';

export type MyReview = {
  reviewId: number;
  bookId: number;
  bookThumbnail: string;
  bookTitle: string;
  bookAuthor: string;
  reviewPhrase: string;
  reviewContents: string;
  reviewTitle: string;
  reviewRating: number;
};

export function LibraryReview() {
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [writtenReview, setWrittenReview] = useState<MyReview>({
    reviewId: 0,
    bookId: 0,
    bookThumbnail: '',
    bookTitle: '',
    bookAuthor: '',
    reviewPhrase: '',
    reviewContents: '',
    reviewTitle: '',
    reviewRating: 0,
  });

  const navigate = useNavigate();

  const { data: myReview } = useGetMyReview();

  const { deleteReviewMutate } = useDeleteReview();

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

  return myReview ? (
    <S.LibraryReviewContainer>
      <CreateReview
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        writtenReview={writtenReview}
      />
      <p>리뷰 {myReview.length}</p>
      {myReview.length > 0 ? (
        <S.LibraryReviewGrid>
          {myReview.map((review) => (
            <S.LibraryReview key={review.reviewId}>
              <S.BookImage
                src={review.bookThumbnail}
                onClick={() => {
                  navigate(`/main/books/${review.bookId}`);
                }}
              />
              <S.BookTitle>{review.bookTitle}</S.BookTitle>
              <S.BookAuthor>{review.bookAuthor}</S.BookAuthor>
              <S.ReviewPhraseContainer>
                <p>"</p>
                <S.ReviewPhrase>{EllipsisText({ text: review.reviewPhrase })}</S.ReviewPhrase>
                <p>"</p>
              </S.ReviewPhraseContainer>
              <S.ReviewDeleteNEdit>
                <p
                  onClick={() => {
                    deleteReviewMutate(review.reviewId);
                  }}
                >
                  리뷰 삭제
                </p>
                <p
                  onClick={() => {
                    setWrittenReview(review);
                    setReviewModal(true);
                  }}
                >
                  리뷰 수정
                </p>
              </S.ReviewDeleteNEdit>
            </S.LibraryReview>
          ))}
        </S.LibraryReviewGrid>
      ) : (
        <S.NoReview>
          <p>리뷰를 작성해주세요</p>
        </S.NoReview>
      )}
    </S.LibraryReviewContainer>
  ) : null;
}
