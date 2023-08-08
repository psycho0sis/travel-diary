import { useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import firstPanorama from 'assets/panorama1.png';
import secondPanorama from 'assets/panorama2.png';
import thirdPanorama from 'assets/panorama3.png';

const panoramas = [firstPanorama, secondPanorama, thirdPanorama];

import './styles.scss';

export const PanoramaVoronovo = ({ index }: { index: number }) => {
  const photoSphereRef = useRef<HTMLDivElement>();
  const currentIndex = index + 1;

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
          src={panoramas[currentIndex]}
          width='640'
          height='240'
          defaultZoomLvl={10}
        />
      </div>
    </>
  );
};
