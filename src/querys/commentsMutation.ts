import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Contents, deleteComment, postComment, putComment } from '../apis/review';
import { Toast } from '../components/common/Toastify/Toastify';

type CreateComment = {
  reviewId: number;
  payload: Contents;
};

export function useCreateComment() {
  const queryClient = useQueryClient();

  const post = ({ reviewId, payload }: CreateComment) => {
    return postComment(reviewId, payload);
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
      queryClient.invalidateQueries({ queryKey: ['reviewList'] });
    },
  });
  return { ...mutation, postCommentMutate: mutation.mutateAsync };
}

type EditComment = {
  editId: number | null;
  payload: Contents;
};

export function useEditComment() {
  const queryClient = useQueryClient();

  const put = ({ editId, payload }: EditComment) => {
    if (editId) {
      return putComment(editId, payload);
    } else {
      return Promise.reject(Toast.error('No Edit Id'));
    }
  };

  const mutation = useMutation({
    mutationFn: put,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
    },
  });
  return { ...mutation, editCommentMutate: mutation.mutateAsync };
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  const deleteC = (commentId: number) => {
    return deleteComment(commentId);
  };

  const mutation = useMutation({
    mutationFn: deleteC,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
    },
  });
  return { ...mutation, deleteCommentMutate: mutation.mutateAsync };
}

//Promise study 여러 번의 요청을 동시에? promise all / allsettled
//img url로 change 동시에 여러번의 요청 => Promise All 제발 공부해
