import Button from 'react-bootstrap/Button';

import { GoogleMaps } from 'components/google-map';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import { palaces } from '../config';
import { VirtualExcursions } from '..';

const markers = [
  {
    id: 0,
    name: 'Лидский замок',
    description:
      'Лидский замок единственный на территории Беларуси действующий замок-кастель. Он возведен в 1323 г. на слиянии рек Лидеи и Каменки Великим князем Литовским — Гедимином...',
    position: { lat: 53.887386255232414, lng: 25.302766370384226 },
  },
  {
    id: 1,
    name: 'Мирский замок',
    description:
      'Восстановленная крепость XVI века площадью 27 гектаров с музеем,рестораном и магазином сувениров.',
    position: { lat: 53.451307878203274, lng: 26.47293262728402 },
  },
  {
    id: 2,
    name: 'Дом-крепость Нонхартов',
    description:
      'Дом-крепость в Гайтюнишках – памятник оборонительного зодчества, уникальный исторический объект на территории Беларуси...',
    position: { lat: 54.251091559284255, lng: 25.43316986778768 },
  },
];

export const VirtualExcursionsPalaces = () => (
  <>
    <BackButton text='Назад к списку экскурсий' route='/virtual/' />

    <Title>Экскурсии по замкам Гродненской области</Title>
    <GoogleMaps center={{ lat: 54.15320407797462, lng: 25.319435879481013 }} markers={markers} />
    <div className='d-flex justify-content-center'>
      <Button className='mt-3' variant='warning' href='/virtual/palaces/quiz'>
        Пройти викторину
      </Button>
    </div>
    <VirtualExcursions excursions={palaces} />
  </>
);
