import { API_KEY } from 'constants/index';
import { IPosition, IWeatherAPIData } from 'store/features/weather-widget-data/types';

export const getWeather = async (city: string) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data: IWeatherAPIData = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const getWeatherInCurrentUserLocation = async ({ lat, lon }: IPosition) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat || ''}&lon=${lon || ''}&appid=${API_KEY}&units=metric&lang=ru`;
    const res = await fetch(url);
    const data: IWeatherAPIData = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
