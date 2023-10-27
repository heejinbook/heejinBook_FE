import { client } from '.';

const BOOK_URL = '/api/books';

type getBookListParams = {
  page: number;
  sort: string;
  searchKeyword: string;
  category: number;
  size: number;
};

export async function getBookList(params: getBookListParams) {
  const { page, sort, searchKeyword, category, size } = params;
  const response = await client.get(BOOK_URL, {
    params: { page, sort, searchKeyword, category, size },
  });
  return response;
}

export async function getBook(book_id: number) {
  const response = await client.get(`${BOOK_URL}/${book_id}`);
  return response;
}

export async function getBestBook() {
  const response = await client.get(`${BOOK_URL}/best-books`);
  return response;
}
