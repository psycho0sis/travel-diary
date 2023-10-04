import Button from 'react-bootstrap/Button';

import { GoogleMaps } from 'components/google-map';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import { VirtualExcursions } from '..';

import { markers, palacesConfig } from './config';

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
    <VirtualExcursions excursions={palacesConfig} />
  </>
);
