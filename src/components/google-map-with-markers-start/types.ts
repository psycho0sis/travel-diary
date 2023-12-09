export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IMarker {
  id?: number;
  description: string;
  name?: string;
  position: ICoordinates;
}

export interface IMapProps {
  center: ICoordinates;
  googleMapsApiKey: string;
  markers: IMarker[];
  zoom?: number;
}
