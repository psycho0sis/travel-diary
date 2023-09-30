import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/layout/layout';
import { Quiz } from 'components/quiz';
import { gravesQuizData, palacesQuizData } from 'components/quiz/config';
import {
  AvgustovskiyKanal,
  CertainStudentExcursions,
  ErrorPage,
  FirstGrave,
  Home,
  LidaPalace,
  Login,
  MirPalace,
  NunhartPalace,
  ParkBolteniki,
  ParkZhilibera,
  SecondGrave,
  Students,
  ThirdGrave,
  User,
  Virtual,
  VirtualExcursionGrodno,
  VirtualExcursionsPalaces,
  VirtualExcursionVoronovo
} from 'pages';

export const router = createBrowserRouter([
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
        element: <CertainStudentExcursions />,
      },
    ],
  },
]);
