import * as S from './BookInfo.styles';

export type BookInfoType = {
  image: string;
  title: string;
  author: string;
  reviewer: number;
};
export function BookInfo() {
  const book: BookInfoType = {
    image:
      'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
    title: '비가 오면 열리는 상점',
    author: '유영광',
    reviewer: 3,
  };

  return (
    <S.BookInfoContainer>
      <S.BookInfo>
        <S.BookImage src={book.image} />
        <S.BookInfoFrame>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.BookAuthor>{book.author}</S.BookAuthor>
          <S.ReviewerContainer>
            <S.ReviewerIcon src="src/assets/svg/person.svg" />
            <S.Reviewer>{book.reviewer}</S.Reviewer>
          </S.ReviewerContainer>
        </S.BookInfoFrame>
      </S.BookInfo>
    </S.BookInfoContainer>
  );
}
