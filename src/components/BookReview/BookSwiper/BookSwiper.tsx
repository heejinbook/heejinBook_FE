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
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import { Heart } from '../../Heart/Heart';
import { useEffect, useState } from 'react';
import { Swiper } from 'swiper/types';
import { Rating } from '../../common/Rating/Rating';

type reviewProps = {
  review: ReviewType[];
};

export function BookSwiper({ review }: reviewProps) {
  const [swiper] = useState<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onInit = (swiper: Swiper) => {
    swiper.slideTo(currentIndex);
  };

  const onSlideChange = (swiper: Swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(currentIndex);
    }
  }, [swiper]);

  return (
    review && (
      <S.BookSwiperContainer>
        <S.LeftBtn src={IconLeftBtn} className="swiper-button-prev" />
        <S.BookSwiper
          onInit={onInit}
          onSlideChange={onSlideChange}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {review.map((r) => (
            <S.ReviewSlide key={r.reviewId}>
              {r.reviewAuthorProfileUrl === null ? (
                <S.UserImage src={IconNoImage} />
              ) : (
                <S.UserImage src={r.reviewAuthorProfileUrl} />
              )}
              <Rating count={r.reviewRating} readonly />
              <S.ReviewTitle>{r.reviewTitle}</S.ReviewTitle>
              <S.PhraseContainer>
                <img src={IconLeftQuote} />
                <S.ReviewPhrase>{r.reviewPhrase}</S.ReviewPhrase>
                <img src={IconRightQuote} />
              </S.PhraseContainer>
              <S.ReviewContent>{r.reviewContents}</S.ReviewContent>
              <S.HeartContainer>
                <Heart reviewId={r.reviewId} isLike={r.isLike} likeCount={r.likeCount} />
              </S.HeartContainer>
            </S.ReviewSlide>
          ))}
        </S.BookSwiper>
        <S.RightBtn src={IconRightBtn} className="swiper-button-next" />
      </S.BookSwiperContainer>
    )
  );
}
