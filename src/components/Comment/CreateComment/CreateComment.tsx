import { useState } from 'react';
import { Input } from '../../common/Input/Input';
import * as S from './CreateComment.styles';
import { Contents } from '../../../apis/review';
import { useCreateComment } from '../../../querys/commentsMutation';
import { validateEmpty } from '../../../utils/validate';

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

  const { postCommentMutate } = useCreateComment();

  const postComments = () => {
    if (!validateEmpty(comment.contents)) return;
    postCommentMutate(
      { reviewId, payload: comment },
      {
        onSuccess: () =>
          setComment({
            contents: '',
          }),
      },
    );
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      postComments();
    }
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
        onKeyDown={activeEnter}
      />
    </S.CreateComment>
  );
}
