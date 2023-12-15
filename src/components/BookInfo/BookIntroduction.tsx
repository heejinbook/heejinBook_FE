import * as S from './BookIntroduction.styles';

type Props = {
  description: string;
  category: string;
  releaseDate: string;
  publisher: string;
  isbn: string;
};

export function BookIntroduction({ description, category, releaseDate, publisher, isbn }: Props) {
  const Info = [
    { title: '카테고리', content: category },
    { title: '출간일', content: releaseDate },
    { title: '출판사', content: publisher },
    { title: 'ISBN', content: isbn },
  ];

  return (
    <>
      <S.IntroductionContainer>
        <S.Introduction>
          <p>책 소개</p>
          <S.BookContent>{description}</S.BookContent>
        </S.Introduction>
        <S.BookBox>
          {Info.map((b, idx) => (
            <S.Book key={idx}>
              <p>{b.title}</p>
              {b.content}
            </S.Book>
          ))}
        </S.BookBox>
      </S.IntroductionContainer>
    </>
  );
}
