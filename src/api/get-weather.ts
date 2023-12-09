import { API_KEY } from 'constants/index';

export const getWeather = async (city: string) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
