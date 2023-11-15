import { useState } from 'react';
import { FilterType } from '../../../MainBookList/BookList';
import * as S from './ReviewFilter.styles';
import IconArrowD from '../../../../assets/svg/arrowDown.svg';
import IconArrowU from '../../../../assets/svg/arrowUp.svg';
import { reviewFilter } from '../BookListReview';

type ReviewFilterProps = {
  filterName: string;
  onSortChange: (filterId: number) => void;
  onSelectName: (filterName: string) => void;
};

export function ReviewFilter({ filterName, onSortChange, onSelectName }: ReviewFilterProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  return (
    <>
      <S.ReviewFilter>
        <p
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
        >
          {filterName}
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
                  onSelectName(option.filterName);
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
