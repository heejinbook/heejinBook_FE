import React from 'react';
import * as S from './BookItems.styles';
import { useNavigate } from 'react-router-dom';
import IconReviewer from '../../../assets/svg/person.svg';
import IconRating from '../../../assets/svg/fullStar.svg';

type Props = {
  author: string;
  avgRating: number;
  bookId: number;
  reviewCount: number;
  thumbnail: string;
  title: string;
};

const equalProps = (prevProps: any, nextProps: any) => {
  return (
    prevProps.avgRating === nextProps.avgRating && prevProps.reviewCount === nextProps.reviewCount
  );
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
      <S.BookImage src={thumbnail} />
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
