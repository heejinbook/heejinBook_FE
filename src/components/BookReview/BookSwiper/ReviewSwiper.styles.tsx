import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ReviewSwiperContainer = styled.div`
  max-width: 900px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 50px;
  position: relative;
`;

export const LeftBtn = styled.img`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
`;

export const RightBtn = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
`;

export const ReviewSwiper = styled(Swiper)`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination-bullet {
    background-color: white;
  }
`;

export const ReviewSlide = styled.div`
  width: 800px;
  height: auto;
`;

export const ReviewSlideContainer = styled(SwiperSlide)`
  max-width: 800px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
