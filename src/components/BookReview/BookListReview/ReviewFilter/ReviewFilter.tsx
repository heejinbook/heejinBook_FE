import * as S from './ReviewFilter.styles';

type ReviewFilterProps = {
  onSortChange: (option: 'countDesc' | 'createAt') => void;
};

export function ReviewFilter({ onSortChange }: ReviewFilterProps) {
  const sortChangeHandler = (option: 'countDesc' | 'createAt') => {
    onSortChange(option);
  };

  return (
    <S.FilterContainer>
      <S.Filter>
        <p onClick={() => sortChangeHandler('createAt')}>등록순</p>
        <p onClick={() => sortChangeHandler('countDesc')}>리뷰 많은 순</p>
      </S.Filter>
    </S.FilterContainer>
  );
}
