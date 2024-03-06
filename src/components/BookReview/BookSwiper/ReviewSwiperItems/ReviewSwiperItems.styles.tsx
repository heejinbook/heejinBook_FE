import styled from '@emotion/styled';

export const ReviewSlide = styled.div`
  background-color: #fcf2cc82;
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-bottom: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    margin: 0;
    padding: 0 10px;
    font-size: 24px;
    color: #503f15;
  }
`;

export const ReviewPhrase = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #503f15;
  font-size: 14px;
  font-weight: bold;
`;

export const ReviewContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
`;

export const CountContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export const CommentCount = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: #bbb49e;
`;
