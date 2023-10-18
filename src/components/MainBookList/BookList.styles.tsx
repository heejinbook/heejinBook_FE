import styled from '@emotion/styled';

export const Search = styled.div`
  height: auto;
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

export const BookListContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
  padding: 0 20px;
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
  border: none;
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

export const ReviewerContainer = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ReviewerIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Reviewer = styled.div`
  width: 170px;
  font-size: 14px;
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

      &:first-child,
      &:last-child,
      &:nth-child(2),
      &:nth-last-child(2) {
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
