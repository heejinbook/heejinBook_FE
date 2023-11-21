import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NicknameType, patchNickname } from '../apis/user';
import { Toast } from '../components/common/Toastify/Toastify';

type EditNickname = {
  params: NicknameType;
};

export function useEditNickname() {
  const queryClient = useQueryClient();

  const patch = (nickname: string) => {
    return patchNickname(nickname)
      .then((result) => result)
      .catch(() => Toast.error('닉네임 변경에 실패했습니다'));
  };

  const mutation = useMutation({
    mutationFn: patch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { ...mutation, editNicknameMutate: mutation.mutateAsync };
}
