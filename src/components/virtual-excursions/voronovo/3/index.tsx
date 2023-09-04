import { Link } from 'react-router-dom';

import panorama from 'assets/panorama2.png';
import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { ReviewForm } from 'components/review-form';
import { Title } from 'components/ui/title';

export const ThirdGrave = () => {
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
        Братская могина мирных граждан
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          Здесь похоронены 800 мирных граждан, расстрелянных фашистскими захватчиками 14 ноября 1941
          года. В числе захороненных:
        </p>
        <ul>
          <li>Художник Трегер Тубияш</li>
          <li>Профессор Цеммель Натан</li>
          <li>Профессор Обербах</li>
          <li>Профессор Идельсон</li>
          <li>Доктор Гершунь</li>
        </ul>
        <p className='excursion__text'>Имена остальных не установлены.</p>
        <div className='excursion__museum-photos'>
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/image3.jpg?alt=media&token=89d0a248-0559-4606-953a-be7f1c78ff35'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave3-image2.jpg?alt=media&token=c4fcc1f1-bf10-4078-9a29-ede043cd12d4'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/IMG-edc59e9980275979bebd7efbc068327e-V.jpg?alt=media&token=2945fb52-6514-4da0-bca5-78a73d2df0c6'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/IMG-5ac7cac94edab54638babbc456234a7f-V.jpg?alt=media&token=ed8f6d72-3ba6-4d8c-99c6-a3cfb53ec55f'
          />
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
