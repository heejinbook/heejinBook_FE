import styled from '@emotion/styled';

export const BookImage = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 1px 8px 8px 1px;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const BookTitle = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0 2px 0;
`;

export const BookAuthor = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 9px;
`;

export const ReviewPhraseContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
  p {
    display: flex;
    align-items: start;
    padding: 0;
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
  padding-top: 3px;
`;
