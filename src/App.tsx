import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { router } from './pages/routes';
import { StyledToastContainer } from './components/common/Toastify/Toastify';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
      <StyledToastContainer limit={1} />
    </RecoilRoot>
  );
}

export default App;
