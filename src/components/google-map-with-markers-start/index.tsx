import { useEffect, useRef, useState } from 'react';
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from '@react-google-maps/api';

import { ICoordinates, IMapProps } from './types';

import './styles.scss';

export const Map = ({ googleMapsApiKey, markers, zoom = 7, center }: IMapProps) => {
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
    <GoogleMap center={center} zoom={zoom} mapContainerClassName='map-container'>
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
              options={{ maxWidth: 300 }}
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
