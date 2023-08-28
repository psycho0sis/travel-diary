import { Link } from 'react-router-dom';

import image1 from 'assets/лидский-замок1.jpg';
import image2 from 'assets/лидский-замок2.jpg';
import image3 from 'assets/лидский-замок3.jpg';
import image4 from 'assets/лидский-замок4.jpg';
import { VoronovoLidaRoute } from 'components/custom-google-maps/voronovo-lida';
import { GoogleMaps } from 'components/google-map';
import { ReviewForm } from 'components/review-form';
import { Title } from 'components/ui/title';

export const markers = [
  {
    id: 0,
    name: 'Лидский замок',
    description:
      'Лидский замок — замок в Белоруссии, в городе Лида, построенный в 1323 году по поручению князя Гедимина.',
    position: { lat: 53.887386255232414, lng: 25.302766370384226 },
  },
];

export const LidaPalace = () => {
  return (
    <div className='excursion'>
      <div className='excursion__back-btn-wrapper'>
        <Link className='excursion__back-btn' to='/virtual/palaces'>
          Назад к списку экскурсий по замкам
        </Link>
      </div>
      <div className='excursion__map-wrapper'>
        <VoronovoLidaRoute />
        <GoogleMaps center={markers[0].position} markers={markers} zoom={15} />
      </div>
      <Title fontSize={36} margin='25x 0'>
        Лидский замок
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          Лидский замок – это выдающийся памятник оборонительного искусства 14-15 веков. По-другому
          он зовётся Замком Гедимина и сурово возвышается над Лидой, напоминая всем приезжим о
          славном героическом прошлом белорусской земли.
          <img
            className='excursion__photo excursion__photo--leftimg'
            src='https://fcti.by/wp-content/uploads/2021/10/%D0%BB%D0%B8%D0%B4%D0%B0.jpeg'
          />
        </p>
        <h3 className='excursion__title'>История Лидского замка</h3>
        <p className='excursion__text'>
          Летопись Лидского замка начинается в 1323 году: именно тогда вышел приказ великого князя
          литовского Гедимина построить в Лиде каменную крепость, которая смогла бы препятствовать
          крестоносцам наносить свои разрушительные набеги вглубь белорусских земель. На постройку
          Лидского замка ушло несколько лет. Сперва замок представлял собой укреплённую со всех
          сторон княжескую резиденцию. Через некоторое время в замке была возведена православная
          крепость, а также дополнительные жилые и хозяйственные постройки, которые делали
          проживание в ней более комфортным во время осады. Укреплён замок был очень хорошо:
          согласно фортификационным традициям тех лет он имел прямоугольную форму, две угловые
          башни, а также массивные стены толщиной до 2 метров в основании и 1,5 метра на торцах. С
          севера хорошей защитой замку служил ров, а с восточной – искусственное озеро. Рост и спад
          напряжённости между государствами влияли на количество гарнизона, расположенного в замке.
          В Лидском замке постоянно находился небольшой гарнизон, способные быстро реагировать на
          внезапное появление врагов. Крепость служила пристанищем для жителей как Лиды, так и
          соседних поселений. Лидский замок всегда принадлежал знатным особам: так, через некоторое
          время крепость стала владением Ольгерда, а потом и Ягайло, который был не только великим
          князем литовским, но и польским королём. Крепость нередко спасала жителей Лиды от набегов
          врагов на протяжении 14-18 веков.
          <img
            className='excursion__photo excursion__photo--rightimg'
            src='https://my-travel-diary.by/wp-content/uploads/2019/05/imgonline-com-ua-Resize-6uF4cIVj0Hsbo-min-1140x760.jpg'
          />
        </p>
        <p className='excursion__text'>
          Сейчас Лидский замок — только память о тех временах, но до сих пор он поражает своим
          величием и мощью. В любое время года он выглядит прекрасно! Жители Лидчины с трепетом и
          любовью относятся к этой твердыне и хотят передать нам своё видение его красоты,
          внушительности, то, что он всегда разный, с какой стороны на него ни посмотрели бы.
        </p>
        <p className='excursion__text'>
          Внутри замка в каждом зале находился сотрудник. Все очень приветливые, внимательные.
          Рассказывали о некоторых экспонатах и куда идти дальше. С удовольствием рассматривали
          свечи. Именно они создают особую атмосферу. Удивила экспозиция с картами. Очень долго
          времени провели рассматривая их. Вокруг замка тоже интересно прогуляться. Рядом с замком
          находится красивейшее озеро и сквер с многочисленными дорожками, лавочками и фонарями.
        </p>
        <p className='excursion__text'>
          Лидский замок (он же замок Гедемина), нам очень понравился. Отличное место для время
          провождения. Кстати, на территории Лидского замка проводятся крупный и достаточно
          известный среди белорусов, фестиваль хмеля, солода и воды. За его организацию отвечает
          такой известный производитель пива ОАО «Лидское пиво». Говорят пиво льется рекой, рыцари
          устраивают бои, а молодежь отдыхает по полной. Лидский замок однозначна рекомендуем к
          посещению..Поверьте, Вы получите массу положительных эмоций!
        </p>
        <p className='excursion__text'>Всем рекомендуем посетить это чудесное место!</p>
        <div className='excursion__museum-photos'>
          <img
            className='excursion__photo'
            src='https://www.hata.by/images/uploaded/articles/articles-91422-3b9fd94e194bdb91ba4a_ch_.jpg'
          />
          <img
            className='excursion__photo'
            src='https://www.hata.by/images/uploaded/articles/articles-95452-3415f9b1cb0db9868483_ch_.jpg'
          />
          <img
            className='excursion__photo'
            src='https://pics.livejournal.com/mitrander/pic/0003yrg4/s640x480'
          />
          <img
            className='excursion__photo'
            src='https://www.hata.by/images/uploaded/articles/articles-69384-8891c40747db16cbe19f_ch_.jpg'
          />
          <img className='excursion__photo' src={image1} />
          <img className='excursion__photo' src={image2} />
          <img className='excursion__photo' src={image3} />
          <img className='excursion__photo' src={image4} />
        </div>
        <ReviewForm excursion='Вороново-Лида' />
      </div>
    </div>
  );
};
