import { useMemo, useState } from 'react';
import * as S from './SearchBar.styles';
import { debounce } from 'lodash';

export type SearchProp = {
  onSearch: (searchBook: string) => void;
};

export function SearchBar({ onSearch }: SearchProp) {
  const [searchBook, setSearchBook] = useState<string>('');
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const debouncedOnSearch = useMemo(() => debounce(onSearch, 1500), []);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchBook(search);
    debouncedOnSearch(search);
  };

  return (
    <>
      <S.SearchBarContainer>
        <S.SearchIconContainer onClick={() => setInputVisible(!inputVisible)}>
          <S.SearchIcon src="src/assets/svg/search.svg" />
        </S.SearchIconContainer>
        {inputVisible && (
          <S.InputContainer>
            <S.Input type="text" value={searchBook} onChange={searchChangeHandler} />
          </S.InputContainer>
        )}
      </S.SearchBarContainer>
    </>
  );
}
