import { useState } from 'react';
import { LoginType, logIn } from '../../apis/user';
import { Input } from '../../components/common/Input/Input';
import * as S from './LogInPage.styles';
import { useNavigate } from 'react-router-dom';
// import { getItem, setItem } from '../../utils/localstorage';
// import { localStorageKey } from '../../constants';
import { Toast } from '../../components/common/Toastify/Toastify';
// import { validateEmpty } from '../../utils/validate';s

export function LogInPage() {
  const [data, setData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  // const validateLogin = () => {
  //   return validateEmpty(login.email) && validateEmpty(login.password);
  // };

  // const accessToken = getItem<string>(localStorageKey.accessToken);
  // if (accessToken) {
  //   setItem(localStorageKey.accessToken, result.data.accessToken);
  // }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', data);
    logIn(data)
      .then((result) => {
        if (result.status === 200) {
          const token = result.data.accessToken;
          localStorage.setItem('accessToken', token);
          navigate('/home');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
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
      <S.LoginPage onSubmit={submitHandler}>
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
