import { useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import './styles.scss';

export const PanoramaVoronovo = ({ panorama }: { panorama: string }) => {
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
      <div className='panoramas'>
        <ReactPhotoSphereViewer
          ref={photoSphereRef}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          container='div'
          src={panorama}
          width='640'
          height='240'
          defaultZoomLvl={10}
        />
      </div>
    </>
  );
};
