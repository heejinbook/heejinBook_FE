import * as S from './BookList.styles';
import { useNavigate } from 'react-router-dom';

export type Book = {
  image: string;
  title: string;
  author: string;
};

export const books: Book[] = [
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
];

export function BookList() {
  const navigate = useNavigate();

  return (
    <S.BookListContainer>
      <S.BookList
        onClick={() => {
          navigate('/book');
        }}
      >
        {books.map((book, idx) => (
          <S.BookListItems key={idx}>
            <S.BookImage src={book.image} />
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
          </S.BookListItems>
        ))}
      </S.BookList>
    </S.BookListContainer>
  );
}
