import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

import panorama1 from '../../../images/panorama1.png';
import panorama2 from '../../../images/panorama2.png';
import panorama3 from '../../../images/panorama3.png';

const panoramasInVoronovo = [panorama1, panorama2, panorama3];

export const PanoramasSlider = () => {
  const photoSphereRef = useRef();

  //   const handleClick = () => {
  //     photoSphereRef.current?.animate({
  //       latitude: 0,
  //       longitude: 0,
  //       zoom: 25,
  //       speed: '10rpm',
  //     });
  //   };

  return (
    <Swiper
      loop
      slidesPerView={1}
      navigation
      pagination={{
        type: 'progressbar',
      }}
      allowTouchMove={false}
      className='mySwiper'
      modules={[Pagination, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {panoramasInVoronovo.map((panorama) => (
        <SwiperSlide>
          <div>
            <div className='panoramas'>
              <ReactPhotoSphereViewer
                ref={photoSphereRef}
                container='div'
                src={panorama}
                width='940'
                height='340'
                defaultZoomLvl={10}
                // onClick={handleClick}
              ></ReactPhotoSphereViewer>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
