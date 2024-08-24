import { type FC, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';

import { Loader } from 'components/ui/loader';

import type { ICoordinates, IMapProps } from './types';

import styles from './styles.module.scss';

export const Map: FC<IMapProps> = ({ googleMapsApiKey, markers, zoom = 7, center }) => {
  const [selectedMarker, setSelectedMarker] = useState<ICoordinates | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <GoogleMap center={center} zoom={zoom} mapContainerClassName={styles.mapContainer}>
      {markers.map(({ description, name, position }, index) => (
        <Marker
          key={`${name}-${index}`}
          position={position}
          onClick={() => {
            setSelectedMarker(position);
          }}
        >
          {selectedMarker === position && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
              position={position}
              zIndex={9}
              options={{ maxWidth: 300 }}
            >
              <div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};
