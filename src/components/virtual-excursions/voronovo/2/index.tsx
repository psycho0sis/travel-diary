import { Link } from 'react-router-dom';

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
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/20230702_124619.jpg?alt=media&token=5ea55515-0965-4df1-a1b7-bd9dc88e5eaf'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave2-image2.jpg?alt=media&token=09cab37c-9ee6-42bc-a400-679e5f7b2dff'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave2-image3.jpg?alt=media&token=9991d5b2-5b16-4811-85da-f119ec6de8e4'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave2-image4.jpeg?alt=media&token=a0572fc0-1c58-49ae-845b-396e53ce57a0'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave2-image5.jpeg?alt=media&token=16b08db7-6484-4395-9b16-a5d88dbcab51'
          />
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
