import styled from '@emotion/styled';

export const SignUpPageContainer = styled.div`
  max-width: 1920px;
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
  justify-content: start;
  padding: 80px 30px;
  h1 {
    color: #503f15;
  }
  label {
    margin-bottom: 10px;
    cursor: pointer;
  }
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

export const profileContainer = styled.div``;

export const Profile = styled.img`
  border: 1px solid #b9b19c;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 15px;
`;
