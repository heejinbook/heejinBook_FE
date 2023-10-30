import styled from '@emotion/styled';

export const Comment = styled.div`
  padding-bottom: 20px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  margin-top: 16px;
`;

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 100%;
  padding: 0;
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

export const IconXContainer = styled.div`
  img {
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
  }
`;

export const NoComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
