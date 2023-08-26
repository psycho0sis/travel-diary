import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'pages/error';
import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { Students } from 'pages/students';
import { User } from 'pages/user';
import { Virtual } from 'pages/virtual';

import { Layout } from 'components/layout/layout';
import { Quiz } from 'components/quiz';
import { gravesQuizData, palacesQuizData } from 'components/quiz/config';
import { VirtualExcursionsPalaces } from 'components/virtual-excursions/palaces';
import { LidaPalace } from 'components/virtual-excursions/palaces/lida';
import { MirPalace } from 'components/virtual-excursions/palaces/mir';
import { NunhartPalace } from 'components/virtual-excursions/palaces/nunhart';
import { VirtualExcursionVoronovo } from 'components/virtual-excursions/voronovo';
import { FirstGrave } from 'components/virtual-excursions/voronovo/1';
import { SecondGrave } from 'components/virtual-excursions/voronovo/2';
import { ThirdGrave } from 'components/virtual-excursions/voronovo/3';

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
        path: '/virtual',
        element: <Virtual />,
      },
      {
        path: '/virtual/voronovo',
        element: <VirtualExcursionVoronovo />,
      },
      {
        path: '/virtual/voronovo/first-grave',
        element: <FirstGrave />,
      },
      {
        path: '/virtual/voronovo/second-grave',
        element: <SecondGrave />,
      },
      {
        path: '/virtual/voronovo/third-grave',
        element: <ThirdGrave />,
      },
      {
        path: '/virtual/palaces',
        element: <VirtualExcursionsPalaces />,
      },
      {
        path: '/virtual/palaces/mir',
        element: <MirPalace />,
      },
      {
        path: '/virtual/palaces/lida',
        element: <LidaPalace />,
      },
      {
        path: '/virtual/palaces/nunhart',
        element: <NunhartPalace />,
      },
      {
        path: '/virtual/palaces/quiz',
        element: <Quiz data={palacesQuizData} />,
      },
      {
        path: '/virtual/voronovo/quiz',
        element: <Quiz data={gravesQuizData} />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
