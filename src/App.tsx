import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes';
import { StyledToastContainer } from './components/common/Toastify/Toastify';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <RouterProvider router={router} />
      <StyledToastContainer limit={1} />
    </RecoilRoot>
  );
}

export default App;
