import * as S from './BookIntroduction.styles';

export type BookIntroductionType = {
  content: string;
  category: string;
  date: string;
  publisher: string;
  isbn: number;
};
export function BookIntroduction() {
  const book: BookIntroductionType = {
    content:
      ' 불행을 파는 대신 원하는 행복을 살 수 있는 가게가 있다면? 듣기만 해도 방문하고 싶어지는, 비가 오면 열리는 수상한 상점에 초대된 여고생 세린이 안내묘 잇샤, 사람의 마음을 훔치는 도깨비들과 함께 펼치는 감동 모험 판타지!『비가 오면 열리는 상점』은 출간 전부터 많은 독자에게 입소문이 자자했던 작품이다. 처음 텀블벅에서 소개됐을 때부터 2000만 원에 가까운 후원금을 모금하며, 베스트셀러 『달러구트 꿈 백화점』과 『죽고 싶지만 떡볶이는 먹고 싶어』의 금액을 넘어섰다. 무엇보다 2023년 4월에 열린 런던도서전에서도 화제가 되면서, 출간 전부터 해외 6개국(폴란드, 포르투갈, 이탈리아, 일본, 대만, 러시아)에 판권을 먼저 수출하는 놀라운 성과를 거두었다. 국내 출판 역사상 최초의 일로, 그야말로 ‘괴물 신인 작가’의 탄생이라 할 수 있다. 도대체 이 소설에 어떤 매력이 있기에 국적과 언어를 초월해 큰 기대를 받는 것일까? “해리포터 시리즈와 지브리 애니메이션이 만났다.” “더 열심히 살아갈 용기와 위로를 얻었다.” “놀랄 정도로 잘 읽힌다.” “너무 감동적인 이야기라 여운이 오래 남을 것 같다.” 작품을 먼저 읽은 독자들의 말처럼, 이 소설이 재미와 감동 그리고 의미를 모두 잡았기 때문이다. 마치 영상을 보는 것과 같은 생생한 묘사와 속도감 있는 문체, 판타지와 성장소설의 결합, 무엇보다 따스한 시선으로 희망과 용기를 건네는 작가의 진정성과 작품의 메시지가 언어와 문화를 훌쩍 뛰어넘은 것이다. 전 세계가 기다리는 놀라운 ‘스토리의 힘’이 궁금하다면, 지금 바로 『비가 오면 열리는 상점』의 초대장을 펼쳐보자.',
    category: '소설',
    date: '2023.06.14',
    publisher: '클레이하우스',
    isbn: 9791198173881,
  };

  return (
    <S.IntroductionContainer>
      <S.Introduction>
        <p>책 소개</p>
        <S.BookContent>{book.content}</S.BookContent>
      </S.Introduction>
      <S.BookBox>
        <S.BookCategory>
          <p>카테고리</p>
          {book.category}
        </S.BookCategory>
        <S.BookDate>
          <p>출간일</p>
          {book.date}
        </S.BookDate>
        <S.BookPublisher>
          <p>출판사</p>
          {book.publisher}
        </S.BookPublisher>
        <S.BookIsbn>
          <p>ISBN</p>
          {book.isbn}
        </S.BookIsbn>
      </S.BookBox>
    </S.IntroductionContainer>
  );
}
