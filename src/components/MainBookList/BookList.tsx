import { useEffect, useState } from 'react';
import * as S from './BookList.styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
// import { Pagination } from '../Pagination/Pagination';

export type Book = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
};

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

  useEffect(() => {
    bookPage(currentPage);
  }, [currentPage]);

  const bookPage = (page: number) => {
    axios
      .get(`http://43.200.172.180:8080/api/books?page=${page}&size=40&category=0`)
      .then((result) => {
        console.log(totalPage);
        setTotalPage(result.data.data.totalPages);
        setTotalItems(result.data.data.totalElements);
        const bookItems: Book[] = result.data.data.contents.map((book: Book) => ({
          thumbnail: book.thumbnail,
          title: book.title,
          author: book.author,
        }));
        setBooks(bookItems);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const pageChangeHandler = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <S.BookListContainer
        onClick={() => {
          navigate('/book');
        }}
      >
        {books.map((book) => (
          <S.BookListItems key={book.bookId}>
            <S.BookImage src={book.thumbnail} />
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
          </S.BookListItems>
        ))}
      </S.BookListContainer>
      <S.PaginationWrapper>
        <div className="pagination">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={40}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={pageChangeHandler}
            prevPageText={'‹'}
            nextPageText={'›'}
          />
        </div>
      </S.PaginationWrapper>

      {/* <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      /> */}
    </>
  );
}
