const pluralRules = new Intl.PluralRules('ru-Ru');

const getEnding = (n: number) => {
  return pluralRules.select(n);
};

export const checkRightPostfix = (amount: number) => {
  const ending = getEnding(amount);

  if (ending === 'one') {
    return 'комментарий';
  }

  if (ending === 'few') {
    return 'комментария';
  }

  return 'комментариев';
};
