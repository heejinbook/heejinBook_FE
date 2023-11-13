import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateReviewType, postReview } from '../apis/review';
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
      queryClient.invalidateQueries({ queryKey: ['reviewList'] });
    },
  });
  return { ...mutation, createReviewMutate: mutation.mutateAsync };
}
