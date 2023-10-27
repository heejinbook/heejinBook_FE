import { Outlet } from 'react-router-dom';
import * as S from './MainLayout.styles';
import { Header } from '../common/Header/Header';
import { useEffect } from 'react';
import { getItem } from '../../utils/localstorage';
import { localStorageKey } from '../../constants';

export function MainLayout() {
  useEffect(() => {
    const userId = getItem(localStorageKey.userId);

    const eventSource = new EventSource(`http://43.200.172.180:8080/subscribe/${userId}`);

    eventSource.onopen = async () => {
      await console.log('sse opened!');
    };

    eventSource.onmessage = (e) => {
      console.log('이벤트 없는 메시지!');
    };

    eventSource.addEventListener('sse', (event) => {
      console.log('Received SSE event:', event.data);
    });

    eventSource.addEventListener('like', (event) => {
      console.log('Received SSE event:', event.data + ' 리뷰에 좋아요가 달렸습니다');
    });

    eventSource.onerror = async (e) => {
      await console.log(e);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <S.MainLayoutContainer>
      <Header />
      <Outlet />
    </S.MainLayoutContainer>
  );
}
