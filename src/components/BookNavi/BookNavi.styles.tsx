import styled from '@emotion/styled';

export const BookNaviContainer = styled.div`
  width: 280px;
  height: 100vh;
  z-index: 999;
  background-color: #fffdf6;
  border-left: 1px solid #b9b19c9a;
`;
export const BookNavi = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const Library = styled.div`
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid #b9b19c9a;
  img {
    margin: 0 5px;
  }
`;
export const Share = styled(Library)``;
export const WriteReview = styled(Library)``;
