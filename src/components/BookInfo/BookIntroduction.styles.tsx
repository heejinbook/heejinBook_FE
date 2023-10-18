import styled from '@emotion/styled';

export const IntroductionContainer = styled.div`
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
`;
export const BookCategory = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #e4dcc4aa;
  text-align: center;
  padding: 10px 30px;
  p {
    font-size: 12px;
  }
`;
export const BookDate = styled(BookCategory)``;
export const BookPublisher = styled(BookCategory)``;
export const BookIsbn = styled(BookCategory)``;
