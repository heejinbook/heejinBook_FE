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

  return (
    <S.FirstPageContainer>
      <S.BackImageContainer>
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
              <button className="KaKaoBtn">카카오톡으로 가입하기</button>
            </S.KakaoBtn>
          </S.SignUpBtn>
        )}
      </S.FirstPage>
    </S.FirstPageContainer>
  );
}
