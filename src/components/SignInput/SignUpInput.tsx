import { HTMLInputTypeAttribute, useState } from 'react';
import {
  validateEmail,
  validateEmpty,
  validateEqualPassword,
  validatePassword,
} from '../../utils/validate';
import { Input } from '../common/Input/Input';
import * as S from './SignUpInput.styles';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { SignUpType, signUp } from '../../apis/user';

export type InputType = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  topSlot: string;
  value: string;
};

export function SignUpInput() {
  const navigate = useNavigate();

  const [form, setForm] = useState<SignUpType>({
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
    file: null,
  });

  const Inputs: InputType[] = [
    {
      name: 'nickname',
      type: 'text',
      placeholder: '김희진',
      topSlot: '이름',
      value: form.nickname,
    },
    {
      name: 'email',
      type: 'text',
      placeholder: 'heejin@heejin.com',
      topSlot: '이메일',
      value: form.email,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'heejin1234',
      topSlot: '비밀번호',
      value: form.password,
    },
    {
      name: 'passwordCheck',
      type: 'password',
      placeholder: 'heejin1234',
      topSlot: '비밀번호 확인',
      value: form.passwordCheck,
    },
  ];

  const validateNickname = () => {
    if (!validateEmpty(form.nickname)) {
      Toast.error('이름은 필수로 입력해야합니다.');
      return false;
    }
    return true;
  };

  const validateEmailFormat = () => {
    if (!validateEmail(form.email)) {
      Toast.error('올바른 이메일 형식이 아닙니다.');
      return false;
    }
    return true;
  };

  const validatePasswordFormat = () => {
    if (!validatePassword(form.password)) {
      Toast.error('8~20자 사이의 비밀번호를 작성해야합니다.');
      return false;
    }
    return true;
  };

  const validatePasswordMatch = () => {
    if (!validateEqualPassword(form.password, form.passwordCheck)) {
      Toast.error('비밀번호가 일치하지 않습니다.');
      return false;
    }
    return true;
  };

  const validateInput = () =>
    validateNickname() &&
    validateEmailFormat() &&
    validatePasswordFormat() &&
    validatePasswordMatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInput()) {
      const signUpData = JSON.stringify({
        email: form.email,
        nickname: form.nickname,
        password: form.password,
        passwordCheck: form.passwordCheck,
        profileFile: form.file,
      });
      const formData = new FormData();
      formData.append('signUpData', signUpData);

      signUp(formData).then((result) => {
        if (result.status === 201) {
          Toast.success('회원가입이 완료되었습니다');
          navigate('/home');
        }
        Toast.error('회원가입 실패');
        console.log(result);
      });
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <S.SignUpInputContainer>
      <form>
        <label htmlFor="file">
          <S.Profile src="src/assets/svg/plusProfile.svg" />
          <input id="file" type="file" accept="image/*" style={{ display: 'none' }} />
        </label>
        {Inputs.map((input) => (
          <Input
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            topSlot={input.topSlot}
            value={input.value}
            onChange={changeHandler}
          />
        ))}
        <button disabled={!validateInput} onClick={() => submitHandler}>
          signup
        </button>
      </form>
    </S.SignUpInputContainer>
  );
}
