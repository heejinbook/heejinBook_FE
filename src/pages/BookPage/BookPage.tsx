import { useState } from 'react';
import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookNav } from '../../components/BookNav/BookNav';
import { Review } from '../../components/BookReview/Review';
import * as S from './BookPage.styles';
import { CreateReview } from '../../components/CreateReview/CreateReview';
import { useGetDetailBook } from '../../querys/bookQuery';
import { Loading } from '../../components/common/Loading/Loading';
import { useGetMyReview } from '../../querys/reviewQuery';
import { useRecoilValue } from 'recoil';
import { reviewIdState } from '../../recoil/reviewIdState';
import { Toast } from '../../components/common/Toastify/Toastify';

export function BookPage() {
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const reviewIds = useRecoilValue(reviewIdState);

  const { data: bookInfo, isLoading } = useGetDetailBook();

  const { data: myReview } = useGetMyReview();

  const modalOpen = () => {
    if (myReview) {
      const alreadyHaveReview = myReview.filter((review) => reviewIds.includes(review.reviewId));
      if (alreadyHaveReview.length > 0) {
        setReviewModal(false);
        Toast.error('이미 리뷰를 작성했습니다');
      } else setReviewModal(true);
    }
  };

  if (isLoading) return <Loading />;

  return (
    bookInfo && (
      <S.BookPage>
        <CreateReview reviewModal={reviewModal} setReviewModal={setReviewModal} />
        <S.InfoContainer>
          <BookInfo books={bookInfo} />
          <Review />
        </S.InfoContainer>
        <S.BookNavContainer>
          <BookNav addBookLibrary={bookInfo.isLibrary} modalOpen={modalOpen} />
        </S.BookNavContainer>
      </S.BookPage>
    )
  );
}
