import { IPosition } from 'store/features/weather-widget-data/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IWeatherWidget {}

export interface IFormFields {
  city: HTMLInputElement;
}

export type IUsePosition = () => {
  position: IPosition;
  navigatorError: boolean;
  navigatorPrompt: boolean;
  isPosition: boolean;
  cityFromLS: string | null;
};
