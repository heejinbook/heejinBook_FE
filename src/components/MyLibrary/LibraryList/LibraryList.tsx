import * as S from './LibraryList.styles';
import { useNavigate } from 'react-router-dom';
import IconX from '../../../assets/svg/circleX.svg';
import { useEffect, useState } from 'react';
import { deleteLibraryBook, getLibraryBookList } from '../../../apis/library';

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

  const deleteBookHandler = (bookId: number) => {
    deleteLibraryBook(bookId);
    setLibraryBook((prev) => prev.filter((book) => book.bookId !== bookId));
  };

  return (
    <S.LibraryListContainer>
      <p>전체 {libraryBook.length}</p>
      <S.LibraryList>
        {libraryBook.map((book) => (
          <S.LibraryListItems key={book.bookId}>
            <div style={{ position: 'relative' }}>
              <S.LibraryDelete src={IconX} onClick={() => deleteBookHandler(book.bookId)} />
              <S.LibraryImage
                src={book.bookThumbnail}
                onClick={() => {
                  navigate(`/main/books/${book.bookId}`);
                }}
              />
            </div>
            <S.LibraryTitle
              onClick={() => {
                navigate(`/main/books/${book.bookId}`);
              }}
            >
              {book.bookTitle}
            </S.LibraryTitle>
            <S.LibraryAuthor
              onClick={() => {
                navigate(`/main/books/${book.bookId}`);
              }}
            >
              {book.bookAuthor}
            </S.LibraryAuthor>
          </S.LibraryListItems>
        ))}
      </S.LibraryList>
    </S.LibraryListContainer>
  );
}
