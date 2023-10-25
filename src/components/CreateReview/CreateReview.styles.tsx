import styled from '@emotion/styled';

export type CreateRContainer = {
  reviewModal: boolean;
};

export const CreateRContainer = styled.div<CreateRContainer>`
  background-color: ${({ reviewModal }) => (reviewModal ? 'rgba(0, 0, 0, 0.8)' : 'none')};
  z-index: ${({ reviewModal }) => (reviewModal ? '999' : '-1')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const CreateRModal = styled.div<CreateRContainer>`
  max-width: 800px;
  height: auto;
  display: ${({ reviewModal }) => (reviewModal ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  border-radius: 10px;
  padding: 20px 50px;
`;

export const XContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
    margin-bottom: 5px;
  }
`;

export const InputContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WriteBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    cursor: pointer;
    width: 150px;
    height: 50px;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;
