export const sortArrayByDate = <
  K extends Record<string, string | Record<string, string[] | number> | string[]>,
  T extends Record<string, K | string>,
>(
  arr: T[]
) => {
  const sortedArr = arr.sort((a, b) => {
    const dateA = typeof a.data === 'string' ? '' : a.data.date;
    const dateB = typeof b.data === 'string' ? '' : b.data.date;

    return dateA < dateB ? -1 : 1;
  });

  return sortedArr;
};
