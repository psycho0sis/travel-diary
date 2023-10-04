import { type FocusEvent, type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInUser } from '../firebase';
import { isLoggedIn, startSession } from '../session';

export const useAuth = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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

    if (!email && !password) {
      setError(true);
      setEmailError('Заполните поле емейла');
      setPasswordError('Заполните поле пароля');

      return;
    }

    try {
      const loginResponse = await signInUser(email, password);

      startSession(loginResponse.user);
      navigate('/user');
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes('auth/wrong-password')) {
          console.error(error.message);
          setError(true);
          setEmailError('Email не валиден');
          setPasswordError('Неверный пароль');
        }
        setError(true);
      }
    }
  };

  const handleChangeEmail = (event: FocusEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleChangePassword = (event: FocusEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  return {
    error,
    emailError,
    passwordError,
    email,
    password,
    onSubmit,
    handleChangeEmail,
    handleChangePassword,
  };
};
