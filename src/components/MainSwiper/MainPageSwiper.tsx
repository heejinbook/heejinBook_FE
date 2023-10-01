import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './MainSwiper.styles';
import { useState } from 'react';
import { SwiperBookItems } from './SwiperBookItems/SwiperBookItems';

//background만 swiper 되고 swiper된 후 내용 바뀌게 이게 말이 돼?

export type SwiperItems = {
  title: string;
  content: string;
  image: string;
  backColor: string;
  color: string;
};

export function MainPageSwiper() {
  const [active, setActive] = useState(0);

  const Items: SwiperItems[] = [
    {
      title: '건조할 가을도 촉촉하게 만들',
      content: '<세상의 마지막 기차역>',
      image: 'https://d2j6uvfek9vas1.cloudfront.net/hero_banner/65112620e6a10.jpg',
      backColor:
        'linear-gradient(0deg, rgb(209, 102, 134) 0%, rgb(209, 102, 134) 20.59%, rgba(209, 102, 134, 0) 91.92%)',
      color: 'rgb(209, 102, 134)',
    },
    {
      title: '아마존 베스트셀러 한국 상륙',
      content: '29가지 심리학 조언이 가득!',
      image: 'https://d2j6uvfek9vas1.cloudfront.net/hero_banner/65112273ea6c9.jpg',
      backColor:
        'linear-gradient(0deg, rgb(218, 102, 46) 0%, rgb(218, 102, 46) 20.59%, rgba(218, 102, 46, 0) 91.92%)',
      color: 'rgb(218, 102, 46)',
    },
    {
      title: '김겨울의 기획과 편집',
      content: '한정판 종이책 만나보기',
      image: 'https://d2j6uvfek9vas1.cloudfront.net/hero_banner/65126c111e31f.mp4',
      backColor:
        'linear-gradient(0deg, rgb(68, 107, 177) 0%, rgb(68, 107, 177) 20.59%, rgba(68, 107, 177, 0) 91.92%)',
      color: 'rgb(68, 107, 177)',
    },
  ];

  return (
    <S.MainSwiper>
      <S.LeftBtn className="swiper-button-prev" src="src/assets/svg/leftBtn.svg" />
      <S.RigthBtn className="swiper-button-next" src="src/assets/svg/rightBtn.svg" />
      <S.BookSwiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
      >
        {Items.map((item, idx) => (
          <S.BookSlideContainer key={idx} style={{ backgroundImage: item.image }}>
            <S.BookSlide style={{ backgroundImage: item.backColor }}>
              {active === idx && <SwiperBookItems item={item} />}
            </S.BookSlide>
          </S.BookSlideContainer>
        ))}
      </S.BookSwiper>
    </S.MainSwiper>
  );
}
