import { type FC, ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchWeatherWidgetData } from 'store/features/weather-widget-data/weather-widget-data-action';
import {
  selectAsyncStatus,
  selectAsyncWeatherWidgetData
} from 'store/features/weather-widget-data/weather-widget-data-selectors';
import { useAppDispatch } from 'store/hooks';

import { WeatherSkeleton } from './components/skeleton';
import { usePosition } from './hooks/use-position';
import { NoDataRoute } from './routes/no-data';
import { SuccessResponseRoute } from './routes/success-response';
import { WaitingForCityRoute } from './routes/waiting-for-city';
import { IFormFields, IWeatherWidget } from './types';

import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';

export const WeatherWidget: FC<IWeatherWidget> = () => {
  const [city, setCity] = useState('');
  const [value, setValue] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { position, navigatorError, navigatorPrompt, isPosition, cityFromLS } = usePosition();

  const dispatch = useAppDispatch();
  const asyncWeatherWidgetData = useSelector(selectAsyncWeatherWidgetData);
  const status = useSelector(selectAsyncStatus);

  useEffect(() => {
    if (cityFromLS) {
      setIsFirstRender(false);
      dispatch(fetchWeatherWidgetData({ position, city: cityFromLS }));
    }

    if (!cityFromLS && isPosition) {
      dispatch(fetchWeatherWidgetData({ position, city }));
    }
  }, [position, city]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement & IFormFields> = (event) => {
    event.preventDefault();

    const { city } = event.currentTarget;
    const cityValue = city.value;

    if (cityFromLS) {
      setIsFirstRender(false);
    }

    if (cityValue) {
      localStorage.setItem('city', cityValue);
      dispatch(fetchWeatherWidgetData({ position, city: cityValue }));
      setIsFirstRender(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => (e.target.placeholder = '');

  const handleBlur = () => {
    value && setCity(value);
    setIsFirstRender(false);
  };

  /**
   * Показываем лоадер:
   * - когда идет запрос
   * - когда браузер запрашивает разрешение на определение геолокации
   * - когда статус idle и нет гео ошибки
   * */
  const isLoaderShown =
    status === 'loading' || navigatorPrompt || (status === 'idle' && !navigatorError);

  if (isLoaderShown) {
    return <WeatherSkeleton />;
  }

  return (
    <div className={styles.weatherWidget}>
      <form onSubmit={handleSubmit}>
        <input
          name='city'
          className={styles.weatherInput}
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder='Введите город'
          onFocus={handleFocus}
        />
        <button type='submit' className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      {navigatorError && <WaitingForCityRoute />}

      {asyncWeatherWidgetData?.cod === '404' && <NoDataRoute name={asyncWeatherWidgetData.name} />}

      {asyncWeatherWidgetData?.cod === 200 && (
        <SuccessResponseRoute data={asyncWeatherWidgetData} isFirstRender={isFirstRender} />
      )}
    </div>
  );
};
