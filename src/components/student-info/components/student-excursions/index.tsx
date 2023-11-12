import { type FC, useEffect, useState } from 'react';

import { DatePicker } from 'components/date-picker';
import { SortableTable } from 'components/table';
import { Title } from 'components/ui/title';
import type { IExcursion } from 'hooks/types';
import { useDates } from 'hooks/use-dates';
import { useFilteredExcursions } from 'hooks/use-filtered-excursions';
import { useGetCurrentUser } from 'hooks/use-get-current-user';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentExcursionsTable: FC<IStudentsExcursions> = ({ name, surname }) => {
  const [excursions, setExcursions] = useState<IExcursion[]>([]);
  const userName = `${name} ${surname}`;

  const { currentUser } = useGetCurrentUser(name, surname);
  const { handleStartDate, handleEndDate, startDate, endDate } = useDates();

  useEffect(() => {
    if (currentUser?.excursions) {
      setExcursions(currentUser.excursions);
    }
  }, [currentUser]);

  const { filteredExcursions } = useFilteredExcursions(excursions, startDate, endDate);

  return (
    <>
      <Title fontSize={22}>Посещенные экскурсии за выбранный период времени:</Title>

      <DatePicker
        labelText='Выберите начало периода: '
        onChange={handleStartDate}
        value={startDate}
      />
      <DatePicker labelText='Выберите конец периода: ' onChange={handleEndDate} value={endDate} />

      {excursions && (
        <>
          <SortableTable excursions={filteredExcursions} userName={userName} />
        </>
      )}
    </>
  );
};
