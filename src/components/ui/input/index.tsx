import { type FC, type FocusEvent, InputHTMLAttributes,useId } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  labelText: string;
  value: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({
  error,
  labelText,
  value,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => {
  const inputId = useId() + labelText;

  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId}
        autoComplete='email'
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        type='email'
        placeholder='Электронная почта'
        className={cn(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errorText}>Введите значение</span>}
    </>
  );
};
