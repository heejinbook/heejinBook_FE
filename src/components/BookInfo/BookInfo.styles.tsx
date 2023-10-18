import styled from '@emotion/styled';

export const BookInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: flex-start;
  padding: 30px 0 30px 20px;
  border-bottom: 15px solid #fcf2cc82;
`;

export const BookInfo = styled.div`
  display: flex;
  align-items: start;
`;
export const BookImage = styled.img`
  border-radius: 1px 8px 8px 1px;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;
export const BookInfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const BookTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;
export const BookAuthor = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const ReviewerContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ReviewerIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  content: url('src/assets/svg/person.svg');
`;
export const Reviewer = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #bbb49e;
`;
