import { IMarker } from 'components/google-map-with-markers-start/types';

export interface IGoogleMaps {
  center: { lat: number; lng: number };
  markers: IMarker[];
  zoom?: number;
}
