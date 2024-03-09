import { SignUpInput } from '../../components/SignInput/SignUpInput';
import * as S from './SignUpPage.styles';
import backgroundImage from '../../assets/books.png';

export function SignUpPage() {
  return (
    <S.SignUpPageContainer>
      <S.BackImageWrapper>
        <S.BackImage src={backgroundImage} />
      </S.BackImageWrapper>
      <S.SignUpPage>
        <h1>Sign Up</h1>
        <SignUpInput />
      </S.SignUpPage>
    </S.SignUpPageContainer>
  );
}
