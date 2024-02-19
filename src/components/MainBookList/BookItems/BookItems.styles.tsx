import styled from '@emotion/styled';

export const BookListItems = styled.div`
  width: 190px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
`;

export const BookImage = styled.img`
  width: 190px;
  height: 240px;
  border-radius: 1px 8px 8px 1px;
  border: none;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
`;

export const BookTitle = styled.div`
  width: 170px;
  font-size: 16px;
  font-weight: bold;
`;

export const BookAuthor = styled.div`
  width: 170px;
  font-size: 14px;
`;

export const ReviewerContainer = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ReviewerIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Reviewer = styled.p`
  font-size: 14px;
  margin: 0 3px 0 0;
`;

export const RatingIcon = styled(ReviewerIcon)``;
export const RatingPoint = styled(Reviewer)``;
