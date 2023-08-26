import { Link } from 'react-router-dom';

import image from 'assets/mini-honhart.jpg';
import { VoronovoNunhartRoute } from 'components/custom-google-maps/voronovo-nunhart';
import { GoogleMaps } from 'components/google-map';
import { Title } from 'components/ui/title';

export const markers = [
  {
    id: 0,
    img: image,
    name: 'Дом-крепость Нонхартов',
    description:
      'Дом-крепость в Гайтюнишках – памятник оборонительного зодчества, уникальный исторический объект на территории Беларуси.',
    position: { lat: 54.251091559284255, lng: 25.43316986778768 },
  },
];

export const NunhartPalace = () => {
  return (
    <div className='excursion'>
      <div className='excursion__back-btn-wrapper'>
        <Link className='excursion__back-btn' to='/virtual/palaces'>
          Назад к списку экскурсий по замкам
        </Link>
      </div>
      <div className='excursion__map-wrapper'>
        <VoronovoNunhartRoute />
        <GoogleMaps center={markers[0].position} markers={markers} zoom={15} />
      </div>
      <Title fontSize={36} margin='25x 0'>
        Дом-крепость Нонхартов
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          Деревня Гайтюнишки расположена в Гродненской области рядом с поселком с забавным названием
          Бенякони, в 14 километрах от городского поселка Вороново и на самой границе с Литвой. В
          Гайтюнишках проживает всего около 250 человек.
          <img
            className='excursion__photo excursion__photo--leftimg'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/29aa3f0af212c1283d49a1fb2df01ff0-orig.jpg'
          />
        </p>
        <h3 className='excursion__title'>История Дома-крепости Нонхартов</h3>
        <p className='excursion__text'>
          Основная достопримечательность деревни – Гайтюнишский дом – крепость. Интересным является
          уже то, что дом построен в 1611 - 1612 годах, но здание сохранилось очень хорошо. Замок
          построен на окраине деревни Гайтюнишки на левом берегу реки Жижма по собственному проекту
          Петра Нонхарта, разработанному совместно с инженером-фортификатором (фортификатор –
          специалист в области создания искусственных преград войскам противника, в том числе
          бастионных укреплений, а также изучения естественных закрытий местности) и тоже
          нидерландцем, Ван Даденом. Чтобы можно было выдержать длительную осаду, в подвальном ярусе
          был вырыт колодец. Дом-замок окружали вал и наполненный водой ров, немного дальше
          расположилась система искусственных прудов. Известно, что дом Нонхарта выдержал атаки
          шведов во время Северной войны.
          <img
            className='excursion__photo excursion__photo--rightimg'
            src='https://www.radzima.org/images/pamatniki/1843/gaycyunishki--1843-1428082101_b1.jpg'
          />
        </p>
        <h3 className='excursion__title'>Здание дома</h3>
        <p className='excursion__text'>
          Дом небольшой, симметричный, всего 15 х 34 метра. Здание построено из кирпича -
          «пальчатки», стены имеют толщину 1,5 метра. Дом двухэтажный, прямоугольной формы.
          Центральная часть строения представляет собой трехэтажную башню, выступающую из плоскости
          фасада. В башне находится главный вход, над которым помещен фамильный герб владельца. Из
          башни можно было спуститься в подвалы, которые занимали всю площадь под домом. На первом
          этаже располагались различные службы, на втором и третьем – комнаты для проживания семьи.
          В большой столовой можно было посидеть у камина, выполненного в виде декоративной башни.
          Над входом в столовую был расположен балкон для музыкантов. Отдельная дверь выходила в
          сад.
        </p>
        <p className='excursion__text'>
          Помимо основного здания в имении были и другие постройки: броварня, кухня, кузница,
          маслосыродельня, конюшни и другие. На плотине одного из прудов была построена мельница, на
          территории вокруг дома рос фруктовый сад. В 1900–1905 годах Эдвард Римша отреставрировал
          здание, пристроил к нему массивное крыльцо с фасада здания. В 1949 году в доме Нонхарта
          разместили школу механизаторов, с 1956 года в нем находится административное здание
          республиканской психиатрической больницы. Когда в 2000 году проводили капитальный ремонт
          здания, то специалисты зафиксировали, что степень поражения здания составляет всего лишь
          30% - и это несмотря на то, что возраст строения к 2000 году – почти 400 лет!
        </p>
        <p className='excursion__text'>
          На сегодня здание находится в неплохом состоянии. Конечно, без разрешения главного врача
          больницы осмотреть дом внутри не получится, но хорошо уже то, что здание дома-крепости
          Нонхартов не разрушается и не ветшает, как многие памятники истории нашей страны.
        </p>
        <div className='excursion__museum-photos'>
          <img
            className='excursion__photo'
            src='https://npr.by/wp-content/uploads/2023/01/1-8.png'
          />
          <img
            className='excursion__photo'
            src='https://npr.by/wp-content/uploads/2023/01/1-9.png'
          />
          <img
            className='excursion__photo'
            src='https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/312327798_491459066378723_2920985186426050993_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHIF2tDaD1-eJmeST0hK8KhU01QD_9lNB5TTVAP_2U0HtfL_m6a4DVKbRELbvQ7pzmDb9coXSyW6_5gUsON_wEO&_nc_ohc=Er5F__F_pywAX9FilQn&_nc_ht=scontent-fra5-1.xx&oh=00_AfDUfsIMcrcykteZZ7bgfsaA8YoRKrn2LTwEmkLlEMntUA&oe=64E54DCD'
          />
          <img
            className='excursion__photo'
            src='https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/312352790_491458993045397_1592397905117354842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGl2yjLjpj3qCfinrHvaCUYLyyBUYD3Du4vLIFRgPcO7uK6nxIZnCjbnCiWPcwjlwLWaE6zsZqVKnt5ev17zKO3&_nc_ohc=togtb3hbrkMAX8SoNmv&_nc_ht=scontent-fra3-1.xx&oh=00_AfCx4sy4QPgrkPxNoMnwaxhntP8SJE6rcFotK7hMOK7xoQ&oe=64E57516'
          />
        </div>
      </div>
    </div>
  );
};
