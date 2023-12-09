import type { ChangeEvent } from 'react';

export interface IDatePicker {
  labelText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
