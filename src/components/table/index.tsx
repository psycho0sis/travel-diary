/* eslint-disable */

import { BiSortAlt2, BiSortDown, BiSortUp } from 'react-icons/bi';
import {
  Column,
  SortByFn,
  UseFiltersColumnOptions,
  UseGlobalFiltersColumnOptions,
  UseGroupByColumnOptions,
  useSortBy,
  UseSortByColumnOptions,
  useTable,
} from 'react-table';

import { IExcursion } from 'hooks/types';

import './styles.scss';

declare module 'react-table' {
  export interface ColumnInterface<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseGlobalFiltersColumnOptions<D>,
      UseGroupByColumnOptions<D>,
      UseResizeColumnsColumnOptions<D>,
      UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnProps<D>,
      UseGroupByColumnProps<D>,
      UseResizeColumnsColumnProps<D>,
      UseSortByColumnProps<D> {}

  export interface Cell<D extends object = {}, V = any>
    extends UseGroupByCellProps<D>,
      UseRowStateCellProps<D> {}

  export interface Row<D extends object = {}>
    extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D>,
      UseRowStateRowProps<D> {}
}

// определения колонок
export const columns: Column<Omit<IExcursion, 'id'>>[] = [
  {
    Header: 'Дата',
    accessor: 'date',
    sortType: 'string',
  },
  {
    Header: 'Путешествие',
    accessor: 'excursion',
    sortType: 'string',
  },
];

// типы сортировки
const sortTypes: Record<string, SortByFn<any>> = {
  // перезаписывает встроенный тип `string`
  string: (rowA, rowB, columnId, desc) => {
    const [a, b] = [rowA.values[columnId], rowB.values[columnId]] as [string, string];

    return a.localeCompare(b, 'en');
  },
};

export const Sortable = ({ excursions }: { excursions: any }) => {
  // создаем экземпляр таблицы
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: excursions },
    useSortBy
  );

  return (
    <>
      <div className='table-wrapper'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hG) => (
              <tr {...hG.getHeaderGroupProps()}>
                {hG.headers.map((col) => (
                  <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                    {col.render('Header')}{' '}
                    {col.canSort && (
                      <span>
                        {col.isSorted ? (
                          col.isSortedDesc ? (
                            <BiSortUp />
                          ) : (
                            <BiSortDown />
                          )
                        ) : (
                          <BiSortAlt2 />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
