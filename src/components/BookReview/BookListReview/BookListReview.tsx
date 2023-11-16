import { useCallback, useState } from 'react';
import * as S from './BookListReview.styles';
import Pagination from 'react-js-pagination';
import { ReviewModal } from '../../ReviewModal/ReviewModal';
import { ReviewFilter } from './ReviewFilter/ReviewFilter';
import { FilterType } from '../../MainBookList/BookList';
import { Heart } from '../../Heart/Heart';
import { Rating } from '../../common/Rating/Rating';
import { useGetBookReview } from '../../../querys/reviewQuery';
import ReviewItems from './ReviewItems/ReviewItems';

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
  const [filterName, setFilterName] = useState<string>('sort by');

  const { data, isLoading } = useGetBookReview(currentPage, sortOption);

  const pageChangeHandler = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const modalOpenHandler = useCallback((reviewId: number) => {
    setSelectedReviewId(reviewId);
    setReviewModal(true);
  }, []);

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
          <ReviewFilter
            filterName={filterName}
            onSelectName={(filterName: string) => setFilterName(filterName)}
            onSortChange={(filterId: number) => setSortOption(filterId)}
          />
        </S.ReviewFilterContainer>
        <S.LibraryReviewGrid>
          {data?.contents.map((review, idx) => (
            <ReviewItems
              {...review}
              key={idx}
              modalOpen={() => modalOpenHandler(review.reviewId)}
            />
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
