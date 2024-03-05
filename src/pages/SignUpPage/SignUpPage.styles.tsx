import styled from '@emotion/styled';

export const SignUpPageContainer = styled.div`
  min-width: 300px;
  height: 100vh;
  background-color: #fffdf6;
  display: flex;
`;

export const BackImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackImage = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SignUpPage = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 30px;
  h1 {
    color: #503f15;
  }
`;
