import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IVirtualExcursions } from './types';

import './styles.scss';

export const VirtualExcursions: FC<IVirtualExcursions> = ({ excursions }) => {
  return (
    <div className='excursions'>
      {excursions.map(({ id, description, title, img, date, route }) => (
        <div key={id} className='excursions__wrapper'>
          <div className='item__header'>
            <h3 className='item__title'>{title}</h3>
            <p className='item__date'>{date}</p>
          </div>
          <div className='item__content'>
            <p className='item__description'>{description}</p>
            <div className='item__image'>
              <img src={img} alt={title} />
            </div>
          </div>
          <Link className='item__link' to={`/virtual/${route}`}>
            Далее
          </Link>
        </div>
      ))}
    </div>
  );
};
