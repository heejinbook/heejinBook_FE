import { useCallback, useEffect, useState } from 'react';
import * as S from './BookListReview.styles';
import Pagination from 'react-js-pagination';
import { ReviewModal } from '../../ReviewModal/ReviewModal';
import { ReviewFilter } from './ReviewFilter/ReviewFilter';
import { FilterType } from '../../MainBookList/BookList';
import { useGetBookReview } from '../../../querys/reviewQuery';
import ReviewItems from './ReviewItems/ReviewItems';
import { Loading } from '../../common/Loading/Loading';
import { useSetRecoilState } from 'recoil';
import { reviewIdState } from '../../../recoil/reviewIdState';

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
  const setReviewId = useSetRecoilState(reviewIdState);

  const { data, isLoading } = useGetBookReview(currentPage, sortOption);

  const pageChangeHandler = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const modalOpenHandler = useCallback((reviewId: number) => {
    setSelectedReviewId(reviewId);
    setReviewModal(true);
  }, []);

  useEffect(() => {
    if (data?.contents) {
      const reviewIds = data?.contents.map((r) => r.reviewId);
      setReviewId(reviewIds);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  return data ? (
    <>
      <ReviewModal
        selectedReviewId={selectedReviewId}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
      />
      <div>
        <S.ReviewFilterContainer>
          <S.ReviewCount>리뷰 {data?.totalElements}</S.ReviewCount>
          <ReviewFilter
            filterName={filterName}
            onSelectName={(filterName: string) => setFilterName(filterName)}
            onSortChange={(filterId: number) => setSortOption(filterId)}
          />
        </S.ReviewFilterContainer>
        <S.ReviewGrid>
          {data?.contents.map((review, idx) => (
            <ReviewItems
              {...review}
              key={idx}
              modalOpen={() => modalOpenHandler(review.reviewId)}
            />
          ))}
        </S.ReviewGrid>
      </div>
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
