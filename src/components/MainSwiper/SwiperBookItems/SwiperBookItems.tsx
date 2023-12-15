import { SwiperItems } from '../MainPageSwiper';
import * as S from './SwiperBookItems.styles';
import IconStar from '../../../assets/svg/fullStar.svg';
type SwiperItemsProps = {
  item: SwiperItems;
};

export function SwiperBookItems({ item }: SwiperItemsProps) {
  return (
    <S.BookItemsContainer>
      <S.BookItems>
        <S.BookImage src={item.thumbnail} />
        <S.BookInfo>
          <S.Best>
            <img src={IconStar} />
            <p>{item.avgRating}</p>
          </S.Best>
          <S.BookTitle>{item.title}</S.BookTitle>
          <S.BookAuthor>{item.author}</S.BookAuthor>
        </S.BookInfo>
      </S.BookItems>
    </S.BookItemsContainer>
  );
}
