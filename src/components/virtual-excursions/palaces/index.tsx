import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { GoogleMaps } from 'components/google-map';
import { markers } from 'components/google-map-with-markers-start/config';
import { Title } from 'components/ui/title';

import { palaces } from '../config';
import { VirtualExcursions } from '..';

import '../styles.scss';

export const VirtualExcursionsPalaces = () => (
  <>
    <Link className='excursion__back-btn' to='/virtual/'>
      Назад к списку экскурсий
    </Link>
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
