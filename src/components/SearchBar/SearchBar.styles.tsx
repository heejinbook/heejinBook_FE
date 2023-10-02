import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchBar = styled.div`
  width: 500px;
  display: flex;
  justify-items: flex-end;
  align-items: center;
  margin-top: 12px;
`;
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  height: 24px;
  border: none;
  border-bottom: 2px solid #b9b19c;
  &:focus {
    border-bottom: 2px solid #503f15;
  }
`;

export const FilterContainer = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  top: 41%;
  right: 0;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #503f15;
  p {
    cursor: pointer;
    margin-right: 7px;
  }
`;
