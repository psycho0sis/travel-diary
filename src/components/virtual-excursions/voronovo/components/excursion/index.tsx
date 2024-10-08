import type { FC } from 'react';

import { ReviewForm } from 'components/review-form';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import type { IDefaultExcursion } from '../../../types';

import styles from '../../../styles.module.scss';

export const ExcursionVoronovo: FC<IDefaultExcursion> = ({ data }) => {
  const { title, images, textContent } = data;

  return (
    <div className={styles.excursion}>
      <BackButton text='Назад к списку экскурсий по могилам' route='/virtual/voronovo' />

      <Title fontSize={36} margin='25x 0'>
        {title}
      </Title>

      <div className={styles.excursionContent}>
        {textContent?.map(({ paragraph }, index) => (
          <p key={index} className={styles.excursionText} style={{ whiteSpace: 'pre-line' }}>
            {paragraph}
          </p>
        ))}

        <div className={styles.photos}>
          {images?.map((image) => (
            <img key={image} className={styles.photo} loading='lazy' src={image} />
          ))}
        </div>
        <ReviewForm excursion='Братские могилы' />
      </div>
    </div>
  );
};
