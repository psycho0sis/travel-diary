import { IExcursion } from 'hooks/types';

export const prepareExcelData = <T extends IExcursion>(excelData: T[]) =>
  excelData.map((excursion) => ({
    Дата: excursion.date,
    Маршрут: excursion.excursion,
  }));
