import { useEffect, useState } from 'react';
import * as S from './LibraryReview.styles';
import { getMyReview } from '../../../apis/library';

export type MyReview = {
  reviewId: number;
  // bookImage: string;
  // bookTitle: string;
  // bookAuthor: string;
  reviewPhrase: string;
};

export function LibraryReview() {
  const [myReview, setMyReview] = useState<MyReview[]>([]);

  useEffect(() => {
    getMyReview()
      .then((result) => {
        setMyReview(result.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // const libraryReview: MyReview[] = [
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  //   {
  //     bookImage:
  //       'https://cover.millie.co.kr/service/cover/179612718/522e8fbb3b7949ee9500252e8821c193.jpg?w=220&f=webp&q=80',
  //     bookTitle: '비가 오면 열리는 상점',
  //     bookAuthor: '유영광',
  //     reviewPhrase:
  //       '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
  //   },
  // ];

  type Text = {
    text: string;
  };

  const EllipsisText = ({ text }: Text) => {
    const maxLength = 100;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <S.LibraryReviewContainer>
      <p>리뷰 {myReview.length}</p>
      <S.LibraryReviewGrid>
        {myReview.map((review) => (
          <S.LibraryReview key={review.reviewId}>
            {/* <S.BookImage src={review.bookImage} />
            <S.BookTitle>{review.bookTitle}</S.BookTitle>
            <S.BookAuthor>{review.bookAuthor}</S.BookAuthor> */}
            <S.ReviewPhraseContainer>
              <p>"</p>
              <S.ReviewPhrase>{EllipsisText({ text: review.reviewPhrase })}</S.ReviewPhrase>
              <p>"</p>
            </S.ReviewPhraseContainer>
            <S.ReviewDelete>리뷰 삭제</S.ReviewDelete>
          </S.LibraryReview>
        ))}
      </S.LibraryReviewGrid>
    </S.LibraryReviewContainer>
  );
}
