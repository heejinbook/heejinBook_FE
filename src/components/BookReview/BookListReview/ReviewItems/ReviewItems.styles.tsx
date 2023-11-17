import styled from '@emotion/styled';

export const LibraryReview = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 20px, rgba(0, 0, 0, 0.04) 2px 2px 10px;
  cursor: pointer;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

export const ReviewTitle = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 16px 0 2px 0;
  text-align: center;
`;

export const ReviewPhraseContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: start;
  p {
    display: flex;
    margin: 0 20px;
    font-size: 24px;
    color: #503f15;
  }
`;

export const ReviewPhrase = styled.div`
  width: auto;
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
`;

export const HeartContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px 10px 0;
`;
