import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { CustomAlert } from 'components/ui/alert';
import { Title } from 'components/ui/title';
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
    handleChangeEmail,
    handleChangePassword,
  } = useAuth();

  return (
    <Form onSubmit={onSubmit} className={styles.form}>
      <Title fontSize={28}>Войдите в свой аккаунт</Title>
      <Form.Group controlId='Email'>
        <Form.Label className={styles.label}>Email</Form.Label>
        <Form.Control
          isInvalid={error}
          onChange={handleChangeEmail}
          type='email'
          placeholder='Электронная почта'
          size='lg'
          value={email}
        />
      </Form.Group>
      <Form.Group controlId='Пароль'>
        <Form.Label className={styles.label}>Пароль</Form.Label>
        <Form.Control
          isInvalid={error}
          onChange={handleChangePassword}
          type='password'
          placeholder='Пароль'
          size='lg'
          value={password}
        />
      </Form.Group>

      <Button className='d-grid mt-3 mb-3' variant={'dark'} size='lg' type='submit'>
        Войти
      </Button>
      <CustomAlert
        isShown={error}
        text={emailError || passwordError || 'Возможно такого пользователя не существует.'}
      />
    </Form>
  );
};
