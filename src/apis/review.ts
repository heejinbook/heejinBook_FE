import { client } from '.';
import { ReviewType } from '../components/BookReview/Review';

export type CreateReviewType = {
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

export type getSwiperParams = {
  size: number;
};

export type getReviewPromise = {
  contents: ReviewType[];
  totalElements: number;
};

const REVIEW_URL = 'api/reviews';

export async function postReview(bookId: number, payload: CreateReviewType) {
  const response = await client.post(`${REVIEW_URL}/${bookId}`, payload);
  return response;
}

export async function getReviewList(
  bookId: number,
  params: getReviewListParams,
): Promise<getReviewPromise> {
  const { page, size, sort } = params;
  const response = await client.get(`${REVIEW_URL}/list/${bookId}`, {
    params: { page, size, sort },
  });
  return response.data.data;
}

export async function deleteLibraryReview(reviewId: number) {
  const response = await client.delete(`${REVIEW_URL}/${reviewId}`);
  return response;
}

export async function putLibraryReview(reviewId: number, payload: CreateReviewType) {
  const response = await client.put(`${REVIEW_URL}/${reviewId}`, payload);
  return response;
}

export async function getSwiperReview(
  bookId: number,
  params: getSwiperParams,
): Promise<ReviewType[]> {
  const { size } = params;
  const response = await client.get(`${REVIEW_URL}/swiper/${bookId}`, {
    params: {
      size,
    },
  });
  return response.data.data;
}

export async function postHeart(reviewId: number) {
  const response = await client.post(`api/likes/${reviewId}`);
  return response;
}

export async function getDetailReview(reviewId: number): Promise<ReviewType> {
  const response = await client.get(`${REVIEW_URL}/${reviewId}`);
  return response.data.data;
}

export type Contents = {
  contents: string;
};

const COMMENT_URL = 'api/comment';

export async function postComment(reviewId: number, payload: Contents) {
  const response = await client.post(`${COMMENT_URL}/${reviewId}`, payload);
  return response;
}

export async function deleteComment(commentId: number) {
  const response = await client.delete(`${COMMENT_URL}/${commentId}`);
  return response;
}

export async function putComment(commentId: number, payload: Contents) {
  const response = await client.put(`${COMMENT_URL}/${commentId}`, payload);
  return response;
}
