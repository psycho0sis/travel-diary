import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/home';
import { Virtual } from 'pages/virtual';
import { Profile } from 'pages/profile';

import './styles.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/adventures',
    element: <div>Путешествия</div>,
  },
  {
    path: '/virtual',
    element: <Virtual />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
