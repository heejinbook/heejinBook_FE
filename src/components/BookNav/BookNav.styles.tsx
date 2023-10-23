import styled from '@emotion/styled';

export const BookNavContainer = styled.div`
  width: 280px;
  height: 100vh;
  background-color: #fffdf6;
  border-left: 1px solid #b9b19c9a;
`;
export const BookNav = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Library = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #b9b19c9a;
  cursor: pointer;
  img {
    margin: 0 5px 0 10px;
  }
`;
export const Share = styled(Library)``;
export const WriteReview = styled(Library)``;
