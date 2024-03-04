import { useState } from 'react';
import * as S from './LibraryReview.styles';
import { CreateReview } from '../../CreateReview/CreateReview';
import { useGetMyReview } from '../../../querys/reviewQuery';
import { useDeleteReview } from '../../../querys/reviewMutation';
import { LibraryReviewItems } from './LibraryReviewItems/LibraryReviewItems';
import { DeleteModal } from '../../DeleteModal/DeleteModal';
import { Loading } from '../../common/Loading/Loading';

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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const { data: myReview, isLoading } = useGetMyReview();

  const { deleteReviewMutate } = useDeleteReview();

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  if (isLoading) return <Loading />;

  return myReview ? (
    <S.LibraryReviewContainer>
      <CreateReview
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        writtenReview={writtenReview}
      />
      <DeleteModal
        modalOpen={modalOpen}
        modalClose={modalCloseHandler}
        clickDelete={deleteReviewMutate}
        selected={selected}
        phrase={'리뷰를 삭제하시겠습니까?'}
      />
      <p className="libraryReview">리뷰 {myReview.length}</p>
      {myReview.length > 0 ? (
        <S.LibraryReviewGrid>
          {myReview.map((review) => (
            <S.LibraryReview key={review.reviewId}>
              <LibraryReviewItems {...review} />
              <S.ReviewDeleteNEdit>
                <p
                  onClick={() => {
                    setModalOpen(true);
                    setSelected(review.reviewId);
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
          <p className="noReview">리뷰를 작성해주세요</p>
        </S.NoReview>
      )}
    </S.LibraryReviewContainer>
  ) : null;
}
