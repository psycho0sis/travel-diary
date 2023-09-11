export const createPassword = (name: string, surname: string) => {
  return '123456' + name.slice(0, 1) + surname.slice(0, 1);
};
