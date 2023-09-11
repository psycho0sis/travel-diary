export const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  event.target.placeholder = '';

  return;
};
