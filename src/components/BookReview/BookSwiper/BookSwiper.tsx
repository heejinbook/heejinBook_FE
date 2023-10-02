import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './BookSwiper.styels';
import { ReviewType } from '../Review';

type reviewProps = {
  review: ReviewType[];
};

export function BookSwiper({ review }: reviewProps) {
  return (
    <S.BookSwiperContainer>
      <S.LeftBtn className="swiper-button-prev" src="src/assets/svg/leftBtn.svg" />
      <S.BookSwiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {review.map((book, idx) => (
          <S.ReviewSlide key={idx}>
            <S.UserImage src={book.user} />
            <S.ReviewTitle>{book.title}</S.ReviewTitle>
            <S.PhraseContainer>
              <img src="src/assets/svg/LeftQuote.svg" />
              <S.ReviewPhrase>{book.phrase}</S.ReviewPhrase>
              <img src="src/assets/svg/RightQuote.svg" />
            </S.PhraseContainer>
            <S.ReviewContent>{book.content}</S.ReviewContent>
          </S.ReviewSlide>
        ))}
      </S.BookSwiper>
      <S.RigthBtn className="swiper-button-next" src="src/assets/svg/rightBtn.svg" />
    </S.BookSwiperContainer>
  );
}
