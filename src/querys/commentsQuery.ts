import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Contents, postComment, putComment } from '../apis/review';

export function useCreateComment(reviewId: number) {
  const queryClient = useQueryClient();

  const createComment = (payload: Contents) => {
    return postComment(reviewId, payload);
  };

  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
    },
  });
  return { ...mutation, postCommentMutate: mutation.mutateAsync };
}

export function useEditComment(commentId: number | null) {
  const queryClient = useQueryClient();

  const editComment = (payload: Contents) => {
    if (commentId) {
      return putComment(commentId, payload);
    }
  };

  const mutation = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
    },
  });
  return { ...mutation, editCommentMutate: mutation.mutateAsync };
}
