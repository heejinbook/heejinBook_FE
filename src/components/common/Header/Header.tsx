import * as S from './Header.styles';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.Logo
          onClick={() => {
            navigate('/home');
          }}
        >
          HeeJinBook
        </S.Logo>
        <S.GoToLibrary
          onClick={() => {
            navigate('/myLibrary');
          }}
        >
          내서재
        </S.GoToLibrary>
      </S.Header>
      <S.BtnContainer>
        <button onClick={logout}>logout</button>
      </S.BtnContainer>
    </S.HeaderContainer>
  );
}
