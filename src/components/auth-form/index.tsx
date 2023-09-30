import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { Input } from 'components/ui/input';
import { Title } from 'components/ui/title';
import { onFocus } from 'helpers/form-helpers';
import { useAuth } from 'hooks/use-auth';

import styles from './styles.module.scss';

export const AuthForm = () => {
  const {
    error,
    emailError,
    passwordError,
    email,
    password,
    onSubmit,
    onBlur,
    handleChangeEmail,
    handleChangeError,
  } = useAuth();

  if (error) {
    return (
      <Alert className='mt-3' variant='danger'>
        Извините, что-то пошло не так... Возможно такого пользователя не существует.
      </Alert>
    );
  }

  return (
    <>
      <Title fontSize={28}>Войдите в свой аккаунт</Title>
      <form className={styles.form}>
        <Input
          labelText='Email'
          value={email}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChangeEmail}
          type='email'
          placeholder='Электронная почта'
          error={emailError}
        />
        <Input
          labelText='Пароль'
          value={password}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChangeError}
          type='password'
          placeholder='Пароль'
          error={passwordError}
        />
        <div className='d-grid mt-3'>
          <Button variant={'dark'} size='lg' onClick={onSubmit}>
            Войти
          </Button>
        </div>
      </form>
    </>
  );
};
