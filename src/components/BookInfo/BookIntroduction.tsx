import * as S from './BookIntroduction.styles';

type Props = {
  description: string;
  category: string;
  releaseDate: string;
  publisher: string;
  isbn: string;
};

export function BookIntroduction({ description, category, releaseDate, publisher, isbn }: Props) {
  return (
    <S.IntroductionContainer>
      <S.Introduction>
        <p>책 소개</p>
        <S.BookContent>{description}</S.BookContent>
      </S.Introduction>
      <S.BookBox>
        <S.BookCategory>
          <p>카테고리</p>
          {category}
        </S.BookCategory>
        <S.BookDate>
          <p>출간일</p>
          {releaseDate}
        </S.BookDate>
        <S.BookPublisher>
          <p>출판사</p>
          {publisher}
        </S.BookPublisher>
        <S.BookIsbn>
          <p>ISBN</p>
          {isbn}
        </S.BookIsbn>
      </S.BookBox>
    </S.IntroductionContainer>
  );
}
