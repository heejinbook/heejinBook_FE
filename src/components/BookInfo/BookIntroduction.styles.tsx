import styled from '@emotion/styled';

export const IntroductionContainer = styled.div`
  width: 100%;
  padding: 24px 24px 30px 24px;
  border-bottom: 15px solid #fcf2cc82;
`;

export const Introduction = styled.div`
  margin-bottom: 16px;
  p {
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 12px;
  }
`;

export const BookContent = styled.div`
  font-size: 14px;
`;

export const BookBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Book = styled.div`
  max-width: 240px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #e4dcc4aa;
  text-align: center;
  padding: 10px 20px;
  p {
    width: 45px;
    font-size: 12px;
  }
`;
