import type { ChangeEvent, FC } from 'react';
import Form from 'react-bootstrap/Form';

import './styles.scss';

interface IDatePicker {
  labelText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const DatePicker: FC<IDatePicker> = ({ labelText, onChange, value }) => (
  <div className='datePicker'>
    <Form.Group controlId='formDate' className='mb-3'>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control onChange={onChange} type='date' value={value} />
    </Form.Group>
  </div>
);
