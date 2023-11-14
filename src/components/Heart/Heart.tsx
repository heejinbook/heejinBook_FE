import * as S from './Heart.styles';
import IconFullHeart from '../../assets/svg/fullHeart.svg';
import IconEmptyHeart from '../../assets/svg/emptyHeart.svg';
import { usePostHeart } from '../../querys/heartMutation';

type HeartProps = {
  reviewId: number;
  isLike: boolean;
  likeCount: number;
};

export function Heart({ reviewId, isLike, likeCount }: HeartProps) {
  const { postHeartMutate } = usePostHeart();

  return (
    <>
      <S.Heart>
        <S.HeartIcon
          src={isLike ? IconFullHeart : IconEmptyHeart}
          onClick={() => postHeartMutate(reviewId)}
        />
        <S.HeartCount>{likeCount}</S.HeartCount>
      </S.Heart>
    </>
  );
}
