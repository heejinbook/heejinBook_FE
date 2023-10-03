import { createBrowserRouter } from 'react-router-dom';
import { FirstPage } from './FirstPage/FirstPage';
import { LogInPage } from './LogInPage/LogInPage';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { MainPage } from './MainPage/MainPage';
import { BookPage } from './BookPage/BookPage';

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
      ///:bookId
      {
        path: '/book',
        element: <BookPage />,
      },
    ],
  },
]);

export type RoutePath = '/' | '/login' | '/signup' | '/home' | '/book';
