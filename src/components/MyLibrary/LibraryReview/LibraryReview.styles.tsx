import styled from '@emotion/styled';

export const LibraryReviewContainer = styled.div`
  padding-bottom: 30px;
  p {
    padding: 0 0 0 20px;
    color: #b9b19c;
    font-weight: bold;
  }
`;

export const LibraryReviewGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  padding: 0 20px;
  p {
    color: #b9b19c;
    font-weight: bold;
  }
`;
export const LibraryReview = styled.div`
  max-width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 20px, rgba(0, 0, 0, 0.04) 2px 2px 10px;
`;

export const ReviewDeleteNEdit = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 12px 0;
  border-top: 1px solid #b9b19c9a;
  p {
    margin: 0 40px;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NoReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  p {
    text-align: center;
  }
`;
