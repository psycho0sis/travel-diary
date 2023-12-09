import { type FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchWeatherWidgetData } from 'store/features/weather-widget-data/weather-widget-data-action';
import {
  selectAsyncStatus,
  selectAsyncWeatherWidgetData
} from 'store/features/weather-widget-data/weather-widget-data-selectors';
import { useAppDispatch } from 'store/hooks';

import { WeatherSkeleton } from './components/skeleton';
import { usePreparedData } from './hooks/use-prepared-data';

import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWeatherWidget {}

export const WeatherWidget: FC<IWeatherWidget> = () => {
  const [city, setCity] = useState('Вороново');
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const asyncWeatherWidgetData = useSelector(selectAsyncWeatherWidgetData);
  const status = useSelector(selectAsyncStatus);

  const {
    city: cityFromApi,
    description,
    humidity,
    img,
    speed,
    temp,
    time,
  } = usePreparedData(asyncWeatherWidgetData);

  useEffect(() => {
    dispatch(
      fetchWeatherWidgetData({
        city: city,
      })
    );
  }, [city]);

  if (status === 'loading') {
    return <WeatherSkeleton />;
  }

  return (
    <div className={styles.weatherWidget}>
      <input
        className={styles.weatherInput}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => value && setCity(value)}
        value={value}
        placeholder='Введите город'
        onFocus={(e) => (e.target.placeholder = '')}
      />
      <div className={styles.wrapper}>
        {asyncWeatherWidgetData && asyncWeatherWidgetData?.cod === '404' && (
          <div>
            <div>{asyncWeatherWidgetData.name}</div>
            <div>У нас нет данных по такому городу. Пожалуйста, проверьте данные еще раз</div>
          </div>
        )}
        {asyncWeatherWidgetData && asyncWeatherWidgetData?.cod === '400' && (
          <div>
            <div>Ведите какой-нибудь город...</div>
          </div>
        )}
        {asyncWeatherWidgetData && asyncWeatherWidgetData?.cod === 200 && (
          <>
            <div className={styles.widgetItem}>
              <div>{cityFromApi}</div>
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
          </>
        )}
      </div>
    </div>
  );
};
