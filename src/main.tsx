import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './components/GlobalStyle.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
