import { placesDictionary } from 'components/google-map-with-markers-start/config';
import { IExcursion } from 'hooks/types';

export const createMarkers = (data: IExcursion[]) =>
  data?.map((item) => item.excursion.split('-')[1]).map((item) => placesDictionary[item]);
