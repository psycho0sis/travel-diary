import { type FC, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import { ICustomAlert } from './types';

import styles from './styles.module.scss';

export const CustomAlert: FC<ICustomAlert> = ({ isShown, text, variant = 'danger' }) => {
  const [show, setShow] = useState(isShown);

  useEffect(() => {
    setShow(isShown);
  }, [isShown]);

  return (
    <Alert
      className={styles.alert}
      variant={variant}
      show={show}
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Извините, что-то пошло не так.</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};
