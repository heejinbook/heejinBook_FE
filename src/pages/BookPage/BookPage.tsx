import { BookInfo } from '../../components/BookInfo/BookInfo';
import { BookIntroduction } from '../../components/BookInfo/BookIntroduction';
import { BookNavi } from '../../components/BookNavi/BookNavi';
import { Review } from '../../components/BookReview/Review';
import { Header } from '../../components/common/Header/Header';
import * as S from './BookPage.styles';

export function BookPage() {
  return (
    <S.BookPage>
      <Header />
      <S.InfoContainer>
        <BookInfo />
        <BookIntroduction />
        <Review />
      </S.InfoContainer>
      <S.BookNaviContainer>
        <BookNavi />
      </S.BookNaviContainer>
    </S.BookPage>
  );
}
