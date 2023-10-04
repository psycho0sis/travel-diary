import { Button } from 'react-bootstrap';

import { prepareExcelData } from 'helpers/prepare-excel-data';
import type { IExcursion } from 'hooks/types';
import { useExportToExcel } from 'hooks/use-export-to-excel';

export const ExportToExcelButton = ({
  excelData,
  fileName,
}: {
  excelData: IExcursion[];
  fileName: string;
}) => {
  const exportToExcel = useExportToExcel(prepareExcelData(excelData), fileName);

  return (
    <Button className='mt-3' onClick={exportToExcel} variant='dark'>
      Выгрузить в Excel
    </Button>
  );
};
