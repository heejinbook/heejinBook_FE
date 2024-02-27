import {
  CSSProperties,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Input } from '../common/Input/Input';
import * as S from './CreateReview.styles';
import IconX from '../../assets/svg/X.svg';
import { CreateReviewType } from '../../apis/review';
import { useParams } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { validateEmpty } from '../../utils/validate';
import { MyReview } from '../MyLibrary/LibraryReview/LibraryReview';
import { Rating } from '../common/Rating/Rating';
import { useCreateReview, useEditReview } from '../../querys/reviewMutation';
import { useLockScroll } from '../../hooks/useLockScroll';

type ReviewProps = {
  reviewModal: boolean;
  setReviewModal: Dispatch<SetStateAction<boolean>>;
  writtenReview?: MyReview;
};

type ReviewInputType = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  topSlot: string;
  value: string;
  style?: CSSProperties;
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

  const Inputs: ReviewInputType[] = [
    {
      name: 'title',
      type: 'text',
      placeholder: '제목을 입력하세요',
      topSlot: 'title',
      value: review.title,
    },
    {
      name: 'phrase',
      type: 'text',
      placeholder: '기억나는 책 문구를 적어주세요',
      topSlot: '',
      value: review.phrase,
    },
    {
      name: 'contents',
      type: 'text',
      placeholder: '내용을 입력하세요',
      topSlot: 'content',
      value: review.contents,
      style: { height: '200px' },
    },
  ];

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (review.rating < 0) {
      Toast.error('별점을 선택해주세요');
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
        {Inputs.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            topSlot={input.topSlot}
            value={input.value}
            style={input.style}
            onChange={inputChangeHandler}
          />
        ))}
        <S.WriteBtn>
          <button onClick={() => postWriteReview(review)}>
            {writtenReview ? '수정하기' : '작성하기'}
          </button>
        </S.WriteBtn>
      </S.CreateRModal>
    </S.CreateRContainer>
  );
}
