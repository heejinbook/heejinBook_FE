import React from 'react';
import * as S from './BookItems.styles';
import { useNavigate } from 'react-router-dom';
import IconReviewer from '../../../assets/svg/person.svg';
import IconRating from '../../../assets/svg/fullStar.svg';
import NoImage from '../../../assets/svg/image.svg';

type Props = {
  author: string;
  avgRating: number;
  bookId: number;
  reviewCount: number;
  thumbnail: string;
  title: string;
};

const equalProps = (prevProps: any, nextProps: any) => {
  const key1 = Object.keys(prevProps);
  const key2 = Object.keys(nextProps);

  if (key1.length !== key2.length) {
    return false;
  }

  return key1.every((key) => prevProps[key] === nextProps[key]);
};

const BookItems = React.memo(function ({
  author,
  avgRating,
  bookId,
  reviewCount,
  thumbnail,
  title,
}: Props) {
  const navigate = useNavigate();

  return (
    <S.BookListItems
      onClick={() => {
        navigate(`books/${bookId}`);
      }}
    >
      {thumbnail ? (
        <S.BookImage src={thumbnail} />
      ) : (
        <S.NoImage>
          <img src={NoImage} />
        </S.NoImage>
      )}
      <S.BookTitle>{title}</S.BookTitle>
      <S.BookAuthor>{author}</S.BookAuthor>
      <S.ReviewerContainer>
        <S.ReviewerIcon src={IconReviewer} />
        <S.Reviewer>{reviewCount}</S.Reviewer>
        <S.RatingIcon src={IconRating} />
        <S.RatingPoint>{avgRating}</S.RatingPoint>
      </S.ReviewerContainer>
    </S.BookListItems>
  );
},
equalProps);

export default BookItems;
