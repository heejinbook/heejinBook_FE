import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <S.MainPage>
        <MainPageSwiper />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
