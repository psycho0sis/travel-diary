import { Link } from 'react-router-dom';

import image1 from 'assets/grave3-image1.jpg';
import image2 from 'assets/grave3-image2.jpg';
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
          года. В числе захороненных: - Художник Трегер Тубияш, - Профессор Цеммель Натан, -
          Профессор Обербах, - Профессор Идельсон, - Доктор Гершунь. Имена остальных не установлены.
        </p>
        <div className='excursion__museum-photos'>
          <img className='excursion__photo' src={image1} />
          <img className='excursion__photo' src={image2} />
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
