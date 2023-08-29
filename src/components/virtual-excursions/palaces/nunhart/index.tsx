import { Link } from 'react-router-dom';

import image from 'assets/mini-honhart.jpg';
import { VoronovoNunhartRoute } from 'components/custom-google-maps/voronovo-nunhart';
import { GoogleMaps } from 'components/google-map';
import { ReviewForm } from 'components/review-form';
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
            src='https://openborder.brsu.by/wp-content/uploads/2023/03/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-03-09_215853442.png'
          />
          <img
            className='excursion__photo'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/5e0f0a128ad7314f9c2ecb147e11b682-orig.jpg'
          />
          <img
            className='excursion__photo'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/29aa3f0af212c1283d49a1fb2df01ff0-orig.jpg'
          />
          <img
            className='excursion__photo'
            src='https://avatars.mds.yandex.net/get-altay/3569559/2a00000181a37e498b617adff5de4b92be5a/XXXL'
          />
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
            src='https://avatars.mds.yandex.net/get-altay/4961567/2a00000181a37e83278a9272c6897fedf180/XXXL'
          />
          <img
            className='excursion__photo'
            src='https://avatars.mds.yandex.net/get-altay/4454943/2a00000181a37e7530539deb86ae4a0a78ff/XXXL'
          />
        </div>
        <ReviewForm excursion='Вороново-Гайтюнишки' />
      </div>
    </div>
  );
};
