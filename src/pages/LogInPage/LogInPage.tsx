import { Input } from '../../components/common/Input/Input';
import * as S from './LogInPage.styles';
import { useNavigate } from 'react-router-dom';

export function LogInPage() {
  const navigate = useNavigate();

  return (
    <S.LoginPageContainer>
      <S.BackImageWrapper>
        <S.BackImage src={'src/assets/backImage.png'} />
      </S.BackImageWrapper>
      <S.LoginPage>
        <h1>Login</h1>
        <Input variant="outline" type="text" placeholder="heejin@heejin.com" topSlot="이메일" />
        <Input variant="outline" type="text" placeholder="비밀번호 입력" topSlot="비밀번호" />
        <button>login</button>
        <S.SignUP>
          <p
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </p>
          <S.KakaoLogin>
            <S.OrContainer>
              <div>or</div>
            </S.OrContainer>
            <S.Kakao src="src/assets/svg/kakao.svg" />
          </S.KakaoLogin>
        </S.SignUP>
      </S.LoginPage>
    </S.LoginPageContainer>
  );
}
