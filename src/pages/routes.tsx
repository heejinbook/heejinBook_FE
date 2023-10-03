import { createBrowserRouter } from 'react-router-dom';
import { FirstPage } from './FirstPage/FirstPage';
import { LogInPage } from './LogInPage/LogInPage';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { MainPage } from './MainPage/MainPage';
import { MyLibraryPage } from './MyLibraryPage/MyLibraryPage';

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
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/home',
        element: <MainPage />,
      },
      {
        path: '/myLibrary',
        element: <MyLibraryPage />,
      },
    ],
  },
]);

export type RoutePath = '/' | '/login' | '/signup' | '/home' | '/myLibrary';
