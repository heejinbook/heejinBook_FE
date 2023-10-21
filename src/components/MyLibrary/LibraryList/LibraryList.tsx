import * as S from './LibraryList.styles';
import { useNavigate } from 'react-router-dom';
import IconX from '../../../assets/svg/circleX.svg';
import { useEffect, useState } from 'react';
import { getLibraryBookList } from '../../../apis/library';

export type LibraryBookType = {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookThumbnail: string;
};

export function LibraryList() {
  const [libraryBook, setLibraryBook] = useState<LibraryBookType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getLibraryBookList().then((result) => {
      setLibraryBook(result.data.data);
    });
  }, []);

  return (
    <S.LibraryListContainer>
      <p>전체 {libraryBook.length}</p>
      <S.LibraryList>
        {libraryBook.map((book) => (
          <S.LibraryListItems
            key={book.bookId}
            onClick={() => {
              navigate('/book/:bookId');
            }}
          >
            <div style={{ position: 'relative' }}>
              <S.LibraryDelete src={IconX} />
              <S.LibraryImage src={book.bookThumbnail} />
            </div>
            <S.LibraryTitle>{book.bookTitle}</S.LibraryTitle>
            <S.LibraryAuthor>{book.bookAuthor}</S.LibraryAuthor>
          </S.LibraryListItems>
        ))}
      </S.LibraryList>
    </S.LibraryListContainer>
  );
}
