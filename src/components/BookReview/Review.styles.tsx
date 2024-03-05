import styled from '@emotion/styled';

export const Review = styled.div`
  flex-grow: 1;
  padding: 24px 24px 30px 24px;
  display: flex;
  flex-direction: column;
  p {
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
`;

export const BookSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoReview = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
  }
`;
