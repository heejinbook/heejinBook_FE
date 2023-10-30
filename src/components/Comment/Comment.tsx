import { CommentType } from '../ReviewModal/ReviewModal';
import * as S from './Comment.styles';
import { CreateComment } from './CreateComment/CreateComment';

type CommentProps = {
  comments: CommentType[];
  detailReview: (reviewId: number) => void;
};

export function Comment({ comments, detailReview }: CommentProps) {
  return (
    <S.Comment>
      <CreateComment detailReview={detailReview} reviewId={comments[0].reviewId} />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <S.CommentsContainer key={comment.commentId}>
            <S.CommentProfile src={comment.commentAuthorProfileUrl} />
            <div>
              <S.CommentUser>{comment.commentAuthor}</S.CommentUser>
              <S.CommentCreatedAt>{comment.commentCreatedAt}</S.CommentCreatedAt>
              <S.CommentContent>{comment.contents}</S.CommentContent>
            </div>
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
