import { Map } from 'components/google-map-with-markers-start';
import { IMarker } from 'components/google-map-with-markers-start/types';

export const GoogleMaps = ({
  center,
  markers,
  zoom,
}: {
  center: { lat: number; lng: number };
  markers: IMarker[];
  zoom?: number;
}) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  if (googleMapsApiKey === undefined) {
    return <div>Error</div>;
  }
  return <Map center={center} googleMapsApiKey={googleMapsApiKey} markers={markers} zoom={zoom} />;
};
