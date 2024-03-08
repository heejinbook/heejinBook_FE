import { css } from '@emotion/react';
import styled from '@emotion/styled';

const inputStyle = css`
  width: 100%;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #b9b19c;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus-within {
    border: 1px solid #503f15;
  }

  &.variant._outline {
    height: 30px;
    background-color: transparent;
    border: 1px solid #b9b19c;
    border-radius: 5px;
    &:focus-within {
      border: 2px solid #503f15;
    }
  }
  &.variant._underline {
    height: 30px;
    border-bottom: 1px solid #b9b19c;
    padding: 0;
    border: 0;
    border-radius: 0;
  }

  &.error {
    border-color: pink;
  }
`;

export const InputWrapper = styled.div<{
  error?: boolean;
  variant?: 'outline' | 'underline';
}>`
  ${inputStyle}
  margin-bottom:15px;
`;

export const InputContainer = styled.div`
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
  padding-left: 3px;
  padding-bottom: 3px;
`;

export const InputFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const RightSlot = styled.div`
  margin-right: 5px;
`;

export const Input = styled.input`
  width: 100%;
  overflow-wrap: break-word;
  outline: none;
  border: none;
  font: inherit;
  font-size: 16px;
  background-color: transparent;
  &::placeholder {
    width: 100%;
    color: #b9b19c;
    text-overflow: ellipsis;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  padding-left: 15px;
  color: pink;
  font-size: 12px;
`;
