import { type FC, Fragment } from 'react';
import cn from 'classnames';

import { GoogleMaps } from 'components/google-map';
import { Iframe } from 'components/iframe';
import { ReviewForm } from 'components/review-form';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import type { IDefaultExcursion } from '../../../types';

import styles from '../../../styles.module.scss';

export const Excursion: FC<IDefaultExcursion> = ({ data }) => {
  const { excursion, images, maps, title, textContent, route } = data;

  return (
    <div className={styles.excursion}>
      <BackButton
        text='Назад к списку экскурсий по замкам'
        route={`/virtual/${route.split('/')[0]}`}
      />

      <div className={styles.excursionMapWrapper}>
        <Iframe height='359' src={maps?.iframeLink || ''} width='570' />
        <GoogleMaps
          center={maps?.googleMapData.position || { lat: 0, lng: 0 }}
          markers={maps?.googleMapData.markers || []}
          zoom={15}
        />
      </div>
      <Title fontSize={36} margin='25x 0'>
        {title}
      </Title>

      <div className={styles.excursionContent}>
        {textContent?.map(({ title, paragraph, image }, index) => (
          <Fragment key={title ? title : index}>
            {title && <h3 className={styles.excursionTitle}>{title}</h3>}
            <p className={styles.excursionText}>{paragraph}</p>
            {image && (
              <img
                className={cn(
                  styles.photo,
                  { [styles.leftImg]: index % 2 === 0 },
                  { [styles.rightImg]: index % 2 !== 0 }
                )}
                loading='lazy'
                src={image}
              />
            )}
          </Fragment>
        ))}

        <p className={styles.excursionText}>Всем рекомендуем посетить это чудесное место!</p>
        <div className={styles.photos}>
          {images?.map((image) => (
            <img key={image} className={styles.photo} loading='lazy' src={image} />
          ))}
        </div>
        <ReviewForm excursion={excursion || ''} />
      </div>
    </div>
  );
};
