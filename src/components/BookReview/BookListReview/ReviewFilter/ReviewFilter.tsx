import { useState } from 'react';
import { FilterType } from '../../../MainBookList/BookList';
import * as S from './ReviewFilter.styles';
import IconArrowD from '../../../../assets/svg/arrowDown.svg';
import IconArrowU from '../../../../assets/svg/arrowUp.svg';

type ReviewFilterProps = {
  reviewFilter: FilterType[];
  onSortChange: (filterId: number) => void;
};

export function ReviewFilter({ reviewFilter, onSortChange }: ReviewFilterProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<string>('최신순');

  return (
    <>
      <S.ReviewFilter>
        <p
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
        >
          {filterName}```
          {openCategory ? <img src={IconArrowU} /> : <img src={IconArrowD} />}
        </p>
        {openCategory && (
          <S.ReviewFilterList>
            {reviewFilter.map((option) => (
              <li
                key={option.filterId}
                onClick={() => {
                  setOpenCategory(false);
                  onSortChange(option.filterId);
                  setFilterName(option.filterName);
                }}
                style={{
                  fontWeight: option.filterName === filterName ? 'bold' : 'normal',
                }}
              >
                {option.filterName}
              </li>
            ))}
          </S.ReviewFilterList>
        )}
      </S.ReviewFilter>
    </>
  );
}
