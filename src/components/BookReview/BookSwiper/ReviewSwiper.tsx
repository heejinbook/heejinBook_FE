import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import * as S from './ReviewSwiper.styles';
import { ReviewType } from '../Review';
import IconLeftBtn from '../../../assets/svg/leftBtn.svg';
import IconRightBtn from '../../../assets/svg/rightBtn.svg';
import { useEffect, useState } from 'react';
import { Swiper } from 'swiper/types';
import { ReviewModal } from '../../ReviewModal/ReviewModal';
import { ReviewSwiperItems } from './ReviewSwiperItems/ReviewSwiperItems';

type ReviewProps = {
  review: ReviewType[];
};

export function ReviewSwiper({ review }: ReviewProps) {
  const [swiper] = useState<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

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

  const modalOpenHandler = (reviewId: number) => {
    setSelectedReviewId(reviewId);
    setReviewModal(true);
  };

  return (
    review && (
      <>
        <ReviewModal
          selectedReviewId={selectedReviewId}
          reviewModal={reviewModal}
          setReviewModal={setReviewModal}
        />
        <S.ReviewSwiperContainer>
          <S.LeftBtn src={IconLeftBtn} className="swiper-button-prev" />
          <S.ReviewSwiper
            onInit={onInit}
            onSlideChange={onSlideChange}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 4000 }}
            speed={1000}
          >
            {review.map((r, idx) => (
              <S.ReviewSlideContainer key={idx}>
                <S.ReviewSlide>
                  <ReviewSwiperItems r={r} modalOpenHandler={modalOpenHandler} />
                </S.ReviewSlide>
              </S.ReviewSlideContainer>
            ))}
          </S.ReviewSwiper>
          <S.RightBtn src={IconRightBtn} className="swiper-button-next" />
        </S.ReviewSwiperContainer>
      </>
    )
  );
}
