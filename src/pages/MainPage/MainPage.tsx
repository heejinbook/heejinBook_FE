import { useLocation } from 'react-router-dom';
import { BookList } from '../../components/MainBookList/BookList';
import { MainPageSwiper } from '../../components/MainSwiper/MainPageSwiper';
import * as S from './MainPage.styles';
import { useEffect } from 'react';

export function MainPage() {
  // const location = useLocation();

  // useEffect(() => {
  //   const state = location.state as { id: number };

  //   const eventSource = new EventSource(`http://43.200.172.180:8080/subscribe/${state.id}`);

  //   eventSource.onopen = async () => {
  //     await console.log('sse opened!');
  //   };

  //   eventSource.onmessage = (e) => {
  //     console.log('이벤트 없는 메시지!');
  //   };

  //   eventSource.addEventListener('sse', (event) => {
  //     console.log('Received SSE event:', event.data);
  //   });

  //   eventSource.addEventListener('like', (event) => {
  //     console.log('Received SSE event:', event.data + ' 리뷰에 좋아요가 달렸습니다');
  //   });

  //   eventSource.onerror = async (e) => {
  //     await console.log(e);
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  return (
    <S.MainPageContainer>
      <S.MainPage>
        <S.MainSwiperContainer>
          <MainPageSwiper />
        </S.MainSwiperContainer>
        <BookList />
      </S.MainPage>
    </S.MainPageContainer>
  );
}
