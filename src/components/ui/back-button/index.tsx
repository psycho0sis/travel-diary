import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IBackButton } from './types';

import styles from './styles.module.scss';

export const BackButton: FC<IBackButton> = ({ text, route, level }) => {
  const navigate = useNavigate();

  const linkButton = route && (
    <Link className={styles.backBtn} to={route}>
      {text}
    </Link>
  );

  const divButton = (
    <div className={styles.backBtn} onClick={() => navigate(level || -1)}>
      {text}
    </div>
  );

  return <div className={styles.backBtnWrapper}>{linkButton || divButton}</div>;
};
