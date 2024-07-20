import { FC } from 'react';

import { ButtonLink } from 'components/ui/button-link';

import { IVirtualExcursions } from './types';

import styles from './styles.module.scss';

export const VirtualExcursions: FC<IVirtualExcursions> = ({ excursions }) => (
  <div className={styles.excursions}>
    {excursions.map(({ id, description, title, previewImg, route }) => (
      <div key={id} className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <div className={styles.image}>
            <img src={previewImg} alt={title} />
          </div>
        </div>

        <ButtonLink className='mt-3 ' variant='dark' href={`/virtual/${route}`} text='Далее' />
      </div>
    ))}
  </div>
);
