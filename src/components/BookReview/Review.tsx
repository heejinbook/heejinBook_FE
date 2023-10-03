import { BookSwiper } from './BookSwiper/BookSwiper';
import * as S from './Review.styles';

export type ReviewType = {
  user: string;
  title: string;
  phrase: string;
  content: string;
};

export function Review() {
  const review: ReviewType[] = [
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
    {
      user: 'src/assets/userImage.png',
      title: '이것은 타이틀이야',
      phrase:
        '족장님께서 상점을 수리하는 김에 이름을 ‘무지개상점’으로 바꾸자고 하시네요. 비가 오면 나타나는 ‘무지개’처럼 아무리 힘든 상황에서도 절대 희망을 버리지 말자는 의미에서요, 모두 동의하시나요?”',
      content:
        '책이 전하는 그 메세지는, 언제 다시 들어도 마음 뭉클하고 언제 다시 읽어도 나에게 힘이 되기에 그렇기에 괜찮았던 책.',
    },
  ];
  return (
    <S.ReviewContainer>
      <S.Review>
        <p>책 리뷰</p>
        <S.BookSwiperContainer>
          <BookSwiper review={review} />
        </S.BookSwiperContainer>
      </S.Review>
    </S.ReviewContainer>
  );
}
