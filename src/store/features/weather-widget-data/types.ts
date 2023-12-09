import type { Status } from 'store/types';

export interface IWeatherAPIData {
  cod?: number | string;
  coord?: { lon?: number; lat?: number };
  message?: string;
  main?: {
    humidity?: number;
    temp?: number;
  };
  name: string;
  weather?: { main?: string; description?: string }[];
  wind?: { speed?: number };
}

export interface IWeatherWidgetDataWithTimeZone extends IWeatherAPIData {
  timeZone: string;
}

export interface IWeatherWidgetDataSlice {
  status: Status;
  asyncWeatherWidgetData: IWeatherWidgetDataWithTimeZone | null;
}
