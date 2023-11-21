import styled from '@emotion/styled';

type EditModal = {
  editModal: boolean;
};

export const EditModalContainer = styled.div<EditModal>`
  background-color: ${({ editModal }) => (editModal ? 'rgba(0, 0, 0, 0.8)' : 'none')};
  z-index: ${({ editModal }) => (editModal ? '999' : '-1')};
  display: ${({ editModal }) => (editModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const EditModal = styled.div<EditModal>`
  width: 300px;
  height: 200px;
  display: ${({ editModal }) => (editModal ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  border-radius: 10px;
`;

export const XContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    padding: 10px 10px 0 0;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;

export const CurrentNickname = styled.p`
  padding-left: 20px;
  margin: 0;
  font-size: 12px;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  button {
    cursor: pointer;
    width: 260px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 14px;
    font-weight: bold;
  }
`;
