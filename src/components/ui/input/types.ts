import { FocusEvent, InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  labelText: string;
  value: string;
  onChange: (event: FocusEvent<HTMLInputElement>) => void;
}
