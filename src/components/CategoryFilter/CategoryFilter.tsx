import * as S from './CategoryFilter.styles';
import { category } from '../MainBookList/BookList';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type CategoryProps = {
  categoryName: string;
  onSelectName: (categoryName: string) => void;
  onSelect: (categoryId: number) => void;
};

export function CategoryFilter({ categoryName, onSelectName, onSelect }: CategoryProps) {
  const { ref, visible, setVisible } = useOutsideClick(false);

  return (
    <S.CategoryFilter ref={ref}>
      <p
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {categoryName}
        <img src={visible ? 'src/assets/svg/arrowUp.svg' : 'src/assets/svg/arrowDown.svg'} />
      </p>
      {visible && (
        <S.CategoryList>
          {category.map((option) => (
            <li
              key={option.categoryId}
              onClick={() => {
                setVisible(false);
                onSelect(option.categoryId);
                onSelectName(option.categoryName);
              }}
              style={{
                backgroundColor: option.categoryName === categoryName ? '#503f15' : 'transparent',
                color: option.categoryName === categoryName ? '#fffdf6' : '#503f15',
                fontWeight: option.categoryName === categoryName ? 'bold' : 'normal',
              }}
            >
              {option.categoryName}
            </li>
          ))}
        </S.CategoryList>
      )}
    </S.CategoryFilter>
  );
}
