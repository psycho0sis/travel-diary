import { Link } from 'react-router-dom';

import image1 from 'assets/grave2-image1.jpg';
import image2 from 'assets/grave2-image2.jpg';
import image3 from 'assets/grave2-image3.jpg';
import image4 from 'assets/grave2-image4.jpeg';
import image5 from 'assets/grave2-image5.jpeg';
import panorama from 'assets/panorama1.png';
import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { ReviewForm } from 'components/review-form';
import { Title } from 'components/ui/title';

export const SecondGrave = () => {
  return (
    <div className='excursion'>
      <div className='excursion__back-btn-wrapper'>
        <Link className='excursion__back-btn' to='/virtual/voronovo'>
          Назад к списку экскурсий по могилам
        </Link>
      </div>
      <div className='excursion__map-wrapper'>
        <PanoramaVoronovo panorama={panorama} />
      </div>
      <Title fontSize={36} margin='25x 0'>
        Могила жертв фашизма
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          На юго-западной окраине г.п.Вороново, слева от дороги Вороново-Лида, захоронены 1834
          жителя, расстрелянные немецко-фашистскими захватчиками. Имена 629 захороненных неизвестны.
          В 1964 году на могиле поставлен обелиск. Шефы: Учреждение образования «Вороновский
          государственный профессионально-технический колледж сельскохозяйственного производства»,
          отдел пограничной службы «Вороново».
          <img className='excursion__photo excursion__photo--leftimg' src='' />
        </p>
        <div className='excursion__museum-photos'>
          <img className='excursion__photo' src={image1} />
          <img className='excursion__photo' src={image2} />
          <img className='excursion__photo' src={image3} />
          <img className='excursion__photo' src={image4} />
          <img className='excursion__photo' src={image5} />
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
