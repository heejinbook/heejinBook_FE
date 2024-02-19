import styled from '@emotion/styled';

export const ReviewFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const ReviewCount = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b9b19c;
  font-weight: bold;
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  padding: 15px 20px 0 20px;
`;

export const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    gap: 10px;

    li {
      list-style: none;
      width: 30px;
      font-size: 16px;

      &:first-of-type,
      &:last-child,
      &:nth-of-type(2),
      &:nth-last-of-type(2) {
        font-size: 20px;
      }

      a {
        text-decoration-line: none;
        color: #b9b19c;

        &:hover,
        &:active,
        &.active {
          color: #503f15;
          font-weight: bold;
        }
      }
      &.active a {
        color: #503f15;
        font-weight: bold;
      }
    }
  }
`;
