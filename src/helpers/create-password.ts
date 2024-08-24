import { DEFAULT_PASSWORD_PREFIX } from 'constants/index';

export const createPassword = (name: string, surname: string) =>
  DEFAULT_PASSWORD_PREFIX +
  name.slice(0, 1).toLocaleLowerCase() +
  surname.slice(0, 1).toLocaleLowerCase();
