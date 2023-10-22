import { CSSProperties, HTMLInputTypeAttribute, useState } from 'react';
import { Input } from '../common/Input/Input';
import * as S from './CreateReview.styles';
import IconX from '../../assets/svg/X.svg';
import { ReviewType, postReview } from '../../apis/review';
import { useParams } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { validateEmpty } from '../../utils/validate';

export type ReviewProps = {
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function CreateReview({ reviewModal, setReviewModal }: ReviewProps) {
  const { bookId } = useParams();

  const [review, setReview] = useState<ReviewType>({
    title: '',
    phrase: '',
    contents: '',
  });

  type ReviewInputType = {
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    topSlot: string;
    value: string;
    style?: CSSProperties;
  };

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

  const postWriteReview = (review: ReviewType) => {
    if (!validateReview()) {
      return;
    }
    postReview(Number(bookId), review)
      .then((result) => {
        if (result.data.status === 201) {
          setReviewModal(false);
          Toast.success('리뷰 작성 성공!');
          setReview({
            title: '',
            phrase: '',
            contents: '',
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          Toast.error('이미 리뷰를 작성했습니다');
        }
      });
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
    return true;
  };

  return (
    <S.CreateRContainer reviewModal={reviewModal}>
      <S.CreateRModal reviewModal={reviewModal}>
        <S.XContainer>
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
          <button onClick={() => postWriteReview(review)}>작성하기</button>
        </S.WriteBtn>
      </S.CreateRModal>
    </S.CreateRContainer>
  );
}
