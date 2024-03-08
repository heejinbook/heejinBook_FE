import { useNavigate } from 'react-router-dom';
import * as S from './LibraryReviewItems.styles';
import NoImage from '../../../../assets/svg/image.svg';

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
    const maxLength = 23;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <S.ReviewContainer>
      {bookThumbnail ? (
        <S.BookImage
          src={bookThumbnail}
          onClick={() => {
            navigate(`/main/books/${bookId}`);
          }}
        />
      ) : (
        <S.NoImage>
          <img src={NoImage} />
        </S.NoImage>
      )}
      <S.BookTitle>{bookTitle}</S.BookTitle>
      <S.BookAuthor>{bookAuthor}</S.BookAuthor>
      <S.ReviewPhraseContainer>
        <p className="quotationMarks">"</p>
        <S.ReviewPhrase>{EllipsisText({ text: reviewPhrase })}</S.ReviewPhrase>
        <p className="quotationMarks">"</p>
      </S.ReviewPhraseContainer>
    </S.ReviewContainer>
  );
}
