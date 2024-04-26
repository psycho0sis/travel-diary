import { type FC, memo, useEffect } from 'react';

import { DatePicker } from 'components/date-picker';
import { SortableTable } from 'components/table';
import { Title } from 'components/ui/title';
import { useDates } from 'hooks/use-dates';
import { useFilteredExcursions } from 'hooks/use-filtered-excursions';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { useAppDispatch } from 'store/hooks';

import { IStudentsExcursions } from '../../types';

export const StudentExcursionsTable: FC<IStudentsExcursions> = memo(({ name, surname }) => {
  const userName = `${name} ${surname}`;
  const dispatch = useAppDispatch();

  const { handleStartDate, handleEndDate, startDate, endDate } = useDates();

  useEffect(() => {
    dispatch(fetchExcursions({ name, surname }));
  }, [name, surname]);

  const { filteredExcursions } = useFilteredExcursions(startDate, endDate);

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

      {filteredExcursions && (
        <>
          <SortableTable excursions={filteredExcursions} userName={userName} />
        </>
      )}
    </>
  );
});
