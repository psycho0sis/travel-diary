import { Form, Field } from 'react-final-form';

import './styles.scss';
import { useEffect, useRef } from 'react';

export const UserForm = () => {
  const onSubmit = (values) => console.log(values);

  const handleFocus = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    inputElement.placeholder = '';
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <Form
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onSubmit}
      //   validate={validate}
      render={({ handleSubmit }) => (
        <form className='form' onSubmit={handleSubmit}>
          <label className='form__label'>Имя пользователя</label>
          <Field
            ref={ref}
            name='username'
            component='input'
            type='text'
            placeholder='Имя'
            onFocus={handleFocus}
          />
          <label className='form__label'>Пароль</label>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='Пароль'
            onFocus={handleFocus}
          />
          <button type='submit'>Войти</button>
        </form>
      )}
    />
  );
};
