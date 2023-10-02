import * as S from './SearchBar.styles';

export function SearchBar() {
  return (
    <>
      <S.SearchBarContainer>
        <S.SearchBar>
          <S.SearchIcon src="src/assets/svg/search.svg" />
          <S.Input type="text" />
        </S.SearchBar>
      </S.SearchBarContainer>
      <S.FilterContainer>
        <S.Filter>
          <p>ㄱㄴㄷ</p>
          <p>리뷰 많은 순</p>
        </S.Filter>
      </S.FilterContainer>
    </>
  );
}
