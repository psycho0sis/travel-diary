import Alert from 'react-bootstrap/Alert';

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

  console.log(googleMapsApiKey);

  if (googleMapsApiKey === undefined) {
    return (
      <Alert className='mt-3' variant='danger'>
        Ой..что-то случилось с картой.
      </Alert>
    );
  }
  return <Map center={center} googleMapsApiKey={googleMapsApiKey} markers={markers} zoom={zoom} />;
};
