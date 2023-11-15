import { client } from '.';
import { Book } from '../components/MainBookList/BookList';

const BOOK_URL = '/api/books';

type getBookListParams = {
  page: number;
  sort: string;
  searchKeyword: string;
  category: number;
  size: number;
};

export type getBookPromise = {
  contents: Book[];
  totalElements: number;
};

export type detailBook = {
  bookId: number;
  thumbnail: string;
  title: string;
  author: string;
  reviewCount: number;
  description: string;
  category: string;
  releaseDate: string;
  publisher: string;
  isbn: string;
  isLibrary: boolean;
  avgRating: number;
  isBest: boolean;
};

export async function getBookList(params: getBookListParams): Promise<getBookPromise> {
  const { page, sort, searchKeyword, category, size } = params;
  const response = await client.get(BOOK_URL, {
    params: { page, sort, searchKeyword, category, size },
  });
  return response.data.data;
}

export async function getBook(book_id: number): Promise<detailBook> {
  const response = await client.get(`${BOOK_URL}/${book_id}`);
  console.log(response.data);
  return response.data.data;
}

export async function getBestBook() {
  const response = await client.get(`${BOOK_URL}/best-books`);
  return response;
}
