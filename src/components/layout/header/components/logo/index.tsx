import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from 'assets/logo.png';

import styles from './styles.module.scss';

export const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate('/')}>
      <img src={logo} alt='Дневник путешественника' />
      <div className={styles.logoText}>
        <h1>Дневник путешественника</h1>
      </div>
    </div>
  );
};
