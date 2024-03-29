import styled from '@emotion/styled';
import { CreateRContainer } from '../CreateReview/CreateReview.styles';

export const ReviewModalContainer = styled.div<CreateRContainer>`
  background-color: ${({ reviewModal }) => (reviewModal ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  z-index: ${({ reviewModal }) => (reviewModal ? '999' : '-1')};
  display: ${({ reviewModal }) => (reviewModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Review = styled.div<CreateRContainer>`
  width: 600px;
  max-height: 600px;
  display: ${({ reviewModal }) => (reviewModal ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  border-radius: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const XContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    padding: 10px 10px 0 0;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;

export const ReviewContainer = styled.div`
  max-width: 800px;
  min-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
`;
export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-bottom: 5px;
`;
export const ReviewTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;
export const PhraseContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
  p {
    display: flex;
    margin: 0 20px;
    font-size: 24px;
    color: #503f15;
  }
`;
export const ReviewPhrase = styled.div`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding-top: 3px;
  margin-bottom: 10px;
`;
export const ReviewContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const CountContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  p {
    margin: 0;
    color: #bbb49e;
  }
  span {
    margin-left: 5px;
    color: #bbb49e;
  }
`;
