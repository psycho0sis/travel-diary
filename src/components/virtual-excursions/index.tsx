import { Link } from 'react-router-dom';

import image1 from '../../assets/image1.jpg';

import { VirtualExcursionVoronovo } from './voronovo';

import './styles.scss';

const excursions = [
  {
    id: 0,
    component: VirtualExcursionVoronovo,
    title: 'Экскурсия по братским могилам г.п. Вороново',
    description:
      'Братские могилы, мемориалы, памятные знаки, установленные в честь героев Великой Отечественной войны, в поселении Вороновское являются неотъемлемым объединяющим элементом жизни. Напоминают, как важна и желанна для русского народа мирная жизнь...',
    date: '28 мая 2021г.',
    route: 'voronovo',
    img: image1,
  },
  {
    id: 1,
    component: VirtualExcursionVoronovo,
    title: 'Экскурсия по замкам Вороновского района',
    description:
      'Самыми известными замками Беларуси являются Мирский и Несвижский. Наиболее древние каменные замки можно увидеть в Лиде, Крево, Коссово, Любче, Ружанах, Новогрудке и Гродно...',
    date: '28 мая 2021г.',
    route: 'palaces',
    img: 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',
  },
];

export const VirtualExcursions = () => {
  return (
    <div className='excursions__wrapper'>
      {excursions.map(({ id, description, title, img, date, route }) => (
        <div key={id} className='excursions__item'>
          <div className='item__header'>
            <h3 className='item__title'>{title}</h3>
            <p className='item__date'>{date}</p>
          </div>
          <div className='item__content'>
            <p className='item__description'>{description}</p>
            <img className='item__image' src={img} alt={title} />
          </div>
          <Link className='item__link' to={`/virtual/${route}`}>
            Далее
          </Link>
        </div>
      ))}
    </div>
  );
};
