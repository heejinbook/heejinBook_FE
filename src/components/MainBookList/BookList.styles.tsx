import styled from '@emotion/styled';

export const BookListContainer = styled.div``;

export const BookList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
`;
export const BookListItems = styled.div`
  width: 170px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
`;
export const BookImage = styled.img`
  width: 170px;
  height: 220px;
  border-radius: 1px 8px 8px 1px;
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
