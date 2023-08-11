import { useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from '@react-google-maps/api';

import { markers } from './config';
import { ICoordinates, IMapProps } from './types';

import './styles.scss';

export const Map = ({ googleMapsApiKey }: IMapProps) => {
  const center = useMemo(() => ({ lat: 54.15320407797462, lng: 25.319435879481013 }), []);
  const [selectedMarker, setSelectedMarker] = useState<ICoordinates | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap center={center} zoom={7} mapContainerClassName='map-container'>
      {markers.map(({ id, img, description, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => {
            setSelectedMarker(position);
          }}
        >
          {selectedMarker === position && (
            <InfoWindow
              ref={ref}
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
              position={position}
              zIndex={9999}
              options={{ minWidth: 600 }}
            >
              <div>
                {img && <img src={img} alt='' />}
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </InfoWindow>
          )}
        </MarkerF>
      ))}
    </GoogleMap>
  );
};
