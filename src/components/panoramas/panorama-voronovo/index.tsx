import { useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import styles from './styles.module.scss';

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
    <div className={styles.panorama}>
      <ReactPhotoSphereViewer
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        ref={photoSphereRef}
        container='div'
        src={panorama}
        width='640'
        height='240'
        defaultZoomLvl={10}
      />
    </div>
  );
};
