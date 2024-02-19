import { Outlet } from 'react-router-dom';
import * as S from './MainLayout.styles';
import { Header } from '../common/Header/Header';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/localstorage';
import { localStorageKey } from '../../constants';

export type AlarmType = {
  nickname: string;
  reviewId: number;
  thumbnail: string;
  likedTime: string;
};

export function MainLayout() {
  const [alarmData, setAlarmData] = useState<AlarmType[]>([]);

  useEffect(() => {
    const userId = getItem(localStorageKey.userId);

    const eventSource = new EventSource(`http://3.37.130.182:8080/subscribe/${userId}`);

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
      const data = JSON.parse(event.data);
      setAlarmData((prevAlarmData) => [data, ...prevAlarmData]);
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
      <Header alarmData={alarmData} setAlarmData={setAlarmData} />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.MainLayoutContainer>
  );
}
