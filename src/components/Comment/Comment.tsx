import * as S from './Comment.styles';
import { CreateComment } from './CreateComment/CreateComment';
import IconX from '../../assets/svg/X.svg';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { Contents } from '../../apis/review';
import { Input } from '../common/Input/Input';
import { useState } from 'react';
import { useEditComment } from '../../querys/commentsMutation';
import { validateEmpty } from '../../utils/validate';

type CommentProps = {
  reviewId: number;
  comments: CommentType[];
  selectedCommentId: (commentId: number) => void;
  modalOpen: () => void;
};

export type CommentType = {
  commentAuthor: string;
  commentCreatedAt: string;
  commentAuthorProfileUrl: string;
  commentId: number;
  contents: string;
  isMine: boolean;
  reviewId: number;
};

export function Comment({ comments, reviewId, selectedCommentId, modalOpen }: CommentProps) {
  const [invisible, setInvisible] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [myContents, setMyContents] = useState<Contents>({
    contents: '',
  });

  const editBtnInVisible = (commentId: number, contents: string) => {
    setMyContents({
      contents: contents,
    });
    setEditId(commentId);
    setInvisible(true);
  };

  const { editCommentMutate } = useEditComment();

  const editMyContent = () => {
    if (!validateEmpty(myContents.contents)) return;
    editCommentMutate(
      { editId, payload: myContents },
      {
        onSuccess: () => {
          setInvisible(false);
          setEditId(null);
        },
      },
    );
  };

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyContents({ contents: e.target.value });
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editMyContent();
    }
  };

  return (
    <S.Comment>
      <CreateComment reviewId={reviewId} />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <S.CommentsContainer>
            <S.Comments key={comment.commentId}>
              <S.ProfileContainer>
                {comment.commentAuthorProfileUrl === null ? (
                  <S.CommentProfile src={IconNoImage} />
                ) : (
                  <S.CommentProfile src={comment.commentAuthorProfileUrl} />
                )}
              </S.ProfileContainer>
              <div style={{ width: '100%' }}>
                {!invisible && (
                  <>
                    <S.CommentUser>{comment.commentAuthor}</S.CommentUser>
                    <S.CommentCreatedAt>{comment.commentCreatedAt}</S.CommentCreatedAt>
                    <S.CommentContent>{comment.contents}</S.CommentContent>
                  </>
                )}
                {comment.isMine && editId === comment.commentId && (
                  <Input
                    topSlot="comment"
                    type="text"
                    style={{ height: '20px' }}
                    rightSlot={<S.EditBtn onClick={editMyContent}>수정</S.EditBtn>}
                    value={myContents.contents}
                    onChange={commentChangeHandler}
                    onKeyDown={activeEnter}
                  />
                )}
              </div>
            </S.Comments>
            {comment.isMine && (
              <S.IconXContainer>
                <img
                  style={{ display: invisible ? 'none' : 'block' }}
                  src={IconX}
                  onClick={() => {
                    modalOpen();
                    selectedCommentId(comment.commentId);
                  }}
                />
                {!invisible && (
                  <button onClick={() => editBtnInVisible(comment.commentId, comment.contents)}>
                    수정
                  </button>
                )}
              </S.IconXContainer>
            )}
          </S.CommentsContainer>
        ))
      ) : (
        <S.NoComment>
          <p>아직 댓글이 없습니다</p>
          <p>댓글을 남겨보세요</p>
        </S.NoComment>
      )}
    </S.Comment>
  );
}
