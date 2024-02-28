import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

export const MainSwiper = styled.div`
  max-width: 900px;
  height: auto;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LeftBtn = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
`;
export const RightBtn = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
`;

export const BookSwiper = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination-bullet {
    background-color: white;
  }
`;

export const BookSlideContainer = styled.div`
  width: 900px;
  height: 270px;
`;

export const BookSlide = styled(SwiperSlide)`
  max-width: 900px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
