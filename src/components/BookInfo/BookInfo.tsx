import { detailBook } from '../../pages/BookPage/BookPage';
import * as S from './BookInfo.styles';
import { BookIntroduction } from './BookIntroduction';
import IconReviewer from '../../assets/svg/person.svg';
import { Rating } from '../common/Rating/Rating';

export type detailBookProps = {
  books: detailBook;
};

export function BookInfo({ books }: detailBookProps) {
  return (
    <S.BookInfoContainer>
      <S.BookInfo>
        <S.BookImage src={books.thumbnail} />
        <S.BookInfoFrame>
          <S.BookTitle>{books.title}</S.BookTitle>
          <S.BookAuthor>{books.author}</S.BookAuthor>
          <Rating count={books.avgRating} readonly />
          <S.ReviewerContainer>
            <S.ReviewerIcon src={IconReviewer} />
            <S.Reviewer>{books.reviewCount}</S.Reviewer>
          </S.ReviewerContainer>
        </S.BookInfoFrame>
      </S.BookInfo>
      <BookIntroduction books={books} />
    </S.BookInfoContainer>
  );
}
