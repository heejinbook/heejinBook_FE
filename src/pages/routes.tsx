import { createBrowserRouter } from 'react-router-dom';
import { FirstPage } from './FirstPage/FirstPage';
import { LogInPage } from './LogInPage/LogInPage';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { MainPage } from './MainPage/MainPage';
import { MyLibraryPage } from './MyLibraryPage/MyLibraryPage';
import { BookPage } from './BookPage/BookPage';
import { Kakao } from '../components/Kakao/Kakao';
import { SignLayout } from '../components/SignLayout/SignLayout';

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
        path: '/kakao',
        element: <Kakao />,
      },
      {
        path: 'main',
        element: <SignLayout />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: 'myLibrary',
            element: <MyLibraryPage />,
          },
          {
            path: 'books/:bookId',
            element: <BookPage />,
          },
        ],
      },
    ],
  },
]);

export type RoutePath =
  | '/'
  | '/login'
  | '/signup'
  | '/home'
  | '/books/:bookId'
  | '/myLibrary'
  | '/kakao';
