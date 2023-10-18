import { useState } from 'react';
import { LoginType, logIn } from '../../apis/user';
import { Input } from '../../components/common/Input/Input';
import * as S from './LogInPage.styles';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../components/common/Toastify/Toastify';
import { validateEmail } from '../../utils/validate';

export function LogInPage() {
  const [data, setData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const postLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    logIn(data)
      .then((result) => {
        if (result.status === 200) {
          navigate('/home');
          const token = result.data.data.accessToken;
          localStorage.setItem('accessToken', token);
        }
      })
      .catch((error) => {
        if (!validateEmail(data.email)) {
          Toast.error('이메일 형식이 옳지 않습니다.');
        } else if (error.response.status === 404) {
          Toast.error('이메일이나 비밀번호가 잘못 입력됐습니다');
        }
      });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <S.LoginPageContainer>
      <S.BackImageWrapper>
        <S.BackImage src={'src/assets/backImage.png'} />
      </S.BackImageWrapper>
      <S.LoginPage>
        <h1>Login</h1>
        <Input
          name="email"
          variant="outline"
          type="text"
          placeholder="heejin@heejin.com"
          topSlot="이메일"
          value={data.email}
          onChange={changeHandler}
        />
        <Input
          name="password"
          variant="outline"
          type="password"
          placeholder="비밀번호 입력"
          topSlot="비밀번호"
          value={data.password}
          onChange={changeHandler}
        />
        <button onClick={postLogin}>login</button>
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
