import { useState } from 'react';
import * as S from './CategoryFilter.styles';
import { category } from '../MainBookList/BookList';

type CategoryProps = {
  categoryName: string;
  onSelectName: (categoryName: string) => void;
  onSelect: (categoryId: number) => void;
};

export function CategoryFilter({ categoryName, onSelectName, onSelect }: CategoryProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  return (
    <>
      <S.CategoryFilter>
        <p
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
        >
          {categoryName}
          <img src={openCategory ? 'src/assets/svg/arrowUp.svg' : 'src/assets/svg/arrowDown.svg'} />
        </p>
        {openCategory && (
          <S.CategoryList>
            {category.map((option) => (
              <li
                key={option.categoryId}
                onClick={() => {
                  setOpenCategory(false);
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
    </>
  );
}
