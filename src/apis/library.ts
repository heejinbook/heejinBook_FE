import { client } from '.';
import { LibraryBookType } from '../components/MyLibrary/LibraryList/LibraryList';
import { MyReview } from '../components/MyLibrary/LibraryReview/LibraryReview';

const LIBRARY_URL = '/api/library';

export async function postBookToLibrary(bookId: number) {
  const response = await client.post(`${LIBRARY_URL}/${bookId}`);
  return response;
}

export async function getLibraryBookList(): Promise<LibraryBookType[]> {
  const response = await client.get(`${LIBRARY_URL}`);
  return response.data.data;
}

export async function deleteLibraryBook(bookId: number) {
  const response = await client.delete(`${LIBRARY_URL}/${bookId}`);
  return response;
}

export async function getMyReview(): Promise<MyReview[]> {
  const response = await client.get('/api/user/my-info/reviews');
  return response.data.data;
}
