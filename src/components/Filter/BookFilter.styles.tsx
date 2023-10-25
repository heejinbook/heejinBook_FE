import styled from '@emotion/styled';

export const Filter = styled.div`
  height: 30px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    padding-top: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #503f15;
  }
`;

export const FilterList = styled.div`
  background-color: #fffdf6;
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #503f15;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    width: 100%;
    height: 20px;
    color: #503f15;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 14px;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 0;
    border-bottom: 1px solid #503f15;
    &:last-child {
      border: none;
    }
  }
`;
