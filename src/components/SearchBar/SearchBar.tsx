import { useState } from 'react';
import * as S from './SearchBar.styles';
import { debounce } from 'lodash';

export type SearchProp = {
  onSearch: (searchBook: string) => void;
};

export function SearchBar({ onSearch }: SearchProp) {
  const [searchBook, setSearchBook] = useState<string>('');

  const debouncedOnSearch = debounce(onSearch, 300);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchBook(search);
    debouncedOnSearch(search);
  };

  return (
    <>
      <S.SearchBarContainer>
        <S.SearchBar>
          <S.SearchIcon src="src/assets/svg/search.svg" />
          <S.Input type="text" value={searchBook} onChange={searchChangeHandler} />
        </S.SearchBar>
      </S.SearchBarContainer>
    </>
  );
}
