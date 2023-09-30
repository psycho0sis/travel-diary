import type { FC } from 'react';

import styles from './styles.module.scss';

interface IIframe {
  height: string;
  src: string;
  width: string;
}

export const Iframe: FC<IIframe> = ({ src, width, height }) => (
  <div className={styles.mapWrapper}>
    <iframe loading='lazy' src={src} width={width} height={height}></iframe>
  </div>
);
