import type { FC } from 'react';

import type { IWeatherWidgetDataWithTimeZone } from 'store/features/weather-widget-data/types';

import { usePreparedData } from '../hooks/use-prepared-data';

import styles from '../styles.module.scss';

interface ISuccessResponseRoute {
  data: IWeatherWidgetDataWithTimeZone | null;
  isFirstRender: boolean;
}
export const SuccessResponseRoute: FC<ISuccessResponseRoute> = ({ data, isFirstRender }) => {
  const { city, description, humidity, img, speed, temp, time } = usePreparedData(data);

  return (
    <div className={styles.wrapper}>
      {isFirstRender && <div className={styles.geo}>Ваше местоположение:</div>}{' '}
      <div className={styles.widgetItem}>
        <div>{city}</div>
        <div>{time}</div>
      </div>
      <div className={styles.content}>
        <img src={img} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.widgetItem}>
        <div>Влажность</div>
        <div>{humidity}%</div>
      </div>
      <div className={styles.widgetItem}>
        <div>Температура</div>
        <div>{temp}°</div>
      </div>
      <div className={styles.widgetItem}>
        <div>Ветер</div>
        <div>{speed} км/ч</div>
      </div>
    </div>
  );
};
