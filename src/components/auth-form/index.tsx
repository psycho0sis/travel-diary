import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from 'components/ui/title';

import { signInUser } from '../../firebase';
import { isLoggedIn, startSession } from '../../session';

import './styles.scss';

export const AuthForm = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/user');
    }
  }, [navigate]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email) {
      setEmailError(true);

      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    setEmailError(false);
    setPasswordError(false);

    try {
      const loginResponse = await signInUser(email, password);

      startSession(loginResponse.user);
      navigate('/user');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(true);
      }
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value && event.target.type === 'email') {
      setEmailError(true);
    } else if (!event.target.value && event.target.type === 'password') {
      setPasswordError(true);
    }

    return;
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.placeholder = '';

    return;
  };

  return (
    <>
      <Title fontSize={28}>Войдите в свой аккаунт</Title>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit} className='form'>
        <label className='form__label'>Email</label>
        <input
          autoComplete='email'
          value={email}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          type='email'
          placeholder='Электронная почта'
          className={emailError ? 'form__input form__input--error' : 'form__input'}
        />
        {emailError && <span className='form__error-text'>Введите значение</span>}
        <label className='form__label'>Пароль</label>
        <input
          type='password'
          autoComplete='new-password'
          value={password}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          placeholder='Пароль'
          className={passwordError ? 'form__input form__input--error' : 'form__input'}
        />
        {passwordError && <span className='form__error-text'>Введите значение</span>}
        <button
          type='submit'
          className={emailError || emailError ? 'form__button form__button--error' : 'form__button'}
        >
          Войти
        </button>
      </form>
    </>
  );
};
