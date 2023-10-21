import { client } from '.';

const LIBRARY_URL = '/api/library';

export async function postBookToLibrary(bookId: number) {
  const response = await client.post(`${LIBRARY_URL}/${bookId}`);
  return response;
}

export async function getLibraryBookList() {
  const response = await client.get(`${LIBRARY_URL}`);
  return response;
}
