'use client';
import React, { createRef, useEffect, useState } from 'react';
import TableComponent from './table-component';
import { ColumnType } from './table.types';
import TableCard from './table-card';
import { TableProvider } from './table-context';
import ProductPagination from './table-pagination';

type Props<T = unknown> = {
  dataSource: T[];
  columns: ColumnType[];
  skeleton?: boolean;
  card?: boolean;
  tableClassName?: string;
  headerItemClassName?: string;
  rowItemClassName?: string;
  onRowClick?: (record: any) => void;
  hideBars?: boolean;
  responsive?: boolean;
};

// export type DataSourceType = typeof dataSource;
export const tableContainerRef = createRef<HTMLDivElement | null>();
export default function Table({
  columns,
  dataSource,
  skeleton,
  onRowClick,
  card,
  headerItemClassName,
  rowItemClassName,
  hideBars,
  tableClassName,
  responsive = true,
}: Props) {
  // const { columns, dataSource, skeleton } = useTableContext();
  const [windowSize, setWindowSize] = useState<null | number>(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <TableProvider
      tableClassName={tableClassName}
      columns={columns}
      dataSource={dataSource}
      rowDataSource={dataSource}
      skeleton={skeleton}
      onRowClick={onRowClick}
      headerItemClassName={headerItemClassName}
      rowItemClassName={rowItemClassName}
    >
      <div className="h-full space-y-4">
        <div className="border-black-white-50 h-full overflow-hidden rounded-lg border-2">
          <div
            ref={tableContainerRef}
            className={`tableContainer group ${skeleton ? 'skeleton' : ''}`}
          >
            {(!card && (windowSize! > 768 || windowSize === null)) ||
            !responsive ? (
              <TableComponent
                hideBars={hideBars}
                // skeleton={skeleton}
                // columns={columns}
                // dataSource={dataSource}
                // rowDataSource={dataSource}
              />
            ) : (
              <TableCard
              // skeleton={skeleton}
              // columns={columns}
              // dataSource={dataSource}
              // rowDataSource={dataSource}
              />
            )}
          </div>
        </div>
        <ProductPagination />
      </div>
    </TableProvider>
  );
}
