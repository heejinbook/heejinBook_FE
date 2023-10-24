import * as S from './BookFilter.styles';

type BookFilterProps = {
  onSortChange: (option: 'createAt' | 'review') => void;
};

export function BookFilter({ onSortChange }: BookFilterProps) {
  const sortChangeHandler = (option: 'createAt' | 'review') => {
    onSortChange(option);
  };

  return (
    <S.FilterContainer>
      <S.Filter>
        <p onClick={() => sortChangeHandler('createAt')}>ㄱㄴㄷ</p>
        <p onClick={() => sortChangeHandler('review')}>리뷰 많은 순</p>
      </S.Filter>
    </S.FilterContainer>
  );
}
