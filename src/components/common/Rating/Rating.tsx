import { useEffect, useState } from 'react';
import * as S from './Rating.styles';
import IconEmptyStar from '../../../assets/svg/emptyStar.svg';
import IconFullStar from '../../../assets/svg/fullStar.svg';

type RatingType = {
  readonly?: boolean;
  onChange?: (count: number) => void;
  count?: number;
};

export function Rating({ readonly, onChange, count }: RatingType) {
  const [hover, setHover] = useState<number>(0);
  const [rating, setRating] = useState<number>(count || 0);

  const RATING = [1, 2, 3, 4, 5];

  const ratingClickHandler = (count: number) => {
    if (readonly) return;

    onChange && onChange(count);
    setRating(count);
  };

  useEffect(() => {
    if (count) {
      setRating(count);
    }
  }, [count]);

  const mouseOverHandler = (count: number) => {
    if (readonly) return;
    setHover(count);
  };

  const mouseLeaveHandler = () => {
    if (readonly) return;
    setHover(0);
  };

  return (
    <S.RatingContainer>
      {RATING.map((count) => (
        <S.Rating
          key={count}
          src={rating >= count || hover >= count ? IconFullStar : IconEmptyStar}
          onClick={() => ratingClickHandler(count)}
          onMouseOver={() => mouseOverHandler(count)}
          onMouseLeave={mouseLeaveHandler}
        />
      ))}
    </S.RatingContainer>
  );
}
