import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
  fontSize?: number;
  margin?: string;
}

export const Title: FC<IProps> = ({ children, fontSize = 36, margin }) => (
  <h3 className={styles.title} style={{ fontSize: fontSize, margin: margin }}>
    {children}
  </h3>
);
