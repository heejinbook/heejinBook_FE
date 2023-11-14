import { useQuery } from '@tanstack/react-query';
import { getBookList, getBookPromise } from '../apis/books';
import { bookFilter } from '../components/MainBookList/BookList';

type MainBookList = {
  currentPage: number;
  sortOption: number;
  searchBook: string;
  selectedCategory: number;
};

export function useGetBookList({
  currentPage,
  sortOption,
  searchBook,
  selectedCategory,
}: MainBookList) {
  const bookList = () => {
    return getBookList({
      page: currentPage - 1,
      sort: bookFilter[sortOption].sortName,
      searchKeyword: encodeURIComponent(searchBook),
      category: selectedCategory,
      size: 40,
    });
  };
  return useQuery<getBookPromise>({
    queryKey: ['bookList', currentPage, sortOption, searchBook, selectedCategory],
    queryFn: bookList,
  });
}