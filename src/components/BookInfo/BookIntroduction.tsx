import { detailBookProps } from './BookInfo';
import * as S from './BookIntroduction.styles';

export function BookIntroduction({ books }: detailBookProps) {
  return (
    <S.IntroductionContainer>
      <S.Introduction>
        <p>책 소개</p>
        <S.BookContent>{books.description}</S.BookContent>
      </S.Introduction>
      <S.BookBox>
        <S.BookCategory>
          <p>카테고리</p>
          {books.category}
        </S.BookCategory>
        <S.BookDate>
          <p>출간일</p>
          {books.releaseDate}
        </S.BookDate>
        <S.BookPublisher>
          <p>출판사</p>
          {books.publisher}
        </S.BookPublisher>
        <S.BookIsbn>
          <p>ISBN</p>
          {books.isbn}
        </S.BookIsbn>
      </S.BookBox>
    </S.IntroductionContainer>
  );
}
