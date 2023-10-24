import { useEffect, useState } from 'react';
import * as S from './BookList.styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { BookFilter } from '../Filter/BookFilter';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';

export type Book = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
  reviewCount: number;
};

export type CategoryType = {
  categoryId: number;
  categoryName: string;
};

const category: CategoryType[] = [
  { categoryId: 0, categoryName: 'All' },
  { categoryId: 1, categoryName: '로맨스' },
  { categoryId: 2, categoryName: '추리' },
  { categoryId: 3, categoryName: '에세이' },
  { categoryId: 4, categoryName: '고전' },
  { categoryId: 5, categoryName: '수필' },
  { categoryId: 6, categoryName: 'SF' },
  { categoryId: 7, categoryName: '무협' },
  { categoryId: 8, categoryName: '시' },
  { categoryId: 9, categoryName: '판타지' },
  { categoryId: 10, categoryName: '공포' },
];

type SortOption = 'createAt' | 'review' | '';

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>('createAt');
  const [searchBook, setSearchBook] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    bookPage(currentPage);
  }, [currentPage, sortOption, searchBook, selectedCategory]);

  const bookPage = (page: number) => {
    axios
      .get('http://43.200.172.180:8080/api/books', {
        params: {
          page: page - 1,
          sort: sortOption === 'createAt' ? 'CREATED_AT' : 'COUNT_REVIEW',
          searchKeyword: encodeURIComponent(searchBook),
          category: selectedCategory,
          size: 40,
        },
      })
      .then((result) => {
        setTotalItems(result.data.data.totalElements);
        const bookItems: Book[] = result.data.data.contents.map((book: Book) => ({
          bookId: book.bookId,
          thumbnail: book.thumbnail,
          title: book.title,
          author: book.author,
          reviewCount: book.reviewCount,
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
      <S.Search>
        <CategoryFilter category={category} onSelect={setSelectedCategory} />
        <S.SearchNFilter>
          <SearchBar onSearch={setSearchBook} />
          <BookFilter onSortChange={setSortOption} />
        </S.SearchNFilter>
      </S.Search>
      <S.BookListContainer>
        {books.map((book) => (
          <S.BookListItems
            key={book.bookId}
            onClick={() => {
              navigate(`/books/${book.bookId}`);
            }}
          >
            <S.BookImage src={book.thumbnail} />
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
            <S.ReviewerContainer>
              <S.ReviewerIcon src="src/assets/svg/person.svg" />
              <S.Reviewer>{book.reviewCount}</S.Reviewer>
            </S.ReviewerContainer>
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
