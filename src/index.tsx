import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'pages/error';
import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { User } from 'pages/user';
import { Virtual } from 'pages/virtual';

import { Layout } from 'components/layout/layout';
import { VirtualExcursionsPalaces } from 'components/virtual-excursions/palaces';
import { VirtualExcursionVoronovo } from 'components/virtual-excursions/voronovo';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: '/virtual/voronovo',
        element: <VirtualExcursionVoronovo />,
      },
      {
        path: '/virtual/palaces',
        element: <VirtualExcursionsPalaces />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
