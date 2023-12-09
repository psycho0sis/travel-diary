import { type FC, useId } from 'react';
import Form from 'react-bootstrap/Form';

import { IInput } from './types';

import styles from './styles.module.scss';

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
