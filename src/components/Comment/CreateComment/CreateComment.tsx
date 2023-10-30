import { useState } from 'react';
import { Input } from '../../common/Input/Input';
import * as S from './CreateComment.styles';
import { Contents, postComment } from '../../../apis/review';

type CreateCommentProps = {
  reviewId: number;
  detailReview: (reviewId: number) => void;
};

export function CreateComment({ reviewId, detailReview }: CreateCommentProps) {
  const [comment, setComment] = useState<Contents>({
    contents: '',
  });

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ contents: e.target.value });
  };

  const postComments = (reviewId: number) => {
    postComment(reviewId, comment)
      .then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          setComment({
            contents: '',
          });
          detailReview(reviewId);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <S.CreateComment>
      <Input
        topSlot="comment"
        type="text"
        style={{ height: '20px' }}
        placeholder="다양한 댓글을 남겨주세요"
        rightSlot={<button onClick={() => postComments(reviewId)}>등록</button>}
        value={comment.contents}
        onChange={commentChangeHandler}
      />
    </S.CreateComment>
  );
}
