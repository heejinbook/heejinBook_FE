import { SwiperItems } from '../MainPageSwiper';
import * as S from './SwiperBookItems.styles';
// import { SwiperSlide } from 'swiper/react';

type SwiperItemsProps = {
  item: SwiperItems;
};

export function SwiperBookItems({ item }: SwiperItemsProps) {
  return (
    <S.BookItemsContainer>
      <S.BookItems>
        <S.BookImage src={item.image} />
        <S.BookInfo>
          <S.BookTitle>{item.title}</S.BookTitle>
          <S.BookContent>{item.content}</S.BookContent>
        </S.BookInfo>
      </S.BookItems>
    </S.BookItemsContainer>
  );
}
