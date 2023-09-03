import { IMarker } from './types';

export const markers: IMarker[] = [
  {
    id: 0,
    name: 'Лидский замок',
    description: '',
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
    description: '',
    position: { lat: 54.251091559284255, lng: 25.43316986778768 },
  },
  {
    id: 3,
    name: 'Парк Желибера',
    description: '',
    position: { lat: 53.68422236047142, lng: 23.83615516987072 },
  },
  {
    id: 4,
    name: 'Парк Больтеники',
    description: '',
    position: { lat: 53.871565508664695, lng: 23.699752062485505 },
  },
  {
    id: 5,
    name: 'Августовский канал',
    description: '',
    position: { lat: 53.91003045216171, lng: 23.334996047942216 },
  },
  {
    id: 6,
    name: 'Братские могилы',
    description: '',
    position: { lat: 54.1528522273665, lng: 25.318320076985017 },
  },
];

export const placesDictionary: Record<string, IMarker> = {
  Лида: markers[0],
  Мир: markers[1],
  Гайтюнишки: markers[2],
  'Парк Жилибера': markers[3],
  'Парк Больтеники': markers[4],
  'Августовский канал': markers[5],
  'Братские могилы': markers[6],
};
