import styled from '@emotion/styled';

export const LoginPageContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  background-color: #fffdf6;
  display: flex;
  button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const BackImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoginPage = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  h1 {
    color: #503f15;
  }
`;

export const SignUP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    cursor: pointer;
    color: #b9b19c;
  }
`;

export const KakaoLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: #b9b19c;
  margin-bottom: 10px;
  /* &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background-color: #b9b19c;
    height: 1px;
    font-size: 0;s
    line-height: 0;
    margin: 8px 0;
    width: 50%;
  } */
`;

export const Kakao = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
