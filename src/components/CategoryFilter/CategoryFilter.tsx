import { useState } from 'react';
import * as S from './CategoryFilter.styles';
import { CategoryType } from '../MainBookList/BookList';

type CategoryProps = {
  category: CategoryType[];
  onSelect: (categoryId: number) => void;
};

export function CategoryFilter({ category, onSelect }: CategoryProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('Category');

  return (
    <>
      <S.CategoryFilter>
        <p
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
        >
          {categoryName}
          {openCategory ? (
            <img src="src/assets/svg/arrowUp.svg" />
          ) : (
            <img src="src/assets/svg/arrowDown.svg" />
          )}
        </p>
        {openCategory && (
          <S.CategoryList>
            {category.map((option) => (
              <li
                key={option.categoryId}
                onClick={() => {
                  setOpenCategory(false);
                  onSelect(option.categoryId);
                  setCategoryName(option.categoryName);
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
