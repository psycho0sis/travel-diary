import * as FileSaver from 'file-saver';
import { utils, write } from 'sheetjs-style';

import { prepareExcelData } from 'helpers/prepare-excel-data';

const FILE_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const FILE_EXTENSION = '.xlsx';

type TExportData = ReturnType<typeof prepareExcelData>;

export const useExportToExcel = (excelData: TExportData, fileName: string) => {
  const fileType = FILE_TYPE;
  const fileExtension = FILE_EXTENSION;

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return exportToExcel;
};
