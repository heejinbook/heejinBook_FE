import * as S from './BookNavi.styles';
import IconBookAdd from '../../assets/svg/addBook.svg';
import IconBookDelete from '../../assets/svg/noAddBook.svg';
import IconWrite from '../../assets/svg/pencil.svg';
import IconShare from '../../assets/svg/share.svg';
import { useParams } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { postBookToLibrary } from '../../apis/library';

type AddBookProps = {
  addBookLibrary: boolean;
  toggleLibrary: () => void;
  reviewModal: boolean;
  setReviewModal: (value: boolean) => void;
};

export function BookNavi({
  addBookLibrary,
  toggleLibrary,
  reviewModal,
  setReviewModal,
}: AddBookProps) {
  const { bookId } = useParams();

  const postBook = () => {
    postBookToLibrary(Number(bookId))
      .then((result) => {
        if (result.data.status === 201) {
          toggleLibrary();
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          Toast.error('!로그인!');
        }
      });
  };

  return (
    <S.BookNaviContainer>
      <S.BookNavi>
        <S.Library onClick={postBook}>
          {addBookLibrary ? <img src={IconBookAdd} /> : <img src={IconBookDelete} />}
          <p>내 책장에 담기</p>
        </S.Library>
        <S.WriteReview onClick={() => setReviewModal(true)}>
          <img src={IconWrite} />
          <p>리뷰쓰기</p>
        </S.WriteReview>
        <S.Share>
          <img src={IconShare} />
          <p>공유하기</p>
        </S.Share>
      </S.BookNavi>
    </S.BookNaviContainer>
  );
}
