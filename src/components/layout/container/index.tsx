import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
