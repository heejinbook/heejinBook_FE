import { useState } from 'react';
import * as S from './BookList.styles';
import Pagination from 'react-js-pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { BookFilter } from '../Filter/BookFilter';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';
import { useGetBookList } from '../../querys/bookQuery';
import BookItems from './BookItems/BookItems';

export type Book = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
  reviewCount: number;
  avgRating: number;
};

type CategoryType = {
  categoryId: number;
  categoryName: string;
};

export type FilterType = {
  filterId: number;
  filterName: string;
  sortName: string;
};

export const category: CategoryType[] = [
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

export const bookFilter: FilterType[] = [
  { filterId: 0, filterName: '최신순', sortName: 'CREATED_AT' },
  { filterId: 1, filterName: 'ㄱㄴㄷ', sortName: 'TITLE_ASC' },
  { filterId: 2, filterName: '별점순', sortName: 'RATING_DESC' },
  { filterId: 3, filterName: '리뷰 많은 순', sortName: 'COUNT_REVIEW' },
];

export function BookList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<number>(0);
  const [searchBook, setSearchBook] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [filterName, setFilterName] = useState<string>('sort by');
  const [categoryName, setCategoryName] = useState<string>('category');

  const { data: books, isLoading } = useGetBookList(currentPage, sortOption, searchBook, selectedCategory);

  const selectFilter = (filterId: number, filterName: string) => {
    setSortOption(filterId);
    setFilterName(filterName);
  };

  return (
    books && (
      <S.MainPageContainer>
        <S.Search>
          <CategoryFilter
            categoryName={categoryName}
            onSelectName={(categoryName: string) => setCategoryName(categoryName)}
            onSelect={(categoryId: number) => setSelectedCategory(categoryId)}
          />
          <S.SearchNFilter>
            <SearchBar onSearch={setSearchBook} />
            <BookFilter
              filter={bookFilter}
              onSelect={(filterId: number, filterName: string) =>
                selectFilter(filterId, filterName)
              }
              filterName={filterName}
            />
          </S.SearchNFilter>
        </S.Search>
        <S.BookListContainer>
          {books.contents.map((book, idx) => (
            <BookItems {...book} key={idx} />
          ))}
        </S.BookListContainer>
        <S.PaginationWrapper>
          <div className="pagination">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={40}
              totalItemsCount={books.totalElements}
              pageRangeDisplayed={5}
              onChange={(currentPage: number) => setCurrentPage(currentPage)}
              prevPageText={'‹'}
              nextPageText={'›'}
            />
          </div>
        </S.PaginationWrapper>
      </S.MainPageContainer>
    )
  );
}
