import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BookSwiperContainer = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf2cc82;
  padding: 50px;
  border-radius: 50px;
`;

export const LeftBtn = styled.img`
  cursor: pointer;
`;

export const RightBtn = styled.img`
  cursor: pointer;
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

export const ReviewSlide = styled(SwiperSlide)`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
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
