import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

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
    <div id='error-page'>
      <h1>Упс</h1>
      <p>Такой страницы не существует</p>
    </div>
  );
};
