import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Profile } from 'pages/profile';
import { Virtual } from 'pages/virtual';

import { Home } from './pages/home';

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
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
