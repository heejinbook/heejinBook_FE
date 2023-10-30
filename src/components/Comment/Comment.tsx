import { CommentType } from '../ReviewModal/ReviewModal';
import * as S from './Comment.styles';
import { CreateComment } from './CreateComment/CreateComment';
import IconX from '../../assets/svg/X.svg';
import IconNoImage from '../../assets/svg/noImageUser.svg';
import { deleteComment } from '../../apis/review';

type CommentProps = {
  comments: CommentType[];
  detailReview: (reviewId: number) => void;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

export function Comment({ comments, detailReview, setComments }: CommentProps) {
  const deleteMyComment = (commentId: number) => {
    deleteComment(commentId).then(() => {
      setComments((prev) => prev.filter((comment) => comment.commentId !== commentId));
    });
  };

  return (
    <S.Comment>
      <CreateComment detailReview={detailReview} reviewId={comments[0].reviewId} />
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
              <div>
                <S.CommentUser>{comment.commentAuthor}</S.CommentUser>
                <S.CommentCreatedAt>{comment.commentCreatedAt}</S.CommentCreatedAt>
                <S.CommentContent>{comment.contents}</S.CommentContent>
              </div>
            </S.Comments>
            {comment.isMine && (
              <S.IconXContainer>
                <img src={IconX} onClick={() => deleteMyComment(comment.commentId)} />
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
