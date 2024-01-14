import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

import { BackButton } from 'components/ui/back-button';

import styles from './styles.module.scss';

interface IError {
  statusText: string;
  message: string;
}
export const ErrorPage = () => {
  const error = useRouteError() as IError;

  useEffect(() => {
    console.error(error.statusText || error.message);
  }, []);

  return (
    <div id='error-page' className={styles.errorPage}>
      <h1>Упс</h1>
      <p>Такой страницы не существует. Но вы можете вернуться назад</p>
      <BackButton text='Вернуться назад' />
      <div>
        <img
          className={styles.image}
          src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/%E2%80%94Pngtree%E2%80%94error%20404%20page%20not%20found_6501259.png?alt=media&token=1ca7dd4a-3968-4f97-b99e-81d86928b81a'
          alt='Page not found'
        />
      </div>
    </div>
  );
};
