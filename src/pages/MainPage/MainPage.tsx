import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <S.MainPage>
        <MainPageSwiper />
        <SearchBar />
        <BookList />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
