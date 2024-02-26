import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './MainPageSwiper.styles';
import { useState } from 'react';
import { SwiperBookItems } from './SwiperBookItems/SwiperBookItems';
import { useNavigate } from 'react-router-dom';
import { useGetBestBook } from '../../querys/bookQuery';
import { Loading } from '../common/Loading/Loading';

export type SwiperItems = {
  bookId: number;
  title: string;
  author: string;
  thumbnail: string;
  avgRating: number;
};

export function MainPageSwiper() {
  const [active, setActive] = useState(0);
  // const [bestBooks, setBestBooks] = useState<SwiperItems[]>([]);

  const navigate = useNavigate();

  const { data: bestBooks, isLoading } = useGetBestBook();

  if (isLoading) return <Loading />;

  return (
    bestBooks && (
      <S.MainSwiper>
        <S.LeftBtn className="swiper-button-prev" src="src/assets/svg/leftBtn.svg" />
        <S.RightBtn className="swiper-button-next" src="src/assets/svg/rightBtn.svg" />
        <S.BookSwiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        >
          {bestBooks.map((item, idx) => (
            <S.BookSlideContainer key={idx}>
              <S.BookSlide onClick={() => navigate(`books/${item.bookId}`)}>
                {active === idx && <SwiperBookItems item={item} />}
              </S.BookSlide>
            </S.BookSlideContainer>
          ))}
        </S.BookSwiper>
      </S.MainSwiper>
    )
  );
}
