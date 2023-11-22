import { type FC, useEffect, useState } from 'react';

import { DatePicker } from 'components/date-picker';
import { SortableTable } from 'components/table';
import { Title } from 'components/ui/title';
import { useDates } from 'hooks/use-dates';
import { useFilteredExcursions } from 'hooks/use-filtered-excursions';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { useSelector } from 'react-redux';
import { selectAsyncExcursions } from 'store/features/excursions/excursions-selectors';
import { useAppDispatch } from 'store/hooks';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentExcursionsTable: FC<IStudentsExcursions> = ({ name, surname }) => {
  const asyncExcursions = useSelector(selectAsyncExcursions);
  const userName = `${name} ${surname}`;
  const dispatch = useAppDispatch();

  const { handleStartDate, handleEndDate, startDate, endDate } = useDates();

  useEffect(() => {
    dispatch(fetchExcursions({ name, surname }));
  }, [name, surname]);

  const { filteredExcursions } = useFilteredExcursions(asyncExcursions || [], startDate, endDate);

  return (
    <>
      <div className='mt-4'>
        <Title fontSize={22}>Посещенные экскурсии за выбранный период времени:</Title>
      </div>

      <DatePicker
        labelText='Выберите начало периода: '
        onChange={handleStartDate}
        value={startDate}
      />
      <DatePicker labelText='Выберите конец периода: ' onChange={handleEndDate} value={endDate} />

      {asyncExcursions && (
        <>
          <SortableTable excursions={filteredExcursions} userName={userName} />
        </>
      )}
    </>
  );
};
