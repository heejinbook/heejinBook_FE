import { useEffect, useState } from 'react';
import { ReviewType } from '../Review';
import * as S from './BookListReview.styles';
import { useParams } from 'react-router-dom';
import { getReviewList } from '../../../apis/review';
import Pagination from 'react-js-pagination';
import { ReviewModal } from '../../ReviewModal/ReviewModal';
import { ReviewFilter } from './ReviewFilter/ReviewFilter';
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import { FilterType } from '../../MainBookList/BookList';

type Text = {
  text: string;
};

const reviewFilter: FilterType[] = [
  { filterId: 0, filterName: '최신순', sortName: 'CREATED_AT' },
  { filterId: 1, filterName: '좋아요순', sortName: 'COUNT_LIKE' },
  { filterId: 2, filterName: '댓글순', sortName: 'COUNT_COMMENT' },
];

export function BookListReview() {
  const [reviewItems, setReviewItems] = useState<ReviewType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<ReviewType | null>(null);

  const { bookId } = useParams();

  useEffect(() => {
    reviewList(currentPage);
  }, [currentPage, sortOption]);

  const reviewList = (page: number) => {
    getReviewList(Number(bookId), {
      page: page - 1,
      sort: reviewFilter[sortOption].sortName,
      size: 9,
    })
      .then((result) => {
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

  const modalOpenHandler = (reviewItem: ReviewType) => {
    setSelectedReview(reviewItem);
    setReviewModal(true);
  };

  return (
    <>
      <ReviewModal
        selectedReview={selectedReview}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
      />
      <S.LibraryReviewContainer>
        <S.ReviewFilterContainer>
          <p>리뷰 {totalReviews}</p>
          <ReviewFilter reviewFilter={reviewFilter} onSortChange={setSortOption} />
        </S.ReviewFilterContainer>
        <S.LibraryReviewGrid>
          {reviewItems.map((review) => (
            <S.LibraryReview key={review.reviewId} onClick={() => modalOpenHandler(review)}>
              {review.reviewAuthorProfileUrl === null ? (
                <S.ReviewImage src={IconNoImage} />
              ) : (
                <S.ReviewImage src={review.reviewAuthorProfileUrl} />
              )}
              <S.ReviewTitle>{review.reviewTitle}</S.ReviewTitle>
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
