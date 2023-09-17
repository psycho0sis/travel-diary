import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInUser } from '../firebase';
import { isLoggedIn, startSession } from '../session';

export const useAuth = () => {
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

  return {
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
  };
};
