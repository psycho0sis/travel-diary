import { Link } from 'react-router-dom';

import { GoogleMaps } from 'components/google-map';
import { IMarker } from 'components/google-map-with-markers-start/types';
import { Title } from 'components/ui/title';

import { grodno } from '../config';
import { VirtualExcursions } from '..';

export const markers: IMarker[] = [
  {
    id: 0,
    name: 'Парк Желибера',
    description: '',
    position: { lat: 53.68422236047142, lng: 23.83615516987072 },
  },
  {
    id: 1,
    name: 'Парк Больтеники',
    description: '',
    position: { lat: 53.871565508664695, lng: 23.699752062485505 },
  },
  {
    id: 2,
    name: 'Августовский канал',
    description: '',
    position: { lat: 53.91003045216171, lng: 23.334996047942216 },
  },
];

export const VirtualExcursionGrodno = () => {
  return (
    <>
      <Link className='excursion__back-btn' to='/virtual/'>
        Назад к списку экскурсий
      </Link>
      <Title>Экскурсии по Гродненской области</Title>
      <div className='excursion__map-wrapper'>
        <GoogleMaps
          center={{ lat: 53.78422236047142, lng: 23.73615516987072 }}
          markers={markers}
          zoom={9}
        />
      </div>
      <VirtualExcursions excursions={grodno} />
    </>
  );
};