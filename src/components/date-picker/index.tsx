import type { FC } from 'react';
import Form from 'react-bootstrap/Form';

import type { IDatePicker } from './types';

import styles from './styles.module.scss';

export const DatePicker: FC<IDatePicker> = ({ labelText, onChange, value }) => (
  <div className={styles.datePicker}>
    <Form.Group controlId='formDate' className='mb-3'>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control onChange={onChange} type='date' value={value} />
    </Form.Group>
  </div>
);
