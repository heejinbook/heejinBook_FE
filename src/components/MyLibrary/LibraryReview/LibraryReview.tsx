import { useState } from 'react';
import * as S from './LibraryReview.styles';
import { CreateReview } from '../../CreateReview/CreateReview';
import { useGetMyReview } from '../../../querys/reviewQuery';
import { useDeleteReview } from '../../../querys/reviewMutation';
import { LibraryReviewItems } from './LibraryReviewItems/LibraryReviewItems';

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

  const { data: myReview } = useGetMyReview();

  const { deleteReviewMutate } = useDeleteReview();

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
              <LibraryReviewItems {...review} />
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
