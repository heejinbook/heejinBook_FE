import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  CreateReviewType,
  deleteLibraryReview,
  postReview,
  putLibraryReview,
} from '../apis/review';
import { Toast } from '../components/common/Toastify/Toastify';

type CreateReview = {
  bookId: number;
  payload: CreateReviewType;
};

export function useCreateReview() {
  const queryClient = useQueryClient();

  const post = ({ bookId, payload }: CreateReview) => {
    return postReview(bookId, payload)
      .then((result) => {
        if (result.data.status === 201) {
          Toast.success('리뷰 작성 성공!');
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          Toast.error('이미 리뷰를 작성했습니다');
        }
      });
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['swiperReview'] });
      queryClient.invalidateQueries({ queryKey: ['reviewList'] });
      queryClient.invalidateQueries({ queryKey: ['detailBook'] });
      queryClient.invalidateQueries({ queryKey: ['myReview'] });
    },
  });
  return { ...mutation, createReviewMutate: mutation.mutateAsync };
}

type editReview = {
  reviewId: number;
  payload: CreateReviewType;
};

export function useEditReview() {
  const queryClient = useQueryClient();

  const put = ({ reviewId, payload }: editReview) => {
    return putLibraryReview(reviewId, payload)
      .then((result) => {
        if (result.data.status === 200) {
          Toast.success('리뷰가 수정되었습니다');
        }
      })
      .catch((error) => console.error(error));
  };

  const mutation = useMutation({
    mutationFn: put,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReview'] });
    },
  });
  return { ...mutation, editReviewMutate: mutation.mutateAsync };
}

export function useDeleteReview() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (reviewId: number) => deleteLibraryReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReview'] });
      Toast.success('리뷰가 삭제됐습니다');
    },
  });
  return { ...mutation, deleteReviewMutate: mutation.mutateAsync };
}
