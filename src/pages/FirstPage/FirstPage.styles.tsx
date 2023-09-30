import styled from '@emotion/styled';

export const FirstPageContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  position: relative;
`;
export const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FirstPage = styled.div`
  button {
    width: 220px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 80%;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    font-size: 16px;
    color: #503f15;
    font-weight: bold;
  }
  p {
    color: white;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 83%;
    color: #fcf2cc;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const SignUpBtn = styled.div`
  button {
    width: 250px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 80%;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
  }
`;

export const KakaoBtn = styled.div`
  button {
    width: 250px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 88%;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
  }
`;
