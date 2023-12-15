import styled from '@emotion/styled';

export const BookItemsContainer = styled.div`
  max-width: 900px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookImage = styled.img`
  max-width: 600px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px 8px 8px 1px;
  z-index: 990;
  border: none;
  box-shadow: 8px 0px 8px -5px rgba(0, 0, 0, 0.5);
`;

export const BookItems = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BookInfo = styled.div`
  height: 100%;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 50px 10px;
`;

export const Best = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  width: 60px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 60px;
  background-color: #fcf2cc;
  color: #503f15;
  font-size: 16px;
  p {
    font-size: 14px;
    margin: 0;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }
`;

export const BookTitle = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const BookAuthor = styled.div`
  font-size: 14px;
`;
