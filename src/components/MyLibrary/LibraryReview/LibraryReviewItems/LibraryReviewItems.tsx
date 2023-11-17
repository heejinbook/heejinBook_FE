import { useNavigate } from 'react-router-dom';
import * as S from './LibraryReviewItems.styles';

type Text = {
  text: string;
};

type Props = {
  bookId: number;
  bookThumbnail: string;
  bookTitle: string;
  bookAuthor: string;
  reviewPhrase: string;
};

export function LibraryReviewItems({
  bookId,
  bookThumbnail,
  bookTitle,
  bookAuthor,
  reviewPhrase,
}: Props) {
  const navigate = useNavigate();

  const EllipsisText = ({ text }: Text) => {
    const maxLength = 100;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <>
      <S.BookImage
        src={bookThumbnail}
        onClick={() => {
          navigate(`/main/books/${bookId}`);
        }}
      />
      <S.BookTitle>{bookTitle}</S.BookTitle>
      <S.BookAuthor>{bookAuthor}</S.BookAuthor>
      <S.ReviewPhraseContainer>
        <p>"</p>
        <S.ReviewPhrase>{EllipsisText({ text: reviewPhrase })}</S.ReviewPhrase>
        <p>"</p>
      </S.ReviewPhraseContainer>
    </>
  );
}
