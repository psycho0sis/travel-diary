import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { customizeDate } from 'helpers/customize-date';
import { selectAsyncExcursions } from 'store/features/excursions/excursions-selectors';
import type { IExcursion } from 'store/features/excursions/types';

export const useFilteredExcursions = (startDate: string, endDate: string) => {
  const [filteredExcursions, setFilteredExcursions] = useState<IExcursion[]>([]);
  const asyncExcursions = useSelector(selectAsyncExcursions);

  useEffect(() => {
    if (asyncExcursions) {
      setFilteredExcursions(
        asyncExcursions.filter(({ date }) => {
          const newDate = customizeDate(date);

          return newDate >= startDate && newDate <= endDate;
        })
      );
    }
  }, [asyncExcursions, startDate, endDate]);

  return { filteredExcursions };
};
