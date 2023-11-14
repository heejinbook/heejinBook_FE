import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postHeart } from '../apis/review';
import { Toast } from '../components/common/Toastify/Toastify';

export function usePostHeart() {
  const queryClient = useQueryClient();

  const post = (reviewId: number) => {
    return postHeart(reviewId)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status === 403) {
          Toast.error('내가 작성한 리뷰는 좋아요를 누를 수 없습니다');
        }
      });
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewList'] });
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
      queryClient.invalidateQueries({ queryKey: ['swiperReview'] });
    },
  });
  return { ...mutation, postHeartMutate: mutation.mutateAsync };
}
