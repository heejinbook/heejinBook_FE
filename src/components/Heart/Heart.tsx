import * as S from './Heart.styles';
import IconFullHeart from '../../assets/svg/fullHeart.svg';
import IconEmptyHeart from '../../assets/svg/emptyHeart.svg';
import { postHeart } from '../../apis/review';
import { Toast } from '../common/Toastify/Toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type HeartProps = {
  reviewId: number;
  isLike: boolean;
  likeCount: number;
};

export function Heart({ reviewId, isLike, likeCount }: HeartProps) {
  const heartChangeHandler = async (reviewId: number) => {
    await postHeart(reviewId)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status === 403) {
          Toast.error('내가 작성한 리뷰는 좋아요를 누를 수 없습니다');
        }
      });
  };

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => heartChangeHandler(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewList'] });
      queryClient.invalidateQueries({ queryKey: ['detailReview'] });
      queryClient.invalidateQueries({ queryKey: ['swiperReview'] });
    },
  });

  return (
    <>
      <S.Heart>
        <S.HeartIcon src={isLike ? IconFullHeart : IconEmptyHeart} onClick={() => mutateAsync()} />
        <S.HeartCount>{likeCount}</S.HeartCount>
      </S.Heart>
    </>
  );
}
