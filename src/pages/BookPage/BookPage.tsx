import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookIntroduction } from '../../components/BookInfo/BookIntroduction';
import { Review } from '../../components/BookReview/Review';
import * as S from './BookPage.styles';

export function BookPage() {
  return (
    <>
      <S.BookPage>
        <BookInfo />
        <BookIntroduction />
        <Review />
      </S.BookPage>
    </>
  );
}
