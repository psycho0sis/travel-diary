import { useRef } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

export const useDownloadToExcel = (userName: string) => {
  const tableRef: React.MutableRefObject<null> = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `${userName} - Посещенные экскурсии`,
    sheet: 'Users',
  });

  return { tableRef, onDownload };
};
