import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/layout/layout';
import { Quiz } from 'components/quiz';
import { gravesQuizData, palacesQuizData } from 'components/quiz/config';
import { grodnoConfig } from 'components/virtual-excursions/grodno/config';
import { Excursion } from 'components/virtual-excursions/palaces/components/excursion';
import { palacesConfig } from 'components/virtual-excursions/palaces/config';
import { ExcursionVoronovo } from 'components/virtual-excursions/voronovo/components/excursion';
import { gravesConfig } from 'components/virtual-excursions/voronovo/config';
import {
  CertainStudentExcursions,
  ErrorPage,
  Home,
  Login,
  Students,
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
        path: '/virtual/grodno/avgustovskiy-kanal',
        element: <Excursion data={grodnoConfig[0]} />,
      },
      {
        path: '/virtual/grodno/park-zhilibera',
        element: <Excursion data={grodnoConfig[1]} />,
      },
      {
        path: '/virtual/grodno/park-bolteniki',
        element: <Excursion data={grodnoConfig[2]} />,
      },
      {
        path: '/virtual/voronovo/first-grave',
        element: <ExcursionVoronovo data={gravesConfig[0]} />,
      },
      {
        path: '/virtual/voronovo/second-grave',
        element: <ExcursionVoronovo data={gravesConfig[1]} />,
      },
      {
        path: '/virtual/voronovo/third-grave',
        element: <ExcursionVoronovo data={gravesConfig[2]} />,
      },
      {
        path: '/virtual/palaces',
        element: <VirtualExcursionsPalaces />,
      },
      {
        path: '/virtual/palaces/mir',
        element: <Excursion data={palacesConfig[0]} />,
      },
      {
        path: '/virtual/palaces/lida',
        element: <Excursion data={palacesConfig[1]} />,
      },
      {
        path: '/virtual/palaces/nunhart',
        element: <Excursion data={palacesConfig[2]} />,
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
