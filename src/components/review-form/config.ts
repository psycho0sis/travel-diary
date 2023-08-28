export const checkRightForm = (amount = 0) => {
  if (amount === 0 || amount > 5) {
    return 'комментариев';
  } else if (amount !== 1 && amount <= 4) {
    return 'комментария';
  } else {
    return 'комментарий';
  }
};
