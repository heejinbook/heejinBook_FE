import { useEffect, useState } from 'react';
import * as S from './LibraryReview.styles';
import { getMyReview } from '../../../apis/library';
import { useNavigate } from 'react-router-dom';
import { deleteLibraryReview } from '../../../apis/review';
import { CreateReview } from '../../CreateReview/CreateReview';

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
  const [myReview, setMyReview] = useState<MyReview[]>([]);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number>(0);
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

  useEffect(() => {
    getMyReview()
      .then((result) => {
        setMyReview(result.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteMyReview = (reviewId: number) => {
    deleteLibraryReview(reviewId)
      .then(() => {
        setMyReview((prev) => prev.filter((review) => review.reviewId !== reviewId));
      })
      .catch((error) => console.error(error));
  };

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
      <CreateReview
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        reviewId={selectedReviewId}
        writtenReview={writtenReview}
        // setWrittenReview={setWrittenReview}
      />
      <p>리뷰 {myReview.length}</p>
      {myReview.length > 0 ? (
        <S.LibraryReviewGrid>
          {myReview.map((review) => (
            <S.LibraryReview key={review.reviewId}>
              <S.BookImage
                src={review.bookThumbnail}
                onClick={() => {
                  navigate(`/books/${review.bookId}`);
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
                    setSelectedReviewId(review.reviewId);
                    deleteMyReview(review.reviewId);
                  }}
                >
                  리뷰 삭제
                </p>
                <p
                  onClick={() => {
                    setSelectedReviewId(review.reviewId);
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
  );
}
