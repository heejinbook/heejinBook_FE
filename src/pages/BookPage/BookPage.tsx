import { useEffect, useState } from 'react';
import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookNavi } from '../../components/BookNavi/BookNavi';
import { Review } from '../../components/BookReview/Review';
import { Header } from '../../components/common/Header/Header';
import * as S from './BookPage.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { postBookToLibrary } from '../../apis/library';
import { Toast } from '../../components/common/Toastify/Toastify';

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
  });

  useEffect(() => {
    getBookInfo(Number(bookId));
  }, []);

  const getBookInfo = (bookId: number) => {
    axios
      .get(`http://43.200.172.180:8080/api/books/${bookId}`)
      .then((result) => {
        if (result.status === 200) {
          setBookInfo(result.data.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.error(error);
        }
      });
  };

  return (
    <S.BookPage>
      <Header />
      <S.InfoContainer>
        <BookInfo books={bookInfo} />
        <Review />
      </S.InfoContainer>
      <S.BookNaviContainer>
        <BookNavi />
      </S.BookNaviContainer>
    </S.BookPage>
  );
}
