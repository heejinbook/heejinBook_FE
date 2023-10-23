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

export async function deleteLibraryBook(bookId: number) {
  const response = await client.delete(`${LIBRARY_URL}/${bookId}`);
  return response;
}

export async function getMyReview() {
  const response = await client.get('/api/user/my-info/reviews');
  return response;
}

export async function deleteLibraryReview(reviewId: number) {
  const response = await client.delete(`/api/reviews/${reviewId}`);
  return response;
}
