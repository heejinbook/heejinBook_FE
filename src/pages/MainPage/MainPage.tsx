import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Header } from '../../components/common/Input/Header/Header';
import * as S from './MainPage.styles';

export function MainPage() {
  return (
    <S.MainPageContainer>
      <Header />
      <S.MainPage>
        <MainPageSwiper />
        <SearchBar />
        <BookList />
        <Pagination />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
