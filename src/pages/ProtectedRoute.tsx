import { Navigate } from 'react-router-dom';
import { localStorageKey } from '../constants';
import { getItem } from '../utils/localstorage';
import { PropsWithChildren } from 'react';
import { Toast } from '../components/common/Toastify/Toastify';

export function ProtectedRoute({ children }: PropsWithChildren) {
  const accessToken = getItem<string>(localStorageKey.accessToken);

  if (!accessToken) {
    Toast.error('로그인 후 이용 가능합니다');
    return <Navigate to={'/'} replace />;
  }
  return children;
}
