import styled from '@emotion/styled';

export const LibraryReviewContainer = styled.div``;

export const ReviewFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b9b19c;
    font-weight: bold;
  }
`;

export const LibraryReviewGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  padding: 15px 20px 0 20px;
  p {
    color: #b9b19c;
    font-weight: bold;
  }
`;
export const LibraryReview = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 20px, rgba(0, 0, 0, 0.04) 2px 2px 10px;
  cursor: pointer;
`;
export const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;
export const ReviewTitle = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 16px 0 2px 0;
  text-align: center;
`;

export const ReviewPhraseContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: start;
  p {
    display: flex;
    margin: 0 20px;
    font-size: 24px;
    color: #503f15;
  }
`;

export const ReviewPhrase = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding-top: 3px;
  padding-bottom: 36px;
`;

export const ReviewDelete = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  border-top: 1px solid #b9b19c9a;
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
