import { useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import panorama1 from '../../../images/panorama1.png';
import panorama2 from '../../../images/panorama2.png';
import panorama3 from '../../../images/panorama3.png';

const panoramasInVoronovo = [panorama1, panorama2, panorama3];

export const PanoramaVoronovo = () => {
  const photoSphereRef = useRef();

  const handleClick = () => {
    // @ts-ignore
    photoSphereRef.current?.animate({
      latitude: 0,
      longitude: 0,
      zoom: 25,
      speed: '10rpm',
    });
  };

  return (
    <>
      {panoramasInVoronovo.map((panorama) => (
        <div className='panoramas'>
          <ReactPhotoSphereViewer
            ref={photoSphereRef}
            container='div'
            src={panorama}
            width='640'
            height='240'
            defaultZoomLvl={10}
            onClick={handleClick}
          ></ReactPhotoSphereViewer>
        </div>
      ))}
    </>
  );
};
