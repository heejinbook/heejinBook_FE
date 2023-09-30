import { createBrowserRouter } from 'react-router-dom';
import { FirstPage } from './FirstPage/FirstPage';
import { LogInPage } from './LogInPage/LogInPage';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <FirstPage />,
      },
      {
        path: '/login',
        element: <LogInPage />,
      },
    ],
  },
]);

export type RoutePath = '/';
