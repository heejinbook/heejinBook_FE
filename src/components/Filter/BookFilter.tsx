import { useState } from 'react';
import * as S from './BookFilter.styles';
import { FilterType } from '../MainBookList/BookList';

type FilterProps = {
  filter: FilterType[];
  onSelect: (filterId: number) => void;
};

export function BookFilter({ filter, onSelect }: FilterProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<string>('sort by');

  return (
    <>
      <S.Filter>
        <p
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
        >
          {filterName}
          <img src={openCategory ? 'src/assets/svg/arrowUp.svg' : 'src/assets/svg/arrowDown.svg'} />
        </p>
        {openCategory && (
          <S.FilterList>
            {filter.map((option) => (
              <li
                key={option.filterId}
                onClick={() => {
                  setOpenCategory(false);
                  onSelect(option.filterId);
                  setFilterName(option.filterName);
                }}
                style={{
                  fontWeight: option.filterName === filterName ? 'bold' : 'normal',
                }}
              >
                {option.filterName}
              </li>
            ))}
          </S.FilterList>
        )}
      </S.Filter>
    </>
  );
}
