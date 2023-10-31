import { useEffect, useState } from 'react';
import * as S from './Heart.styles';
import IconFullHeart from '../../assets/svg/fullHeart.svg';
import IconEmptyHeart from '../../assets/svg/emptyHeart.svg';
import { postHeart } from '../../apis/review';
import { Toast } from '../common/Toastify/Toastify';

type HeartProps = {
  reviewId: number;
  isLike: boolean;
  likeCount: number;
  onLikeChange: () => void;
};

export function Heart({ reviewId, isLike, likeCount, onLikeChange }: HeartProps) {
  const heartChangeHandler = (reviewId: number) => {
    postHeart(reviewId)
      .then((result) => {
        if (result.data.status === 201) {
          onLikeChange();
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          Toast.error('내가 작성한 리뷰는 좋아요를 누를 수 없습니다');
        }
      });
  };

  return (
    <>
      <S.Heart>
        <S.HeartIcon
          src={isLike ? IconFullHeart : IconEmptyHeart}
          onClick={() => heartChangeHandler(reviewId)}
        />
        <S.HeartCount>{likeCount}</S.HeartCount>
      </S.Heart>
    </>
  );
}
