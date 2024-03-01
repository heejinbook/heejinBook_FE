import styled from '@emotion/styled';

export const TextareaWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #b9b19c;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const TextareaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TopSlot = styled.div`
  font: inherit;
  font-weight: bold;
  font-size: 14px;
  color: #503f15;
  padding-left: 6px;
  padding-bottom: 3px;
`;

export const TextareaFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const RightSlot = styled.div`
  margin-right: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  overflow-wrap: break-word;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  &::placeholder {
    width: 100%;
    color: #b9b19c;
    text-overflow: ellipsis;
  }
`;
