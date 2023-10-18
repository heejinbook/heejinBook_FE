import { client } from '.';

const LIBRARY_URL = '/api/library';

export async function postBookToLibrary(bookId: number) {
  const response = await client.post(`${LIBRARY_URL}/${bookId}`);
  return response;
}
