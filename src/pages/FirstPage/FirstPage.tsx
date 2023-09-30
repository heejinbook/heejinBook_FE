import { useState } from 'react';
import * as S from './FirstPage.styles';
import { useNavigate } from 'react-router-dom';

export function FirstPage() {
  const [startButton, setStartButton] = useState(false);
  const navigate = useNavigate();

  const startBtnClickHandler = () => {
    setStartButton(!startButton);
  };

  return (
    <S.FirstPageContainer>
      <S.BackImage src={'src/assets/backImage.png'} />
      <S.FirstPage>
        {!startButton && (
          <>
            <button onClick={startBtnClickHandler}>시작하기</button>
            <p
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </p>
          </>
        )}
        {startButton && (
          <S.SignUpBtn>
            <button
              onClick={() => {
                navigate('/signup');
              }}
            >
              이메일로 가입하기
            </button>
            <S.KakaoBtn>
              <button>카카오톡으로 가입하기</button>
            </S.KakaoBtn>
          </S.SignUpBtn>
        )}
      </S.FirstPage>
    </S.FirstPageContainer>
  );
}
