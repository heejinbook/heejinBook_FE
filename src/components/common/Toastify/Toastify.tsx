import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import styled from '@emotion/styled';
import IconSuccess from '../../../assets/svg/success.svg';
import IconFalse from '../../../assets/svg/false.svg';

type ToastifyOptions = {
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  autoClose: number;
  closeOnClick: boolean;
  hideProgressBar: boolean;
  icon?: ReactNode;
};

const defaultOption: ToastifyOptions = {
  position: 'top-right',
  autoClose: 1500,
  closeOnClick: true,
  hideProgressBar: true,
};

export const Toast = {
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultOption,
      ...options,
      icon: <img src={IconSuccess} />,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultOption,
      ...options,
      icon: <img src={IconFalse} />,
    });
  },
};

export const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  .Toastify__toast {
    background-color: #fcf2cc;
    color: #503f15;
  }
  .Toastify__toast--success {
    font-size: 16px;
    font-weight: bold;
  }
  .Toastify__toast--error {
    font-weight: bold;
    font-size: 16px;
  }
`;
