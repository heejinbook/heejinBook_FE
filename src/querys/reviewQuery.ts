import { useQuery } from '@tanstack/react-query';
import { getDetailReview, getReviewList, getReviewPromise } from '../apis/review';
import { ReviewType } from '../components/BookReview/Review';
import { reviewFilter } from '../components/BookReview/BookListReview/BookListReview';
import { useParams } from 'react-router-dom';
import { getMyReview } from '../apis/library';
import { MyReview } from '../components/MyLibrary/LibraryReview/LibraryReview';

export function useGetBookReview(currentPage: number, sortOption: number) {
  const { bookId } = useParams();

  const bookReviewList = () => {
    return getReviewList(Number(bookId), {
      page: currentPage - 1,
      sort: reviewFilter[sortOption].sortName,
      size: 9,
    });
  };
  return useQuery<getReviewPromise>({
    queryKey: ['reviewList', currentPage, sortOption],
    queryFn: bookReviewList,
  });
}

export function useGetDetailReview(selectedReviewId: number | null) {
  const detailReview = () => {
    if (selectedReviewId) {
      return getDetailReview(selectedReviewId);
    } else {
      return {
        reviewId: 0,
        reviewAuthorProfileUrl: null,
        reviewTitle: '',
        reviewPhrase: '',
        reviewContents: '',
        reviewRating: 0,
        isLike: false,
        likeCount: 0,
        comments: [],
      };
    }
  };
  return useQuery<ReviewType>({
    queryKey: ['detailReview', selectedReviewId],
    queryFn: detailReview,
    enabled: !!selectedReviewId,
  });
}

export function useGetMyReview() {
  return useQuery<MyReview[]>({
    queryKey: ['myReview'],
    queryFn: () => getMyReview(),
  });
}
