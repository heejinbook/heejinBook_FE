import { useEffect, useState } from 'react';
import * as S from './BookList.styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { BookFilter } from '../Filter/BookFilter';

export type Book = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
  reviewCount: number;
};

export type SortOption = 'title' | 'review' | '';

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>('');
  const [searchBook, setSearchBook] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    bookPage(currentPage);
  }, [currentPage, sortOption, searchBook]);

  const bookPage = (page: number) => {
    let url = `http://43.200.172.180:8080/api/books?page=${page}&size=40&category=0`;

    if (sortOption === 'title') {
      url += '&sort=title';
    } else if (sortOption === 'review') {
      url += '&sort=r.id';
    }

    axios
      .get(url)
      .then((result) => {
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
      <S.SearchNFilter>
        <SearchBar onSearch={setSearchBook} />
        <S.FilterWrapper>
          <BookFilter onSortChange={setSortOption} />
        </S.FilterWrapper>
      </S.SearchNFilter>
      <S.BookListContainer>
        {books.map((book) => (
          <S.BookListItems
            key={book.bookId}
            onClick={() => {
              navigate('/book');
            }}
          >
            <S.BookImage src={book.thumbnail} />
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
            <S.Reviewer>{book.reviewCount}</S.Reviewer>
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
    </>
  );
}
