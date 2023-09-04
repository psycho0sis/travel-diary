import { Link } from 'react-router-dom';

import panorama from 'assets/panorama3.png';
import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { ReviewForm } from 'components/review-form';
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
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave1-image1.jpg?alt=media&token=c71e9a89-faa3-44f1-93a4-d51aa962a25e'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/grave1-image2.jpg?alt=media&token=34aeb85d-4407-4b0a-8c78-abcac7bfda67'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/photo_2023-09-04_23-24-56.jpg?alt=media&token=739ec376-0a99-4dcd-aa3a-86fb51df6a65'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/photo_2023-09-04_23-24-59.jpg?alt=media&token=c2595773-f01a-4261-9433-3dac703b24e6'
          />
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
