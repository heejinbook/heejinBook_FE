import styled from '@emotion/styled';

export const LibraryBarContainer = styled.div`
  width: 100%;
  margin-top: 10px;
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
    margin: 0 0 5px 15px;
    &:active {
      font-weight: bolder;
      border-bottom: 3px solid #503f15;
    }
  }
`;
