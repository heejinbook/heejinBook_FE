import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './MainPageSwiper.styles';
import { useEffect, useState } from 'react';
import { SwiperBookItems } from './SwiperBookItems/SwiperBookItems';
import { getBestBook } from '../../apis/books';
import { useNavigate } from 'react-router-dom';

export type SwiperItems = {
  bookId: number;
  title: string;
  author: string;
  thumbnail: string;
  backColor: string;
};

export function MainPageSwiper() {
  const [active, setActive] = useState(0);
  const [bestBooks, setBestBooks] = useState<SwiperItems[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getBestBook()
      .then((result) => {
        if (result.status === 200) {
          setBestBooks(result.data.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
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
  );
}
