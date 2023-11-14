import { useQuery } from '@tanstack/react-query';
import { detailBook, getBook, getBookList, getBookPromise } from '../apis/books';
import { bookFilter } from '../components/MainBookList/BookList';
import { LibraryBookType } from '../components/MyLibrary/LibraryList/LibraryList';
import { getLibraryBookList } from '../apis/library';
import { useParams } from 'react-router-dom';

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

export function useGetLibraryBook() {
  return useQuery<LibraryBookType[]>({
    queryKey: ['libraryBook'],
    queryFn: () => getLibraryBookList(),
  });
}

export function useGetDetailBook() {
  const { bookId } = useParams();

  return useQuery<detailBook>({
    queryKey: ['detailBook'],
    queryFn: () => getBook(Number(bookId)),
  });
}
