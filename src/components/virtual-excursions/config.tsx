import grave1 from '../../assets/image1.jpg';
import grave2 from '../../assets/image2.jpg';
import grave3 from '../../assets/image3.jpg';

import { MirPalace } from './palaces/mir';
import { FirstGrave } from './voronovo/1';
import { SecondGrave } from './voronovo/2';
import { ThirdGrave } from './voronovo/3';

export const palaces = [
  {
    id: 0,
    component: <MirPalace />,
    title: 'Мирский замок',
    description:
      'Замок в местечке Мир, известном с конца ХIV века, заложил магнат Юрий Ильинич – произошло это, вероятнее всего, в 20-х годах ХVІ столетия...',
    date: '5 сентября 2021г.',
    route: 'palaces/mir',
    img: 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',
  },
  {
    id: 1,
    component: null,
    title: 'Лидский замок',
    description:
      'Лидский замок единственный на территории Беларуси действующий замок-кастель. Он возведен в 1323 г. на слиянии рек Лидеи и Каменки Великим князем Литовским — Гедимином...',
    date: '28 мая 2021г.',
    route: 'palaces/lida',
    img: 'https://liderfm.by/wp-content/uploads/2022/02/Belarus_Lida_Castle_2564970351-1-1536x1024.jpeg',
  },
  {
    id: 2,
    component: null,
    title: 'Дом-крепость Нонхартов',
    description:
      'Дом-крепость в Гайтюнишках – памятник оборонительного зодчества, уникальный исторический объект на территории Беларуси...',
    date: '12 апреля 2021г.',
    route: 'palaces/nunhart',
    img: 'https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/a8b0e41f92657e5a95bd170588096691-orig.jpg',
  },
];

export const graves = [
  {
    id: 0,
    component: <FirstGrave />,
    title: 'Братская могила (№ 1824)',
    description:
      'В центре поселка похоронены 192 воина и партизана, которые погибли в годы Великой Отечественной войны..',
    date: '5 сентября 2021г.',
    route: 'voronovo/first-grave',
    img: grave1,
  },
  {
    id: 1,
    component: <SecondGrave />,
    title: 'Могила жертв фашизма (№ 6064)',
    description:
      'На юго-западной окраине г.п.Вороново, слева от дороги Вороново-Лида, захоронены 1834 жителя, расстрелянные немецко-фашистскими захватчиками...',
    date: '28 мая 2021г.',
    route: 'voronovo/second-grave',
    img: grave2,
  },
  {
    id: 2,
    component: <ThirdGrave />,
    title: 'Братская могина мирных граждан',
    description:
      'Здесь похоронены 800 мирных граждан, расстрелянных фашистскими захватчиками 14 ноября 1941 года...',
    date: '12 апреля 2021г.',
    route: 'voronovo/third-grave',
    img: grave3,
  },
];

export const excursions = [
  {
    id: 0,
    title: 'Экскурсия по братским могилам поселка Вороново',
    description:
      'Братские могилы, мемориалы, памятные знаки, установленные в честь героев Великой Отечественной войны, в поселении Вороновское являются неотъемлемым объединяющим элементом жизни. Напоминают, как важна и желанна для русского народа мирная жизнь...',
    date: '28 мая 2021г.',
    route: 'voronovo',
    img: grave1,
  },
  {
    id: 1,
    title: 'Экскурсии по замкам Гродненской области',
    description:
      'Самыми известными замками Беларуси являются Мирский и Несвижский. Наиболее древние каменные замки можно увидеть в Лиде, Крево, Коссово, Любче, Ружанах, Новогрудке и Гродно...',
    date: '28 мая 2021г.',
    route: 'palaces',
    img: 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',
  },
];
