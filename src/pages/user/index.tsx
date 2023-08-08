import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { endSession, getSession, isLoggedIn } from '../../session';

export const User = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }

    const session = getSession();
    session && setEmail(session.email as string);

    console.log('Your access token is: ' + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate('/login');
  };

  return (
    <div>
      <h6>You're logged in as:</h6>
      <h5>{email}</h5>
      <p>Check the console for your (access/session) token.</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};
