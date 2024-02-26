import { RouterProvider } from 'react-router-dom';

import { router } from './pages/routes';
import { StyledToastContainer } from './components/common/Toastify/Toastify';

function App() {
  return (
    <>
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <RouterProvider router={router} />
      <StyledToastContainer limit={1} />
    </>
  );
}

export default App;
