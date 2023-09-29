import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { router } from './pages/routes';

function App() {
  return (
    <RecoilRoot>
      <div>aaa</div>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
