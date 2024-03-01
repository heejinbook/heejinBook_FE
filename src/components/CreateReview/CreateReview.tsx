import { CSSProperties, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import * as S from './CreateReview.styles';
import IconX from '../../assets/svg/X.svg';
import IconRefresh from '../../assets/svg/refresh.svg';
import { CreateReviewType } from '../../apis/review';
import { useParams } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { validateEmpty, validateRating } from '../../utils/validate';
import { MyReview } from '../MyLibrary/LibraryReview/LibraryReview';
import { Rating } from '../common/Rating/Rating';
import { useCreateReview, useEditReview } from '../../querys/reviewMutation';
import { useLockScroll } from '../../hooks/useLockScroll';
import { Textarea } from '../common/Textarea/Textarea';

type ReviewProps = {
  reviewModal: boolean;
  setReviewModal: Dispatch<SetStateAction<boolean>>;
  writtenReview?: MyReview;
};

type ReviewTextareaType = {
  name: string;
  topSlot: string;
  value: string;
  style?: CSSProperties;
  placeholder: string;
};

export function CreateReview({ reviewModal, setReviewModal, writtenReview }: ReviewProps) {
  const [review, setReview] = useState<CreateReviewType>({
    title: '',
    phrase: '',
    contents: '',
    rating: 0,
  });

  const { bookId } = useParams();

  useLockScroll(reviewModal);

  useEffect(() => {
    if (writtenReview) {
      setReview({
        title: writtenReview.reviewTitle,
        contents: writtenReview.reviewContents,
        phrase: writtenReview.reviewPhrase,
        rating: writtenReview.reviewRating,
      });
    } else {
      setReview({
        title: '',
        phrase: '',
        contents: '',
        rating: 0,
      });
    }
  }, [writtenReview]);

  const TextAreas: ReviewTextareaType[] = [
    {
      name: 'title',
      placeholder: '제목을 입력하세요',
      topSlot: 'title',
      value: review.title,
      style: { height: '25px' },
    },
    {
      name: 'phrase',
      placeholder: '기억나는 책 문구를 적어주세요',
      topSlot: '',
      value: review.phrase,
      style: { height: '25px' },
    },
    {
      name: 'contents',
      placeholder: '내용을 입력하세요',
      topSlot: 'content',
      value: review.contents,
      style: { height: '200px' },
    },
  ];

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ratingChangeHandler = (count: number) => {
    setReview({
      ...review,
      rating: count,
    });
  };

  const { createReviewMutate } = useCreateReview();

  const { editReviewMutate } = useEditReview();

  const editPayload = {
    title: review.title,
    contents: review.contents,
    phrase: review.phrase,
    rating: review.rating,
  };

  const postWriteReview = (review: CreateReviewType) => {
    if (!writtenReview) {
      if (!validateReview()) {
        return;
      }
      createReviewMutate(
        { bookId: Number(bookId), payload: review },
        {
          onSuccess: () => {
            setReviewModal(false);
            setReview({
              title: '',
              phrase: '',
              contents: '',
              rating: 0,
            });
          },
        },
      );
    } else {
      editReviewMutate(
        { reviewId: writtenReview.reviewId, payload: editPayload },
        {
          onSuccess: () => {
            Toast.success('리뷰가 수정되었습니다');
            setReviewModal(false);
          },
        },
      );
    }
  };

  const validateReview = () => {
    if (!validateRating(review.rating)) {
      Toast.error('별점을 선택해주세요');
      return false;
    }
    if (!validateEmpty(review.title)) {
      Toast.error('제목을 입력해주세요');
      return false;
    }
    if (!validateEmpty(review.phrase)) {
      Toast.error('책 문구를 입력해주세요');
      return false;
    }
    if (!validateEmpty(review.contents)) {
      Toast.error('내용을 입력해주세요');
      return false;
    }

    return true;
  };

  return (
    <S.CreateRContainer reviewModal={reviewModal}>
      <S.CreateRModal reviewModal={reviewModal}>
        <S.XContainer>
          <Rating count={writtenReview?.reviewRating} onChange={ratingChangeHandler} />
          <img src={IconX} onClick={() => setReviewModal(false)} />
        </S.XContainer>
        {TextAreas.map((t) => (
          <Textarea
            key={t.name}
            name={t.name}
            placeholder={t.placeholder}
            topSlot={t.topSlot}
            value={t.value}
            style={t.style}
            onChange={textareaChangeHandler}
          />
        ))}
        <S.WriteBtn>
          <S.RefreshBtn
            title="다시 쓰기"
            src={IconRefresh}
            onClick={() =>
              setReview({
                title: '',
                phrase: '',
                contents: '',
                rating: 0,
              })
            }
          />
          <button onClick={() => postWriteReview(review)}>
            {writtenReview ? '수정하기' : '작성하기'}
          </button>
        </S.WriteBtn>
      </S.CreateRModal>
    </S.CreateRContainer>
  );
}
