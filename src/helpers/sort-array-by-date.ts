export const sortArrayByDate = <T extends Record<string, number | string>>(arr: T[]) => {
  const sortedArr = arr.sort((a, b) => (a.date < b.date ? -1 : 1));

  return sortedArr;
};
