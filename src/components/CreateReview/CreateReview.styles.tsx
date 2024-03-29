import styled from '@emotion/styled';

export type CreateRContainer = {
  reviewModal: boolean;
};

export const CreateRContainer = styled.div<CreateRContainer>`
  background-color: ${({ reviewModal }) => (reviewModal ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  z-index: ${({ reviewModal }) => (reviewModal ? '999' : '-1')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CreateRModal = styled.div<CreateRContainer>`
  max-width: 800px;
  min-width: 550px;
  display: ${({ reviewModal }) => (reviewModal ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  border-radius: 10px;
  padding: 30px 50px;
  max-height: 900px;
  overflow: scroll;
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

export const RefreshBtn = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;
