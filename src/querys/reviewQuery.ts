import { useQuery } from '@tanstack/react-query';
import { getDetailReview } from '../apis/review';
import { ReviewType } from '../components/BookReview/Review';

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
