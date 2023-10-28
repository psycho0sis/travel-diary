import { useRef, type FC } from 'react';
import { BiSortAlt2, BiSortDown, BiSortUp } from 'react-icons/bi';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Column, useSortBy, useTable } from 'react-table';

import type { IExcursion } from 'hooks/types';
import { useDownloadToExcel } from 'hooks/use-download-to-ecxel';

import { ISortableTable } from './types';

import styles from './styles.module.scss';
import { ExportToExcelButton } from 'components/export-to-excel-button';

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

export const SortableTable: FC<ISortableTable> = ({ excursions, userName }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: excursions },
    useSortBy
  );

  console.log(userName);

  const { tableRef, onDownload } = useDownloadToExcel(userName);

  return (
    <div className={styles.tableWrapper}>
      <table ref={tableRef} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
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

      <ExportToExcelButton onClick={onDownload} />
    </div>
  );
};
