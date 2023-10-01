import { Input } from '../../components/common/Input/Input';
import * as S from './SignUpPage.styles';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {
  const navigate = useNavigate();

  return (
    <S.SignUpPageContainer>
      <S.BackImageWrapper>
        <S.BackImage src={'src/assets/backImage.png'} />
      </S.BackImageWrapper>
      <S.SignUpPage>
        <h1>Sign Up</h1>
        <label htmlFor="file">
          <S.Profile src="src/assets/svg/plusProfile.svg" />
          <input id="file" type="file" accept="image/*" style={{ display: 'none' }} />
        </label>
        <Input variant="outline" type="text" placeholder="김희진" topSlot="이름" />
        <Input variant="outline" type="text" placeholder="heejin@heejin.com" topSlot="이메일" />
        <Input variant="outline" type="password" placeholder="heejin1234" topSlot="비밀번호" />
        <Input variant="outline" type="password" placeholder="heejin1234" topSlot="비밀번호 확인" />
        <button
          onClick={() => {
            navigate('/home');
          }}
        >
          signup
        </button>
      </S.SignUpPage>
    </S.SignUpPageContainer>
  );
}
