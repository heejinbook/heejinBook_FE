import styled from '@emotion/styled';

export const BookInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

export const BookInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding: 30px 0 30px 20px;
  border-bottom: 15px solid #fcf2cc82;
`;
export const BookImage = styled.img`
  width: 190px;
  height: 240px;
  border-radius: 1px 8px 8px 1px;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;

export const NoImage = styled.div`
  width: 190px;
  height: 240px;
  border-radius: 1px 8px 8px 1px;
  border: none;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const BookInfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const BestContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 60px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  img {
    width: 22px;
    height: 22px;
  }
  p {
    margin: 0 0 0 5px;
    font-size: 14px;
    font-weight: bold;
  }
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
`;
export const Reviewer = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #bbb49e;
`;
