import * as S from './BookNavi.styles';
import IconLibrary from '../../assets/svg/inLibrary.svg';
import IconWrite from '../../assets/svg/pencil.svg';
import IconShare from '../../assets/svg/share.svg';
import { useParams } from 'react-router-dom';
import { Toast } from '../common/Toastify/Toastify';
import { postBookToLibrary } from '../../apis/library';

export function BookNavi() {
  const { bookId } = useParams();

  const postBook = () => {
    postBookToLibrary(Number(bookId))
      .then((result) => {
        if (result.status === 201) {
          Toast.success('책장에 담았습니다');
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
          <img src={IconLibrary} />
          <p>내 책장에 담기</p>
        </S.Library>
        <S.WriteReview>
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
