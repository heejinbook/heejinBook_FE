import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './components/GlobalStyle.tsx';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toast } from './components/common/Toastify/Toastify.tsx';

const loginError = () => {
  Toast.error('로그인 후 이용해주세요');
  localStorage.clear();
  setTimeout(() => {
    window.location.href = '/login';
  }, 1500);
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: loginError,
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <GlobalStyle />
  </QueryClientProvider>,
);
