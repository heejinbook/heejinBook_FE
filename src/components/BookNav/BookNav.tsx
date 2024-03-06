import * as S from './BookNav.styles';
import IconBookAdd from '../../assets/svg/addBook.svg';
import IconBookDelete from '../../assets/svg/noAddBook.svg';
import IconWrite from '../../assets/svg/pencil.svg';
import IconShare from '../../assets/svg/share.svg';
import { useParams } from 'react-router-dom';
import { usePostBook } from '../../querys/bookMutation';
import { Toast } from '../common/Toastify/Toastify';

type AddBookProps = {
  addBookLibrary: boolean;
  modalOpen: () => void;
};

export function BookNav({ addBookLibrary, modalOpen }: AddBookProps) {
  const { bookId } = useParams();

  const { postBookMutate } = usePostBook();
  const postBook = () => {
    postBookMutate(Number(bookId));
  };

  const copyLink = () => {
    document.getElementById('copyBtn')?.addEventListener('click', async () => {
      const url = window.location.href;

      await navigator.clipboard
        .writeText(url)
        .then(() => {
          Toast.success('클립보드에 복사됐습니다');
        })
        .catch(() => {
          Toast.error('클립보드에 복사하지 못했습니다');
        });
    });
  };

  return (
    <S.BookNavContainer>
      <S.BookNav>
        <S.Library onClick={postBook}>
          {addBookLibrary ? <img src={IconBookAdd} /> : <img src={IconBookDelete} />}
          <p>내 책장에 담기</p>
        </S.Library>
        <S.WriteReview onClick={modalOpen}>
          <img src={IconWrite} />
          <p>리뷰쓰기</p>
        </S.WriteReview>
        <S.Share>
          <img src={IconShare} />
          <p id="copyBtn" onClick={copyLink}>
            공유하기
          </p>
        </S.Share>
      </S.BookNav>
    </S.BookNavContainer>
  );
}
