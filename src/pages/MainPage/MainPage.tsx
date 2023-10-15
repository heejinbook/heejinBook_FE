import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Header } from '../../components/common/Header/Header';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <Header />
      <S.MainPage>
        <MainPageSwiper />
        <SearchBar />
        <BookList />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
