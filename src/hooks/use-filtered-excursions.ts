import { useEffect, useState } from 'react';
import { customizeDate } from 'helpers/customize-date';
import type { IExcursion } from 'hooks/types';

export const useFilteredExcursions = (
  excursions: IExcursion[],
  startDate: string,
  endDate: string
) => {
  const [filteredExcursions, setFilteredExcursions] = useState<IExcursion[]>(excursions);

  useEffect(() => {
    setFilteredExcursions(excursions);
  }, [excursions]);

  useEffect(() => {
    setFilteredExcursions(
      excursions.filter(({ date }) => {
        const newDate = customizeDate(date);

        return newDate >= startDate && newDate <= endDate;
      })
    );
  }, [startDate, endDate]);

  return { filteredExcursions };
};
