import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useAuth } from 'hooks/use-auth';

import { Title } from 'components/ui/title';

import './styles.scss';

export const AuthForm = () => {
  const [
    error,
    emailError,
    passwordError,
    email,
    password,
    onSubmit,
    onBlur,
    setEmail,
    setEmailError,
    setPassword,
    setPasswordError,
  ] = useAuth();

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.placeholder = '';

    return;
  };

  return (
    <>
      <Title fontSize={28}>Войдите в свой аккаунт</Title>
      <form className='form'>
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
        <div className='d-grid mt-3'>
          <Button variant={'dark'} size='lg' onClick={onSubmit}>
            Войти
          </Button>
        </div>

        {error && (
          <Alert className='mt-3' variant='danger'>
            Извините, что-то пошло не так/ Возможно такого пользователя не существует.
          </Alert>
        )}
      </form>
    </>
  );
};
