import * as S from './ReviewFilter.styles';
import IconArrowD from '../../../../assets/svg/arrowDown.svg';
import IconArrowU from '../../../../assets/svg/arrowUp.svg';
import { reviewFilter } from '../BookListReview';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

type ReviewFilterProps = {
  filterName: string;
  onSortChange: (filterId: number) => void;
  onSelectName: (filterName: string) => void;
};

export function ReviewFilter({ filterName, onSortChange, onSelectName }: ReviewFilterProps) {
  const { ref, visible, setVisible } = useOutsideClick(false);

  return (
    <S.ReviewFilter ref={ref}>
      <p
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {filterName}
        {visible ? <img src={IconArrowU} /> : <img src={IconArrowD} />}
      </p>
      {visible && (
        <S.ReviewFilterList>
          {reviewFilter.map((option) => (
            <li
              key={option.filterId}
              onClick={() => {
                setVisible(false);
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
  );
}
