import { useState } from 'react';
import * as S from './FirstPage.styles';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/books.png';

export function FirstPage() {
  const [startButton, setStartButton] = useState(false);
  const navigate = useNavigate();

  const startBtnClickHandler = () => {
    setStartButton(!startButton);
  };

  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = 'http://localhost:5173/kakao';

  const redirectUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <S.FirstPageContainer>
      <S.BackImageContainer>
        <p className="heejinBook">HeejinBook</p>
        <S.TextContainer>
          <p className="oneDayOneReview">1일 1리뷰</p>
          <p className="friendlyWithReading">독서와 친해지기</p>
        </S.TextContainer>
        <S.BackImage src={backgroundImage} />
      </S.BackImageContainer>
      <S.FirstPage>
        {!startButton && (
          <>
            <button className="startBtn" onClick={startBtnClickHandler}>
              시작하기
            </button>
            <button
              className="loginBtn"
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </button>
          </>
        )}
        {startButton && (
          <S.SignUpBtn>
            <button
              className="emailBtn"
              onClick={() => {
                navigate('/signup');
              }}
            >
              이메일로 가입하기
            </button>
            <S.KakaoBtn>
              <button
                className="KaKaoBtn"
                onClick={() => {
                  window.location.href = redirectUrl;
                }}
              >
                카카오톡으로 가입하기
              </button>
            </S.KakaoBtn>
          </S.SignUpBtn>
        )}
      </S.FirstPage>
    </S.FirstPageContainer>
  );
}
