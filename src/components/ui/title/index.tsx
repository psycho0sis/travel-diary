import type { FC } from 'react';

import { ITitle } from './types';

import styles from './styles.module.scss';

export const Title: FC<ITitle> = ({ children, fontSize = 36, margin }) => (
  <h3 className={styles.title} style={{ fontSize: fontSize, margin: margin }}>
    {children}
  </h3>
);
