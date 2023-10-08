import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  z-index: 999;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background-color: #fffdf6;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #b9b19c9a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #b9b19c9a;
    color: #503f15;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: end;
`;
export const GoToLibrary = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #503f15;
`;
export const BtnContainer = styled.div``;
export const Logo = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #503f15;
  margin-right: 10px;
`;
