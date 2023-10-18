import * as S from './BookNavi.styles';
import IconLibrary from '../../assets/svg/inLibrary.svg';
import IconWrite from '../../assets/svg/pencil.svg';
import IconShare from '../../assets/svg/share.svg';

export function BookNavi() {
  return (
    <S.BookNaviContainer>
      <S.BookNavi>
        <S.Library>
          <img src={IconLibrary} />
          <p>내 서제에 담기</p>
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
