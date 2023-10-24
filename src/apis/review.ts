import { client } from '.';

export type ReviewType = {
  title: string;
  contents: string;
  phrase: string;
  rating: number;
};

export type getReviewListParams = {
  page: number;
  size: number;
  sort: string;
};

const REVIEW_URL = 'api/reviews';

export async function postReview(bookId: number, payload: ReviewType) {
  const response = await client.post(`${REVIEW_URL}/${bookId}`, payload);
  return response;
}

export async function getReviewList(bookId: number, params: getReviewListParams) {
  const { page, size, sort } = params;
  const response = await client.get(`${REVIEW_URL}/list/${bookId}`, {
    params: { page, size, sort },
  });
  return response;
}

export async function deleteLibraryReview(reviewId: number) {
  const response = await client.delete(`${REVIEW_URL}/${reviewId}`);
  return response;
}

export async function putLibraryReview(reviewId: number, payload: ReviewType) {
  const response = await client.put(`${REVIEW_URL}/${reviewId}`, payload);
  return response;
}
