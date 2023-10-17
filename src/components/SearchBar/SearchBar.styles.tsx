import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const SearchIconContainer = styled.div``;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  width: 250px;
`;

export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  border-bottom: 2px solid #b9b19c;
  background-color: transparent;
  &:focus {
    outline: none;
    border-bottom: 2px solid #503f15;
  }
`;
