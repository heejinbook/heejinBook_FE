import styled from '@emotion/styled';

export const Comment = styled.div`
  padding-bottom: 20px;
`;
export const CommentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  margin-top: 16px;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 100%;
`;

export const CommentUser = styled.div`
  font-size: 12px;
`;
export const CommentCreatedAt = styled.div`
  font-size: 10px;
`;
export const CommentContent = styled.div`
  font-size: 14px;
  margin: 4px 0;
`;

export const NoComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 10px; */
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
