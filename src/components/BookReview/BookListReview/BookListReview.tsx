import { useEffect, useState } from 'react';
import { ReviewType } from '../Review';
import * as S from './BookListReview.styles';
import { useParams } from 'react-router-dom';
import { getReviewList } from '../../../apis/review';
import { SortOption } from '../../MainBookList/BookList';
import Pagination from 'react-js-pagination';

type ReviewProps = {
  reviews: ReviewType[];
};

type Text = {
  text: string;
};

export function BookListReview({ reviews }: ReviewProps) {
  const [reviewItems, setReviewItems] = useState<ReviewType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>('title');
  const [totalReviews, setTotalReviews] = useState<number>(0);

  const { bookId } = useParams();

  useEffect(() => {
    reviewList(currentPage);
  }, [currentPage, sortOption]);

  const reviewList = (page: number) => {
    getReviewList(Number(bookId), {
      page: page - 1,
      sort: sortOption === 'title' ? 'title' : 'r.id,desc',
      size: 9,
    })
      .then((result) => {
        console.log(result.data.data.totalElements);
        setTotalReviews(result.data.data.totalElements);
        const reviews: ReviewType[] = result.data.data.contents.map((review: ReviewType) => ({
          reviewId: review.reviewId,
          reviewAuthorProfileUrl: review.reviewAuthorProfileUrl,
          reviewTitle: review.reviewTitle,
          reviewPhrase: review.reviewPhrase,
          reviewContents: review.reviewContents,
        }));
        setReviewItems(reviews);
      })
      .catch((error) => console.error(error));
  };

  const EllipsisText = ({ text }: Text) => {
    const maxLength = 100;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  const pageChangeHandler = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <S.LibraryReviewContainer>
        <p>리뷰 {totalReviews}</p>
        <S.LibraryReviewGrid>
          {reviewItems.map((review) => (
            <S.LibraryReview key={review.reviewId}>
              <S.BookImage src={review.reviewAuthorProfileUrl} />
              <S.BookTitle>{review.reviewTitle}</S.BookTitle>
              <S.ReviewPhraseContainer>
                <p>"</p>
                <S.ReviewPhrase>{EllipsisText({ text: review.reviewPhrase })}</S.ReviewPhrase>
                <p>"</p>
              </S.ReviewPhraseContainer>
            </S.LibraryReview>
          ))}
        </S.LibraryReviewGrid>
      </S.LibraryReviewContainer>
      <S.PaginationWrapper>
        <div className="pagination">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={9}
            totalItemsCount={totalReviews}
            pageRangeDisplayed={5}
            onChange={pageChangeHandler}
            prevPageText={'‹'}
            nextPageText={'›'}
          />
        </div>
      </S.PaginationWrapper>
    </>
  );
}
