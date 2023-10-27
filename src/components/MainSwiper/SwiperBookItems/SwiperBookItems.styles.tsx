import styled from '@emotion/styled';

export const BookItemsContainer = styled.div`
  max-width: 900px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookImage = styled.img`
  max-width: 600px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  border-radius: 1px 8px 8px 1px;
  border: none;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
`;

export const BookItems = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BookInfo = styled.div`
  height: 100%;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
`;

export const BookTitle = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const BookAuthor = styled.div`
  font-size: 14px;
`;
