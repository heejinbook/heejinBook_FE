import styled from '@emotion/styled';

export const BookListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const SearchNFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BookItemsContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
  padding: 0 20px;
`;

export const PaginationWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  .pagination {
    display: flex;
    justify-content: center;
    align-items: end;
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

export const NoSearchedBook = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #503f15;
`;
