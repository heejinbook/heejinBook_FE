import styled from '@emotion/styled';

export const FirstPageContainer = styled.div`
  min-width: 300px;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackImageContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: end;
  align-items: end;
  background-color: #fffdf6;
  .heejinBook {
    position: absolute;
    top: 1.3%;
    left: 1.3%;
    font-size: 22px;
    font-weight: bold;
    color: #503f15;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 20%;
  .oneDayOneReview {
    font-size: 60px;
    font-weight: bold;
    color: #503f15;
    margin: 0 0 10px 0;
  }
  .friendlyWithReading {
    font-size: 36px;
    color: #503f15;
    margin: 0;
  }
`;

export const BackImage = styled.img`
  width: 1000px;
  height: 941px;
  object-fit: cover;
  overflow: hidden;
`;

export const FirstPage = styled.div`
  .startBtn {
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
  .loginBtn {
    width: 220px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 86%;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const SignUpBtn = styled.div`
  .emailBtn {
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
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const KakaoBtn = styled.div`
  .KaKaoBtn {
    width: 250px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 86%;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;
