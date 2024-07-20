import { GoogleMaps } from 'components/google-map';
import { BackButton } from 'components/ui/back-button';
import { ButtonLink } from 'components/ui/button-link';
import { Title } from 'components/ui/title';
import { DEFAULT_MAPS_POSITION } from 'constants/index';

import { VirtualExcursions } from '..';

import { markers, palacesConfig } from './config';

export const VirtualExcursionsPalaces = () => (
  <>
    <BackButton text='Назад к списку экскурсий' route='/virtual/' />

    <Title>Экскурсии по замкам Гродненской области</Title>
    <GoogleMaps center={DEFAULT_MAPS_POSITION} markers={markers} />
    <div className='d-flex justify-content-center'>
      <ButtonLink
        className='mt-3'
        variant='dark'
        href='/virtual/palaces/quiz'
        text='Пройти викторину'
      />
    </div>
    <VirtualExcursions excursions={palacesConfig} />
  </>
);
