export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IMarker {
  id: number;
  img?: string;
  description: string;
  name: string;
  position: ICoordinates;
}

export interface IMapProps {
  center: { lat: number; lng: number };
  googleMapsApiKey: string;
  markers: IMarker[];
  zoom?: number;
}
