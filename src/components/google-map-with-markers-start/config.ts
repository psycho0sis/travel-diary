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
];

export const palacesDictionary: Record<string, IMarker> = {
  Лида: markers[0],
  Мир: markers[1],
  Гайтюнишки: markers[2],
};
