import styled from '@emotion/styled';

type Modal = {
  modalOpen: boolean;
};

export const DeleteModalContainer = styled.div<Modal>`
  background-color: ${({ modalOpen }) => (modalOpen ? 'rgba(0, 0, 0, 0.2)' : 'none')};
  z-index: ${({ modalOpen }) => (modalOpen ? '999' : '-1')};
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DeleteModal = styled.div<Modal>`
  width: 400px;
  height: auto;
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  border-radius: 10px;
  box-sizing: border-box;
  p {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0;
    color: #503f15 !important;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  padding: 10px 40px;
  border: none;
  border-radius: 0 0 0 10px;
  background-color: #d5cfbf;
  color: #503f15;
  font-size: 16px;
  font-weight: bold;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  padding: 10px 40px;
  border: none;
  border-radius: 0 0 10px 0;
  background-color: #fcf2cc;
  color: #503f15;
  font-size: 16px;
  font-weight: bold;
`;
