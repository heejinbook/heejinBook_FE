import styled from '@emotion/styled';

export const BookPage = styled.div`
  min-width: 500px;
  width: 100%;
  height: calc(100vh - 60px);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  width: calc(100% - 310px);
  flex-grow: 1;
  @media screen and (max-width: 750px) {
    width: 100%;
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  border-left: 1px solid #b9b19c9a;
  margin-left: 30px;
`;

export const BookNavContainer = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
  position: fixed;
  top: 60px;
  right: 0;
  width: 280px;
`;
