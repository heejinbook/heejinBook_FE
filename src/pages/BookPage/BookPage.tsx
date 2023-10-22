import { useEffect, useState } from 'react';
import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookNavi } from '../../components/BookNavi/BookNavi';
import { Review } from '../../components/BookReview/Review';
import { Header } from '../../components/common/Header/Header';
import * as S from './BookPage.styles';
import { useParams } from 'react-router-dom';
import { getBook } from '../../apis/books';
import { CreateReview } from '../../components/CreateReview/CreateReview';

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
};

export function BookPage() {
  const { bookId } = useParams();

  const [bookInfo, setBookInfo] = useState<detailBook>({
    bookId: 0,
    thumbnail: '',
    title: '',
    author: '',
    reviewCount: 0,
    description: '',
    category: '',
    releaseDate: '',
    publisher: '',
    isbn: '',
    isLibrary: false,
  });
  const [addBookLibrary, setAddBookLibrary] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  useEffect(() => {
    getBookInfo(Number(bookId));
  }, [addBookLibrary]);

  const getBookInfo = (bookId: number) => {
    getBook(bookId)
      .then((result) => {
        if (result.status === 200) {
          setBookInfo(result.data.data);
          setAddBookLibrary(result.data.data.isLibrary);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.error(error);
        }
      });
  };

  const toggleLibrary = () => {
    setAddBookLibrary((prevAddBookLibrary) => !prevAddBookLibrary);
  };

  return (
    <S.BookPage>
      <Header />
      <S.InfoContainer>
        <BookInfo books={bookInfo} />
        <Review />
      </S.InfoContainer>
      <CreateReview reviewModal={reviewModal} setReviewModal={setReviewModal} />
      <S.BookNaviContainer>
        <BookNavi
          addBookLibrary={addBookLibrary}
          toggleLibrary={toggleLibrary}
          setReviewModal={setReviewModal}
        />
      </S.BookNaviContainer>
    </S.BookPage>
  );
}
