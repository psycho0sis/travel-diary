import { Button } from 'react-bootstrap';
import * as FileSaver from 'file-saver';
import type { IExcursion } from 'hooks/types';
import { utils, write } from 'sheetjs-style';

export const ExportToExcelButton = ({
  excelData,
  fileName,
}: {
  excelData: IExcursion[];
  fileName: string;
}) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const prepareExcelData = (excelData: IExcursion[]) =>
    excelData.map((excursion) => ({
      Дата: excursion.date,
      Маршрут: excursion.excursion,
    }));

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(prepareExcelData(excelData));
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button className='mt-3' onClick={exportToExcel} variant='dark'>
      Выгрузить в Excel
    </Button>
  );
};
