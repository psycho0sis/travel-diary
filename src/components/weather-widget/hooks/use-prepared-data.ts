import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';

import type { IWeatherWidgetDataWithTimeZone } from '../../../store/features/weather-widget-data/types';
import { weatherImagesConfig } from '../config';

export const usePreparedData = (weatherData: IWeatherWidgetDataWithTimeZone | null) => {
  const [description, setDescription] = useState<string>('');
  const [humidity, setHumidity] = useState<string | number>('');
  const [speed, setSpeed] = useState<string | number>('');
  const [city, setCity] = useState<string>('');
  const [temp, setTemp] = useState<string | number>('');
  const [time, setTime] = useState<string>('');
  const [img, setImg] = useState<string>('');

  useEffect(() => {
    if (weatherData?.name) {
      setCity(weatherData.name);
    }

    if (weatherData?.weather) {
      const typeOfWeather = weatherData.weather[0]?.main || '';
      const descriptionOfWeather = weatherData?.weather[0]?.description || '';

      setImg(weatherImagesConfig[typeOfWeather as keyof typeof weatherImagesConfig]);
      setDescription(descriptionOfWeather);
    }

    if (weatherData?.main) {
      const humidity = weatherData.main.humidity || '';
      const temp = weatherData.main.temp || '';

      setHumidity(humidity);
      setTemp(temp);
    }

    if (weatherData?.wind) {
      const speed = weatherData.wind.speed || '';

      setSpeed(speed);
    }

    if (weatherData?.timeZone) {
      setTime(formatInTimeZone(new Date(), weatherData?.timeZone, 'HH:mm'));
    }
  }, [weatherData, weatherData?.timeZone]);

  return { city, description, humidity, img, temp, time, speed };
};
