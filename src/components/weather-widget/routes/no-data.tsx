import type { FC } from 'react';

import styles from '../styles.module.scss';

interface INoDataRoute {
  name: string;
}

export const NoDataRoute: FC<INoDataRoute> = ({ name }) => (
  <div className={styles.wrapper}>
    <div>{name}</div>
    <div>У нас нет данных по такому городу. Пожалуйста, проверьте данные еще раз</div>
  </div>
);
