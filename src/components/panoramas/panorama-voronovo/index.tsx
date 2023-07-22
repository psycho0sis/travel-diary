import { useEffect, useRef } from 'react';
import { MarkersPlugin, ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import panorama1 from 'assets/panorama1.png';
import panorama2 from 'assets/panorama2.png';
import panorama3 from 'assets/panorama3.png';

import './styles.scss';

const panoramasInVoronovo = [
  { id: 0, img: panorama1, title: 'Могила 1' },
  { id: 1, img: panorama2, title: 'Могила 2' },
  { id: 2, img: panorama3, title: 'Могила 3' },
];

export const PanoramaVoronovo = () => {
  const handleReady = (instance: any) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);

    if (!markersPlugs) return;

    markersPlugs.addMarker({
      id: 'imageLayer2',
      imageLayer: 'drone.png',
      size: { width: 220, height: 220 },
      position: { yaw: '130.5deg', pitch: '-0.1deg' },
      tooltip: 'Image embedded in the scene',
    });

    markersPlugs.addEventListener('select-marker', () => {
      console.log('asd');
    });
  };

  const handleClick = (title: string) => {
    console.log(title);
  };

  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: 'image',
            position: { yaw: '0.33deg', pitch: '0.1deg' },
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/780px-Map_marker.svg.png?20150513095621',
            anchor: 'bottom center',
            size: { width: 32, height: 32 },
            tooltip: 'Братская могила',
          },
        ],
      },
    ],
  ];

  const photoSphereRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!photoSphereRef.current) {
      return;
    }

    photoSphereRef.current.animate({
      yaw: 0,
      pitch: 0,
      zoom: 55,
      speed: '10rpm',
    });
  }, [photoSphereRef]);

  return (
    <>
      {panoramasInVoronovo.map(({ id, img, title }) => (
        <div className='panoramas' key={id}>
          <ReactPhotoSphereViewer
            ref={photoSphereRef}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            plugins={plugins}
            onReady={handleReady}
            onClick={() => handleClick(title)}
            container='div'
            src={img}
            width='640'
            height='240'
            defaultZoomLvl={10}
          ></ReactPhotoSphereViewer>
        </div>
      ))}
    </>
  );
};
