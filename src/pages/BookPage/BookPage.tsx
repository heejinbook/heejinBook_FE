import { useState } from 'react';
import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookNav } from '../../components/BookNav/BookNav';
import { Review } from '../../components/BookReview/Review';
import * as S from './BookPage.styles';
import { CreateReview } from '../../components/CreateReview/CreateReview';
import { useGetDetailBook } from '../../querys/bookQuery';

export function BookPage() {
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  const { data: bookInfo } = useGetDetailBook();

  const modalOpen = () => {
    setReviewModal(true);
  };

  return (
    bookInfo && (
      <S.BookPage>
        <S.InfoContainer>
          <BookInfo books={bookInfo} />
          <Review />
        </S.InfoContainer>
        <CreateReview reviewModal={reviewModal} setReviewModal={setReviewModal} />
        <S.BookNavContainer>
          <BookNav addBookLibrary={bookInfo.isLibrary} modalOpen={modalOpen} />
        </S.BookNavContainer>
      </S.BookPage>
    )
  );
}
