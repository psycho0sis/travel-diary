import { GoogleMaps } from 'components/google-map';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import { VirtualExcursions } from '..';

import { grodnoConfig, markers } from './config';

export const VirtualExcursionGrodno = () => (
  <>
    <BackButton text='Назад к списку экскурсий' route='/virtual/' level={-1} />

    <Title>Экскурсии по Гродненской области</Title>
    <div className='excursion__map-wrapper'>
      <GoogleMaps
        center={{ lat: 53.78422236047142, lng: 23.73615516987072 }}
        markers={markers}
        zoom={9}
      />
    </div>
    <VirtualExcursions excursions={grodnoConfig} />
  </>
);
