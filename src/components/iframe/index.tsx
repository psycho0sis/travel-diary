import type { FC } from 'react';

import { IIframe } from './types';

import styles from './styles.module.scss';

export const Iframe: FC<IIframe> = ({ src, width, height }) => (
  <div className={styles.mapWrapper}>
    <div>
      <iframe className={styles.iframe} loading='lazy' src={src} width={width} height={height} />
    </div>
  </div>
);
