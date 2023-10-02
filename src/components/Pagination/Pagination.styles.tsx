import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    margin-right: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #b9b19c;
    cursor: pointer;
    &:active {
      color: #503f15;
    }
  }
`;
