import { ChangeEvent, useState } from 'react';
import { customizeDate } from 'helpers/customize-date';

export const useDates = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(customizeDate(new Date().toLocaleDateString()));

  const handleStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDate = (event: ChangeEvent<HTMLInputElement>) => setEndDate(event.target.value);

  return {
    startDate,
    handleStartDate,
    endDate,
    handleEndDate,
  };
};
