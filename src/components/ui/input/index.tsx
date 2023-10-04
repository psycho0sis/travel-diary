import { type FC, type FocusEvent, InputHTMLAttributes, useId } from 'react';
import Form from 'react-bootstrap/Form';

import styles from './styles.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  labelText: string;
  value: string;
  onChange: (event: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({ error, labelText, value, onChange, size, ...props }) => {
  const id = labelText + useId();

  return (
    <Form.Group controlId={id}>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control value={value} onChange={onChange} isValid={error} {...props} />
      {error && <span className={styles.errorText}>Введите значение</span>}
    </Form.Group>
  );
};
