import { Outlet } from 'react-router-dom';
import * as S from './SignLayout.styles';
import { Header } from '../common/Header/Header';

export function SignLayout() {
  return (
    <S.SignLayoutContainer>
      <Header />
      <Outlet />
    </S.SignLayoutContainer>
  );
}
