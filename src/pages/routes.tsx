import { createBrowserRouter } from 'react-router-dom';
import { FirstPage } from './FirstPage/FirstPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage />,
  },
]);

export type RoutePath = '/';
