import { Link } from 'react-router-dom';

import { VoronovoMirRoute } from 'components/custom-google-maps/voronovo-mir';
import { GoogleMaps } from 'components/google-map';
import { ReviewForm } from 'components/review-form';
import { Title } from 'components/ui/title';

export const markers = [
  {
    id: 0,
    name: 'Мирский замок',
    description:
      'Восстановленная крепость XVI века площадью 27 гектаров с музеем,рестораном и магазином сувениров.',
    position: { lat: 53.451307878203274, lng: 26.47293262728402 },
  },
];

export const MirPalace = () => {
  return (
    <>
      <div className='excursion__back-btn-wrapper'>
        <Link className='excursion__back-btn' to='/virtual/palaces'>
          Назад к списку экскурсий по замкам
        </Link>
      </div>
      <div className='excursion__map-wrapper'>
        <VoronovoMirRoute />
        <GoogleMaps
          center={{ lat: 53.451307878203274, lng: 26.47293262728402 }}
          markers={markers}
          zoom={15}
        />
      </div>
      <Title fontSize={36} margin='25x 0'>
        Мирский замок
      </Title>

      <div className='excursion__content'>
        <p className='excursion__text'>
          Мирский замковый комплекс (Мирский замок) — выдающийся пример оборонного зодчества XVI
          века. Он расположен в поселке Мир в Гродненской области Беларуси. Самые ранние сооружения
          выполнены в готическом стиле и относятся к XVI столетию. Этот белорусский замок был
          заложен в начале XVI века князем Илиничем. Николай РадзивиллВ 1568 году замок перешел во
          владение Николая Радзивилла, который достроил его в стиле ренессанса. Вдоль восточной и
          северной стен замка был возведен трехэтажный дворец. Вокруг построены земляные валы с
          бастионами на углах и рвом с водой. В северной части разбит сад в итальянском стиле.
          Искусственное озеро было создано на юге. Во время Наполеоновских войн замок серьезно
          пострадал и стоял в запустении более столетия. Все еще находясь в руках богатой семьи
          Радзивиллов, он был восстановлен в начале XIX века и продан Николаю Святополк-Мирскому в
          1895 году. Его сын начал восстановление замка, которое проходило под руководством
          архитектора Теодора Бурше. После войны в замке жили те местные жители, дома которых были
          разрушены во время войны. Потом здесь располагался военный гарнизон.
          <img
            className='excursion__photo excursion__photo--leftimg'
            src='https://belarustourist.by/upload/resize_cache/iblock/11a/848_502_2/11a42f4d6275349769aba7568addee5b.jpg'
          />
        </p>
        <h3 className='excursion__title'>Легенды Мирского замка</h3>
        <p className='excursion__text'>
          Вокруг замка всегда ходили легенды, самой знаменитой из них считается легенда о яблоневом
          саде. Сегодня возле замка есть живописное рукотворное озеро. Но когда-то там рос
          прекрасный яблоневый сад. Князь Николай Святополк-Мирский, тогдашний владелец имения в
          Мире, приказал выкопать озеро, а сад вырубить. Была весна, деревья пышно цвели, по
          народному поверию большой грех рубить цветущие деревья, будет несчастье и проклятие, и
          крестьяне отказались рубить сад. Терять время на народные приметы князь не хотел, а рубить
          сад нанял пришлых людей. Когда копали озеро не проходило и дня без несчастья, многие люди
          погибли, погиб на стройке и сын местной ведьмы, молодой парень. По легенде мать этого
          парня и прокляла озеро, «Пусть это озеро примет столько душ, сколько деревьев цвело в
          саду», таким было её напутствие. Так зародилась легенда о яблоневом саде.
          <img
            className='excursion__photo excursion__photo--rightimg'
            src='https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg'
          />
        </p>
        <h3 className='excursion__title'>Музей Мирского замка</h3>
        <p className='excursion__text'>
          Реставрационные работы во дворце начались лишь в восьмидесятых годах, а через некоторое
          время Мирский замок был передан Государственному художественному музею Беларуси, после
          чего был утверждён проект по реставрации дворцового комплекса. Несмотря на то, что первая
          выставка произошла уже в начале девяностых годов в юго-западной башне, официальное
          открытие Замкового комплекса «Мир» состоялось лишь в 2010 году.
        </p>
        <p className='excursion__text'>
          Один из самых величественных залов, на наш взгляд, - это обеденный, куда войти можно
          только в бахилах, которые предусмотрительно оставлены перед входом. Чем ещё удивил нас
          замок? Лестницы, лестницы и ещё раз лестницы) вниз, вверх, на улицу... Особенно долгие и
          крутые лестницы вниз в подвал, где хранились съестные запасы. Слуг в замке должно было
          быть очень и очень много, чего только стоит добраться из подвала в тот же обеденный зал.
          Мы с ужасом представляли ситуации, когда кто-то что-то забывает и приходится идти обратно.
        </p>
        <p className='excursion__text'>
          Подводя итоги, хотим сказать, что побывать в Мирском замке безусловно стоит по многим
          причинам:
          <ul className='excursion__text-list'>
            <li>
              Мирский замок включен в список памятников мирового и культурного наследия ЮНЕСКО;{' '}
            </li>
            <li>в нем представлены предметы самобытной культуры Беларуси прошлых столетий;</li>
            <li>при замке красивейший парк и озеро, где можно погулять и хорошо провести время;</li>
            <li>здесь можно заказать экскурсии и услышать старые легенды о замке;</li>
            <li>в замковом комплексе проводят даже свадебные церемонии;</li>
            <li>и наконец, просто полюбоваться на величественное строение Мирского замка!</li>
          </ul>
        </p>
        <p className='excursion__text'>Всем рекомендуем посетить это чудесное место!</p>
        <div className='excursion__museum-photos'>
          <img
            className='excursion__photo'
            src='https://belarustourist.by/upload/resize_cache/iblock/11a/848_502_2/11a42f4d6275349769aba7568addee5b.jpg'
          />
          <img
            className='excursion__photo'
            src='https://scontent-fra5-1.xx.fbcdn.net/v/t1.6435-9/96215124_2931737100257431_329035417321996288_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGU5bUZHJ8KBue6eRHdNYQzgswmgfoID4iCzCaB-ggPiPFTJVA-QJtSfx-U58L0CkIfqhMO8195MI583_-PAtaH&_nc_ohc=OQ2IbUEGlRcAX-c4P9K&_nc_ht=scontent-fra5-1.xx&oh=00_AfCgIAkKLN8ZEndG4KWkrZTE8DphMRHJ9xnGUcTx-tSfIw&oe=65129405'
          />
          <img
            className='excursion__photo'
            src='https://my-travel-diary.by/wp-content/uploads/2020/09/imgonline-com-ua-Resize-8BoE2ZsrMN-min.jpg'
          />
          <img
            className='excursion__photo'
            src='https://static.bntu.by/bntu/new/news/image_10773_8516389fa3cea4718d4caa8c7be68d73.jpg%7CresizeToWidth=1400'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/museum1.jpg?alt=media&token=894dda21-9cbb-42f7-a197-a424e9cd3590'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/museum2.jpg?alt=media&token=2053d39f-664b-42e5-83d6-995530805129'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/museum3.jpg?alt=media&token=c10d7617-7f72-4a7e-bb90-69ef9b7fca63'
          />
          <img
            className='excursion__photo'
            src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/museum4.jpg?alt=media&token=6183a1bb-88fb-4c8e-a986-cc11db33340e'
          />
        </div>
        <ReviewForm excursion='Вороново-Мир' />
      </div>
    </>
  );
};
