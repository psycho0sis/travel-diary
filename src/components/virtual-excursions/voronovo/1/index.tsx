import { Link } from 'react-router-dom';

import image1 from 'assets/grave1-image1.jpg';
import image2 from 'assets/grave1-image2.jpg';
import panorama from 'assets/panorama3.png';
import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { Title } from 'components/ui/title';

export const FirstGrave = () => {
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
        Братская могила
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          В центре поселка похоронены 192 воина и партизана, которые погибли в годы Великой
          Отечественной войны. В этой братской могиле захоронен и Герой Советского Союза Канарчик
          Александр Иванович. В 1954 году на могиле установлен памятник – скульптура воина с
          автоматом, перед которым расположены доски с именами погибших. В 2006 году произведен
          капитальный ремонт памятника. Шефы: районное унитарное предприятие жилищно-коммунального
          хозяйства, ГУО «Вороновская средняя школа».
        </p>
        <div className='excursion__museum-photos'>
          <img className='excursion__photo' src={image1} />
          <img className='excursion__photo' src={image2} />
        </div>
      </div>
    </div>
  );
};
