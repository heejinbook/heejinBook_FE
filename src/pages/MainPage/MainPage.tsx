import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import { Header } from '../../components/common/Header/Header';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <Header />
      <S.MainPage>
        <MainPageSwiper />
        <BookList />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
