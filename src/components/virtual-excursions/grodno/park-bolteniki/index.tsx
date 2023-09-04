import { Link } from 'react-router-dom';

import { ParkBoltenikiRoute } from 'components/custom-google-maps/park-bolteniki';
import { GoogleMaps } from 'components/google-map';
import { ReviewForm } from 'components/review-form';
import { Title } from 'components/ui/title';

export const markers = [
  {
    id: 0,
    name: 'Парк Больтеники',
    description: '',
    position: { lat: 54.237771937891786, lng: 25.311872037375938 },
  },
];

export const ParkBolteniki = () => {
  return (
    <div className='excursion'>
      <div className='excursion__back-btn-wrapper'>
        <Link className='excursion__back-btn' to='/virtual/grodno'>
          Назад к списку экскурсий по Гродненской области
        </Link>
      </div>
      <div className='excursion__map-wrapper'>
        <ParkBoltenikiRoute />
        <GoogleMaps center={markers[0].position} markers={markers} zoom={15} />
      </div>
      <Title fontSize={36} margin='25x 0'>
        Парк и Усадьба Путткамеров в деревне Больтеники
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          Деревня Больтеники расположена в Вороновском районе Гродненщины, недалеко от
          международного пункта пропуска с Литвой, Бенякони. Самым известным местом здесь, имеющим
          историческую и культурную ценность, является поместье Путткамеров в деревне Больтеники,
          которое уже более века присутствует на карте региона и привлекает множество туристов своей
          уникальной архитектурой. Стоит отметить, что живописный парк, в котором до сих пор можно
          встретить редкие породы деревьев в местных местах, функционирует прекрасно. В то время
          парк был украшен массивными деревянными скамейками и многочисленными цветочными
          насаждениями.
          <img
            className='excursion__photo excursion__photo--leftimg'
            src='https://openborder.brsu.by/wp-content/uploads/2023/03/20201011_132841-2.webp'
          />
        </p>
        <p className='excursion__text'>
          Местечко Больтеники тесно связано с поэтом Адамом Мицкевичем и любимой девушкой Марылей
          Варещакой, которая была обещана Путткамеру, но затем вступила в брак с нелюбимым
          человеком. Вся жизнь Марыли была тесно связана с этим местом. Она с Адамом тайно
          встречались на краткие свидания. Так влюблённые проводили время вместе. И здесь до сих пор
          сохранился валун, получивший название «камень Мицкевича». На нём вырезан крест — символ
          вечной любви друг к другу. Есть две версии его появления. По первой, крест высекла Марыля,
          как символ своей тоски по возлюбленному. По второй, крест — дело рук самого Адама
          Мицкевича, он высек символ после того, как Марыля не пришла на их последнее свидание.
          Жители деревни утверждают, что если прикоснуться к камню и загадать желание, оно
          обязательно сбудется.
          <img
            className='excursion__photo excursion__photo--rightimg'
            src='https://openborder.brsu.by/wp-content/uploads/2023/03/31f6d516aaf0fd670eab159a8559b203-orig.jpg'
          />
        </p>
        <p className='excursion__text'>
          За усадьбой начинается замечательный парк, разбитый в начале XIX века. В парке
          произрастает около 60 видов растений, некоторые из них редко встречаются в Беларуси. С
          деревней Больтеники связаны жизнь и творчество Адама Мицкевича. Здесь жила первая любовь
          известного поэта – Марыля Верещако. В небольшом лесу около пруда лежит знаменитый «камень
          Мицкевича». Каменная глыба, которую некоторые принимают за метеорит, служила местом для
          встреч писателя со своей любимой. Через деревню протекает река Болотинка с образованной на
          ней системой красивейших прудов.
        </p>
        <p className='excursion__text'>Всем рекомендуем посетить это чудесное место!</p>
        <div className='excursion__museum-photos'>
          <img
            className='excursion__photo'
            src='https://openborder.brsu.by/wp-content/uploads/2023/03/10.jpg'
          />
          <img
            className='excursion__photo'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/448328eca359e65af61779da78c0f85a-orig.jpg'
          />
          <img
            className='excursion__photo'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/9d6aa72a000fc8d1b70e6b3dccd16d7a-orig.jpg'
          />
          <img
            className='excursion__photo'
            src='https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/46d19c6e5f02ca25c8eabfc209253ce8-orig.jpg'
          />
        </div>
        <ReviewForm excursion='Вороново-Парк Больтеники' />
      </div>
    </div>
  );
};
