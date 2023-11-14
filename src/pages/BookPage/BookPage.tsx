import { useState } from 'react';
import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookNav } from '../../components/BookNav/BookNav';
import { Review } from '../../components/BookReview/Review';
import * as S from './BookPage.styles';
import { CreateReview } from '../../components/CreateReview/CreateReview';
import { useGetDetailBook } from '../../querys/bookQuery';

export type detailBook = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
  reviewCount: number;
  description: string;
  category: string;
  releaseDate: string;
  publisher: string;
  isbn: string;
  isLibrary: boolean;
  avgRating: number;
  isBest: boolean;
};

export function BookPage() {
  const [addBookLibrary, setAddBookLibrary] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  const { data: bookInfo } = useGetDetailBook();

  const toggleLibrary = () => {
    setAddBookLibrary((prevAddBookLibrary) => !prevAddBookLibrary);
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
          <BookNav
            addBookLibrary={addBookLibrary}
            toggleLibrary={toggleLibrary}
            setReviewModal={setReviewModal}
          />
        </S.BookNavContainer>
      </S.BookPage>
    )
  );
}
