import { useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from '@react-google-maps/api';

import './styles.scss';

type Coordinates = {
  lat: number;
  lng: number;
};

interface IMarker {
  id: number;
  img?: string;
  description: string;
  name: string;
  position: Coordinates;
}

type MapProps = {
  googleMapsApiKey: string;
};

const markers: IMarker[] = [
  {
    id: 1,
    name: 'Вороново',
    description: 'Клевый город',
    position: { lat: 54.15320407797462, lng: 25.319435879481013 },
  },
  {
    id: 2,
    name: 'Несвижский замок',
    description: '',
    position: { lat: 53.22275736291677, lng: 26.692354063683595 },
  },
  {
    id: 3,
    img: 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',
    name: 'Мирский замок',
    description:
      'Восстановленная крепость XVI века площадью 27 гектаров с музеем,рестораном и магазином сувениров.',
    position: { lat: 53.451307878203274, lng: 26.47293262728402 },
  },
  {
    id: 4,
    name: 'Дом-крепость Нонхартов',
    description: '',
    position: { lat: 54.251091559284255, lng: 25.43316986778768 },
  },
];

export const Map = ({ googleMapsApiKey }: MapProps) => {
  const center = useMemo(() => ({ lat: 54.15320407797462, lng: 25.319435879481013 }), []);
  const [selectedMarker, setSelectedMarker] = useState<Coordinates | null>(null);
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
