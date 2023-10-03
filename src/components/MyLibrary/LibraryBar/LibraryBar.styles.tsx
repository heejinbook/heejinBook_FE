import styled from '@emotion/styled';

export const LibraryBarContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 10px 20px;
`;
export const LibraryBar = styled.div`
  display: flex;
  align-items: start;
  margin: 0;

  p {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #503f15;
    padding-bottom: 5px;
    margin: 0 15px 0 0;
    &:active {
      font-weight: bolder;
      border-bottom: 3px solid #503f15;
    }
  }
`;
