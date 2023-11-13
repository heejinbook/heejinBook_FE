import { useState } from 'react';
import * as S from './BookListReview.styles';
import Pagination from 'react-js-pagination';
import { ReviewModal } from '../../ReviewModal/ReviewModal';
import { ReviewFilter } from './ReviewFilter/ReviewFilter';
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import { FilterType } from '../../MainBookList/BookList';
import { Heart } from '../../Heart/Heart';
import { Rating } from '../../common/Rating/Rating';
import { useGetBookReview } from '../../../querys/reviewQuery';

type Text = {
  text: string;
};

export const reviewFilter: FilterType[] = [
  { filterId: 0, filterName: '최신순', sortName: 'CREATED_AT' },
  { filterId: 1, filterName: '별점순', sortName: 'RATING_DESC' },
  { filterId: 2, filterName: '좋아요순', sortName: 'COUNT_LIKE' },
  { filterId: 3, filterName: '댓글순', sortName: 'COUNT_COMMENT' },
];

export function BookListReview() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<number>(0);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const { data, isLoading } = useGetBookReview(currentPage, sortOption);

  const EllipsisText = ({ text }: Text) => {
    const maxLength = 20;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  const pageChangeHandler = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const modalOpenHandler = (reviewId: number) => {
    setSelectedReviewId(reviewId);
    setReviewModal(true);
  };

  if (isLoading) return <p>isLoading</p>;
  //memo item 컴포넌트 감싸주고 비교함수 2번째
  //함수 props로 넘길 때는 useCallback으로 감싸주기-memo를 쓸 때만(props로 넘겨주는 함수를 다른 함수로 취급)
  return data ? (
    <>
      <ReviewModal
        selectedReviewId={selectedReviewId}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
      />
      <S.LibraryReviewContainer>
        <S.ReviewFilterContainer>
          <p>리뷰 {data?.totalElements}</p>
          <ReviewFilter reviewFilter={reviewFilter} onSortChange={setSortOption} />
        </S.ReviewFilterContainer>
        <S.LibraryReviewGrid>
          {data?.contents.map((review) => (
            <S.LibraryReview key={review.reviewId}>
              <S.ReviewContainer onClick={() => modalOpenHandler(review.reviewId)}>
                {review.reviewAuthorProfileUrl === null ? (
                  <S.ReviewImage src={IconNoImage} />
                ) : (
                  <S.ReviewImage src={review.reviewAuthorProfileUrl} />
                )}
                <Rating count={review.reviewRating} readonly />
                <S.ReviewTitle>{review.reviewTitle}</S.ReviewTitle>
                <S.ReviewPhraseContainer>
                  <p>"</p>
                  <S.ReviewPhrase>{EllipsisText({ text: review.reviewPhrase })}</S.ReviewPhrase>
                  <p>"</p>
                </S.ReviewPhraseContainer>
              </S.ReviewContainer>
              <S.HeartContainer>
                <Heart
                  reviewId={review.reviewId}
                  isLike={review.isLike}
                  likeCount={review.likeCount}
                />
              </S.HeartContainer>
            </S.LibraryReview>
          ))}
        </S.LibraryReviewGrid>
      </S.LibraryReviewContainer>
      <S.PaginationWrapper>
        <div className="pagination">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={9}
            totalItemsCount={data?.totalElements}
            pageRangeDisplayed={5}
            onChange={pageChangeHandler}
            prevPageText={'‹'}
            nextPageText={'›'}
          />
        </div>
      </S.PaginationWrapper>
    </>
  ) : null;
}
