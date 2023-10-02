import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

export const MainSwiper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftBtn = styled.img`
  position: absolute;
  top: 24%;
  transform: translateY(-50%);
`;
export const RigthBtn = styled.img`
  position: absolute;
  top: 24%;
  transform: translateY(-50%);
`;

export const BookSwiper = styled(Swiper)`
  width: 100%;
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
  width: 900px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
