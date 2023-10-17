import * as S from './BookFilter.styles';

type BookFilterProps = {
  onSortChange: (option: 'title' | 'review') => void;
};

export function BookFilter({ onSortChange }: BookFilterProps) {
  const sortChangeHandler = (option: 'title' | 'review') => {
    onSortChange(option);
  };

  return (
    <S.FilterContainer>
      <S.Filter>
        <p onClick={() => sortChangeHandler('title')}>ㄱㄴㄷ</p>
        <p onClick={() => sortChangeHandler('review')}>리뷰 많은 순</p>
      </S.Filter>
    </S.FilterContainer>
  );
}
