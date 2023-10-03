import styled from '@emotion/styled';

export const LibraryListContainer = styled.div``;

export const LibraryList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
`;
export const LibraryListItems = styled.div`
  width: 170px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
`;
export const LibraryImage = styled.img`
  width: 170px;
  height: 220px;
  border-radius: 1px 8px 8px 1px;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
`;
export const LibraryTitle = styled.div`
  width: 170px;
  font-size: 16px;
  font-weight: bold;
`;
export const LibraryAuthor = styled.div`
  width: 170px;
  font-size: 14px;
`;
