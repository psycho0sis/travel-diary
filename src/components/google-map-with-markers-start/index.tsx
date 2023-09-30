import { useState } from 'react';
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from '@react-google-maps/api';

import { Loader } from 'components/ui/loader';

import { ICoordinates, IMapProps } from './types';

import './styles.scss';

export const Map = ({ googleMapsApiKey, markers, zoom = 7, center }: IMapProps) => {
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
    <GoogleMap center={center} zoom={zoom} mapContainerClassName='map-container'>
      {markers.map(({ id, description, name, position }) => (
        <MarkerF
          key={id}
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
        </MarkerF>
      ))}
    </GoogleMap>
  );
};
