import styled from '@emotion/styled';

export const LibraryListContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  p {
    padding-left: 20px;
    color: #b9b19c;
    font-weight: bold;
  }
`;

export const LibraryList = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
  padding: 0 20px;
`;
export const LibraryListItems = styled.div`
  width: 170px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const LibraryDelete = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const LibraryImage = styled.img`
  width: 170px;
  height: 220px;
  border-radius: 1px 8px 8px 1px;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
`;

export const NoImage = styled.div`
  width: 170px;
  height: 220px;
  border-radius: 1px 8px 8px 1px;
  border: none;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
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

export const NoBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 257px;
  p {
    padding: 0;
    margin: 16px 0;
    font-size: 20px;
    font-weight: bold;
    color: #b9b19c;
    text-align: center;
  }
`;
