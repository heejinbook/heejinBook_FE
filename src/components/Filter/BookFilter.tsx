import * as S from './BookFilter.styles';
import { FilterType } from '../MainBookList/BookList';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type FilterProps = {
  filter: FilterType[];
  onSelect: (filterId: number, filterName: string) => void;
  filterName: string;
};
//렌더링 원치 않으면 setState 상위 컴포넌트에서 관리
export function BookFilter({ filter, onSelect, filterName }: FilterProps) {
  const { ref, visible, setVisible } = useOutsideClick(false);

  return (
    <>
      <S.Filter ref={ref}>
        <p
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {filterName}
          <img src={visible ? 'src/assets/svg/arrowUp.svg' : 'src/assets/svg/arrowDown.svg'} />
        </p>
        {visible && (
          <S.FilterList>
            {filter.map((option) => (
              <li
                key={option.filterId}
                onClick={() => {
                  setVisible(false);
                  onSelect(option.filterId, option.filterName);
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
