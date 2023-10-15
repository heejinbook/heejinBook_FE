import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
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
  background-color: transparent;
  &:focus {
    outline: none;
    border-bottom: 2px solid #503f15;
  }
`;
