import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './BookSwiper.styles';
import { ReviewType } from '../Review';
import IconLeftBtn from '../../../assets/svg/leftBtn.svg';
import IconRightBtn from '../../../assets/svg/rightBtn.svg';
import IconLeftQuote from '../../../assets/svg/LeftQuote.svg';
import IconRightQuote from '../../../assets/svg/RightQuote.svg';

type reviewProps = {
  reviews: ReviewType[];
};

export function BookSwiper({ reviews }: reviewProps) {
  return (
    <S.BookSwiperContainer>
      <S.LeftBtn src={IconLeftBtn} className="swiper-button-prev" />
      <S.BookSwiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {reviews.map((r) => (
          <S.ReviewSlide key={r.reviewId}>
            <S.UserImage src={r.reviewAuthorProfileUrl} />
            <S.ReviewTitle>{r.reviewTitle}</S.ReviewTitle>
            <S.PhraseContainer>
              <img src={IconLeftQuote} />
              <S.ReviewPhrase>{r.reviewPhrase}</S.ReviewPhrase>
              <img src={IconRightQuote} />
            </S.PhraseContainer>
            <S.ReviewContent>{r.reviewContents}</S.ReviewContent>
          </S.ReviewSlide>
        ))}
      </S.BookSwiper>
      <S.RightBtn src={IconRightBtn} className="swiper-button-next" />
    </S.BookSwiperContainer>
  );
}
