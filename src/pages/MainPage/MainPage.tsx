import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <S.MainPage>
        <MainPageSwiper />
        <BookList />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
