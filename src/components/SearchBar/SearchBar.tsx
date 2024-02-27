import { useMemo, useState } from 'react';
import * as S from './SearchBar.styles';
import { debounce } from 'lodash';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export type SearchProp = {
  onSearch: (searchBook: string) => void;
};

export function SearchBar({ onSearch }: SearchProp) {
  const [searchBook, setSearchBook] = useState<string>('');

  const debouncedOnSearch = useMemo(() => debounce(onSearch, 1500), []);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchBook(search);
    debouncedOnSearch(search);
  };

  const { ref, visible, setVisible } = useOutsideClick(false);

  return (
    <S.SearchBarContainer ref={ref}>
      <S.SearchIconContainer onClick={() => setVisible(!visible)}>
        <S.SearchIcon src="src/assets/svg/search.svg" />
      </S.SearchIconContainer>
      {visible && (
        <S.InputContainer>
          <S.Input type="text" value={searchBook} onChange={searchChangeHandler} />
        </S.InputContainer>
      )}
    </S.SearchBarContainer>
  );
}
