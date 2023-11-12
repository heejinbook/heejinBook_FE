import { useState } from 'react';
import { Input } from '../../common/Input/Input';
import * as S from './CreateComment.styles';
import { Contents, postComment } from '../../../apis/review';
import { useCreateComment } from '../../../querys/CommentsQuery';

type CreateCommentProps = {
  reviewId: number;
};

export function CreateComment({ reviewId }: CreateCommentProps) {
  const [comment, setComment] = useState<Contents>({
    contents: '',
  });

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ contents: e.target.value });
  };

  const { postCommentMutate } = useCreateComment(reviewId);

  const postComments = () => {
    postCommentMutate(comment, {
      onSuccess: () =>
        setComment({
          contents: '',
        }),
    });
  };

  return (
    <S.CreateComment>
      <Input
        topSlot="comment"
        type="text"
        style={{ height: '20px' }}
        placeholder="다양한 댓글을 남겨주세요"
        rightSlot={<button onClick={postComments}>등록</button>}
        value={comment.contents}
        onChange={commentChangeHandler}
      />
    </S.CreateComment>
  );
}
