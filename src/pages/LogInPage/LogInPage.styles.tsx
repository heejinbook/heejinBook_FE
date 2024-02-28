import styled from '@emotion/styled';

export const LoginPageContainer = styled.div`
  min-width: 300px;
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

export const LoginPage = styled.form`
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
  width: 100%;
  p {
    cursor: pointer;
    color: #b9b19c;
    margin-bottom: 20px;
  }
`;

export const KakaoLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const OrContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-align: center;
  color: #b9b19c;
  margin-bottom: 10px;
  ::before,
  ::after {
    content: '';
    flex: 1;
    border-top: 1px solid #b9b19c;
  }
  ::before {
    margin-right: 10px;
  }
  ::after {
    margin-left: 10px;
  }
  width: 100%;
  text-align: center;
`;

export const Kakao = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
