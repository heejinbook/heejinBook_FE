import * as S from './BookInfo.styles';
import { BookIntroduction } from './BookIntroduction';
import { Rating } from '../common/Rating/Rating';
import IconBest from '../../assets/svg/bestBook.svg';
import IconReviewer from '../../assets/svg/person.svg';
import NoImage from '../../assets/svg/image.svg';
import { detailBook } from '../../apis/books';

type detailBookProps = {
  books: detailBook;
};

export function BookInfo({ books }: detailBookProps) {
  return (
    <S.BookInfoContainer>
      <S.BookInfo>
        {books.thumbnail ? (
          <S.BookImage src={books.thumbnail} />
        ) : (
          <S.NoImage>
            <img src={NoImage} />
          </S.NoImage>
        )}
        <S.BookInfoFrame>
          {books.isBest && (
            <S.BestContainer>
              <img src={IconBest} />
              <p>BEST</p>
            </S.BestContainer>
          )}
          <S.BookTitle>{books.title}</S.BookTitle>
          <S.BookAuthor>{books.author}</S.BookAuthor>
          <Rating count={books.avgRating} readonly />
          <S.ReviewerContainer>
            <S.ReviewerIcon src={IconReviewer} />
            <S.Reviewer>{books.reviewCount}</S.Reviewer>
          </S.ReviewerContainer>
        </S.BookInfoFrame>
      </S.BookInfo>
      <BookIntroduction {...books} />
    </S.BookInfoContainer>
  );
}
