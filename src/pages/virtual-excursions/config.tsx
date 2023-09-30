import { AvgustovskiyKanal } from './grodno/avgustovsckiy-kanal';
import { ParkBolteniki } from './grodno/park-bolteniki';
import { ParkZhilibera } from './grodno/park-zhilibera';
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
    route: 'voronovo/first-grave',
    img: 'https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/photo_2023-07-02_13-56-10.jpg?alt=media&token=3e5bffb6-a5a4-4be3-9977-eb617c43ba31',
  },
  {
    id: 1,
    component: <SecondGrave />,
    title: 'Могила жертв фашизма (№ 6064)',
    description:
      'На юго-западной окраине г.п.Вороново, слева от дороги Вороново-Лида, захоронены 1834 жителя, расстрелянные немецко-фашистскими захватчиками...',
    route: 'voronovo/second-grave',
    img: 'https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/image2.jpg?alt=media&token=15723345-ad46-4c1a-b25a-34a21522fa86',
  },
  {
    id: 2,
    component: <ThirdGrave />,
    title: 'Братская могила мирных граждан',
    description:
      'Здесь похоронены 800 мирных граждан, расстрелянных фашистскими захватчиками 14 ноября 1941 года...',
    route: 'voronovo/third-grave',
    img: 'https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/image3.jpg?alt=media&token=1aa3e1b6-ee7c-411f-9f47-c04139739806',
  },
];

export const grodno = [
  {
    id: 0,
    component: <AvgustovskiyKanal />,
    title: 'Августовский канал',
    description:
      'Августовский канал — один из крупнейших европейских каналов появился в XIX веке, и на тот момент представлял торжество передовых технологий...',
    route: 'grodno/avgustovskiy-kanal',
    img: 'https://traveling.by/files/tours/2020/07/4207e0563645e0a81982bb6ef20c5c12-thumb-600x390-crop.jpg',
  },
  {
    id: 1,
    component: <ParkZhilibera />,
    title: 'Парк Жилибера',
    description:
      'Городской парк имени Жана Эммануэля Жилибера в Гродно расположен в самом центе города...',
    route: 'grodno/park-zhilibera',
    img: 'http://nemnovotour.by/wp-content/uploads/2018/09/82899227.jpg',
  },
  {
    id: 2,
    component: <ParkBolteniki />,
    title: 'Парк Больтеники',
    description:
      'Парк Больтеники находится на южной стороне деревни Больтеники, заложен в во второй половине XVIII - начале XIX вв. при усадьбе Путткамеров. Парк имеет площадь около 10 га...',
    route: 'grodno/park-bolteniki',
    img: 'https://ekskursii.by/images/obj2/17548/12_clear_resize1.jpg',
  },
];

export const excursions = [
  {
    id: 0,
    title: 'Экскурсии по замкам Гродненской области',
    description:
      'Самыми известными замками Беларуси являются Мирский и Несвижский. Наиболее древние каменные замки можно увидеть в Лиде, Крево, Коссово, Любче, Ружанах, Новогрудке и Гродно...',
    route: 'palaces',
    img: 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',
  },
  {
    id: 1,
    title: 'Экскурсии по Гродненской области',
    description: 'Удивительная экскурсия по природным объектам Гродненской области...',
    route: 'grodno',
    img: 'https://traveling.by/files/tours/2020/07/59451194b491aaaa7a63ce0ee4de3289-thumb-600x390-crop.jpg',
  },
  {
    id: 2,
    title: 'Экскурсия по братским могилам поселка Вороново',
    description:
      'Братские могилы, мемориалы, памятные знаки, установленные в честь героев Великой Отечественной войны, в городском поселке Вороново неотъемлемым объединяющим элементом жизни. Напоминают, как важна и желанна для русского народа мирная жизнь...',
    route: 'voronovo',
    img: 'https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/photo_2023-07-02_13-56-10.jpg?alt=media&token=3e5bffb6-a5a4-4be3-9977-eb617c43ba31',
  },
];
