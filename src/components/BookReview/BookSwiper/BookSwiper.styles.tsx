import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BookSwiperContainer = styled.div`
  max-width: 900px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
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

export const BookSwiper = styled(Swiper)`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination-bullet {
    background-color: white;
  }
`;

export const ReviewSlide = styled(SwiperSlide)`
  background-color: #fcf2cc82;
  max-width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  border-radius: 50px;
  box-sizing: border-box;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-bottom: 30px;
`;

export const PhraseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  img {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }
`;

export const ReviewTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ReviewPhrase = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const ReviewContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const HeartContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px 10px 0;
`;
