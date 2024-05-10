import type { FC } from 'react';

import styles from '../styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWaitingForCityRoute {}

export const WaitingForCityRoute: FC<IWaitingForCityRoute> = () => (
  <div className={styles.wrapper}>
    <div>Ведите какой-нибудь город...</div>
  </div>
);
