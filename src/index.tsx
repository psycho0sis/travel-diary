import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'pages/error';
import { Excursions } from 'pages/excursions';
import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { Students } from 'pages/students';
import { User } from 'pages/user';
import { Virtual } from 'pages/virtual';

import { Layout } from 'components/layout/layout';
import { Quiz } from 'components/quiz';
import { gravesQuizData, palacesQuizData } from 'components/quiz/config';
import { VirtualExcursionGrodno } from 'components/virtual-excursions/grodno';
import { AvgustovskiyKanal } from 'components/virtual-excursions/grodno/avgustovsckiy-kanal';
import { ParkBolteniki } from 'components/virtual-excursions/grodno/park-bolteniki';
import { ParkZhilibera } from 'components/virtual-excursions/grodno/park-zhilibera';
import { VirtualExcursionsPalaces } from 'components/virtual-excursions/palaces';
import { LidaPalace } from 'components/virtual-excursions/palaces/lida';
import { MirPalace } from 'components/virtual-excursions/palaces/mir';
import { NunhartPalace } from 'components/virtual-excursions/palaces/nunhart';
import { VirtualExcursionVoronovo } from 'components/virtual-excursions/voronovo';
import { FirstGrave } from 'components/virtual-excursions/voronovo/1';
import { SecondGrave } from 'components/virtual-excursions/voronovo/2';
import { ThirdGrave } from 'components/virtual-excursions/voronovo/3';

import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
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
        path: '/virtual/grodno',
        element: <VirtualExcursionGrodno />,
      },
      {
        path: '/virtual/grodno/park-zhilibera',
        element: <ParkZhilibera />,
      },
      {
        path: '/virtual/grodno/park-bolteniki',
        element: <ParkBolteniki />,
      },
      {
        path: '/virtual/grodno/avgustovskiy-kanal',
        element: <AvgustovskiyKanal />,
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
      {
        path: '/students/:id',
        element: <Excursions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
