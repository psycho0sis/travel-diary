import type { FC } from 'react';

import { Map } from 'components/google-map-with-markers-start';
import { CustomAlert } from 'components/ui/alert';

import type { IGoogleMaps } from './types';

export const GoogleMaps: FC<IGoogleMaps> = ({ center, markers, zoom }) => {
  const googleMapsApiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

  if (googleMapsApiKey === undefined) {
    return <CustomAlert isShown={googleMapsApiKey === undefined} text='API-ключ не найден' />;
  }
  return (
    <>
      <Map center={center} googleMapsApiKey={googleMapsApiKey} markers={markers} zoom={zoom} />
    </>
  );
};
