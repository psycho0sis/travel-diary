import { Link } from 'react-router-dom';

import { VoronovoRoute } from 'components/custom-google-maps/voronovo';
import { Title } from 'components/ui/title';

import { graves } from '../config';
import { VirtualExcursions } from '..';

export const VirtualExcursionVoronovo = () => {
  return (
    <>
      <Link className='excursion__back-btn' to='/virtual/'>
        Назад к списку экскурсий
      </Link>
      <Title>Братские могилы мирных граждан г.п. Вороново</Title>
      <div className='excursion__map-wrapper'>
        <VoronovoRoute />
      </div>
      <div className='excursion__link-wrapper'>
        <Link className='item__link' to='/virtual/voronovo/quiz'>
          Пройти викторину
        </Link>
      </div>
      <VirtualExcursions excursions={graves} />
    </>
  );
};
