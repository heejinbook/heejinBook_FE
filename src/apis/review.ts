import { client } from '.';

export type ReviewType = {
  title: string;
  contents: string;
  phrase: string;
};

const REVIEW_URL = 'api/reviews';

export async function postReview(bookId: number, payload: ReviewType) {
  const response = await client.post(`${REVIEW_URL}/${bookId}`, payload);
  return response;
}
