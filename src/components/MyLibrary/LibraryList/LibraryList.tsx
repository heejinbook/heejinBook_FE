import { Book } from '../../MainBookList/BookList';
import * as S from './LibraryList.styles';
import { useNavigate } from 'react-router-dom';
import IconX from '../../../assets/svg/circleX.svg';

export const library: Book[] = [
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
  {
    bookId: 1,
    thumbnail:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
  },
];

export function LibraryList() {
  const navigate = useNavigate();

  return (
    <S.LibraryListContainer>
      <p>전체 {library.length}</p>
      <S.LibraryList>
        {library.map((book, idx) => (
          <S.LibraryListItems
            key={idx}
            onClick={() => {
              navigate('/book/:bookId');
            }}
          >
            <div style={{ position: 'relative' }}>
              <S.LibraryDelete src={IconX} />
              <S.LibraryImage src={book.thumbnail} />
            </div>
            <S.LibraryTitle>{book.title}</S.LibraryTitle>
            <S.LibraryAuthor>{book.author}</S.LibraryAuthor>
          </S.LibraryListItems>
        ))}
      </S.LibraryList>
    </S.LibraryListContainer>
  );
}
