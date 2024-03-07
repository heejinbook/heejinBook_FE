import { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './SearchBar.styles';
import { debounce } from 'lodash';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import IconSearch from '../../assets/svg/search.svg';

export type SearchProp = {
  onSearch: (searchBook: string) => void;
};

export function SearchBar({ onSearch }: SearchProp) {
  const [searchBook, setSearchBook] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedOnSearch = useMemo(() => debounce(onSearch, 1500), []);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchBook(search);
    debouncedOnSearch(search);
  };

  const { ref, visible, setVisible } = useOutsideClick(false);

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  return (
    <S.SearchBarContainer ref={ref}>
      <S.SearchIconContainer onClick={() => setVisible(!visible)}>
        <S.SearchIcon src={IconSearch} />
      </S.SearchIconContainer>
      {visible && (
        <S.InputContainer>
          <S.Input ref={inputRef} type="text" value={searchBook} onChange={searchChangeHandler} />
        </S.InputContainer>
      )}
    </S.SearchBarContainer>
  );
}
