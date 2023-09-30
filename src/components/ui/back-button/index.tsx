import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

interface IBackButton {
  text: string;
  route?: string;
}

export const BackButton: FC<IBackButton> = ({ text, route }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.backBtnWrapper}>
      {route ? (
        <Link className={styles.backBtn} to={route}>
          {text}
        </Link>
      ) : (
        <div className={styles.backBtn} onClick={() => navigate(-1)}>
          {text}
        </div>
      )}
    </div>
  );
};
