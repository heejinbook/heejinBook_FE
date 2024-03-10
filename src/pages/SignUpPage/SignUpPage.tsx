import { SignUpInput } from '../../components/SignInput/SignUpInput';
import * as S from './SignUpPage.styles';
import backgroundImage from '../../assets/books.png';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {
  const navigate = useNavigate();

  return (
    <S.SignUpPageContainer>
      <S.BackImageWrapper>
        <p className="heejinBook" onClick={() => navigate('/')}>
          HeejinBook
        </p>
        <S.BackImage src={backgroundImage} />
      </S.BackImageWrapper>
      <S.SignUpPage>
        <h1>Sign Up</h1>
        <SignUpInput />
      </S.SignUpPage>
    </S.SignUpPageContainer>
  );
}
