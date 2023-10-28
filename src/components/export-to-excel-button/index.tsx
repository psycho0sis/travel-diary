import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface IExportToExcelButton {
  onClick: () => void;
}

export const ExportToExcelButton: FC<IExportToExcelButton> = ({ onClick }) => (
  <Button className='mt-3' onClick={onClick} variant='dark'>
    Выгрузить в Excel
  </Button>
);
