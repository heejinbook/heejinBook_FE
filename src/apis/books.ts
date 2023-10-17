import { AxiosResponse } from 'axios';
import { client } from '.';
import { Book } from '../components/MainBookList/BookList';

const BOOK_URL = '/api/books';

type BookAPI = {
  contents: Book[];
  hasNext: boolean;
  hasPrevious: boolean;
  totalElements: number;
  totalPages: number;
};

// export async function getBookList(page: number): Promise<AxiosResponse<BookAPI>> {
//   const response = await client.get(`${BOOK_URL}?page=${page}`);
//   console.log(response.data);
//   return response.data;
// }

export async function getBook(book_id: number) {
  const response = await client.get(`${BOOK_URL}/${book_id}`);
  return response;
}
