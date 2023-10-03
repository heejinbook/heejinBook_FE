import * as S from './BookNavi.styles';

export function BookNavi() {
  return (
    <S.BookNaviContainer>
      <S.BookNavi>
        <S.Library>
          <img src="src/assets/svg/inLibrary.svg" />
          <p>내 서제에 담기</p>
        </S.Library>
        <S.Share>
          <img src="src/assets/svg/writeReview.svg" />
          <p>리뷰쓰기</p>
        </S.Share>
        <S.WriteReview>
          <img src="src/assets/svg/share.svg" />
          <p>공유하기</p>
        </S.WriteReview>
      </S.BookNavi>
    </S.BookNaviContainer>
  );
}
