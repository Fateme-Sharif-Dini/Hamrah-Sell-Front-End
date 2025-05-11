'use client';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ColumnType, TableContextProps } from './table.types';

const TableContext = createContext<TableContextProps>({
  dataSource: [],
  rowDataSource: [],
  columns: [],
  scroll: { x: undefined },
});
const TableProvider: FC<{
  dataSource: unknown[];
  skeleton?: boolean;
  rowDataSource: unknown[];
  children: ReactNode;
  onRowClick?: (record: any) => void;
  columns: ColumnType[];
  setDataSource?: Dispatch<SetStateAction<unknown[]>>;
  scroll?: { x: number | undefined };
  headerItemClassName?: string;
  rowItemClassName?: string;
  tableClassName?: string;
}> = ({
  children,
  dataSource,
  columns,
  scroll,
  skeleton,
  onRowClick,
  headerItemClassName,
  rowItemClassName,
  tableClassName,
}) => {
  const [_dataSource, setDataSource] = useState<unknown[]>(dataSource);
  const [_columns, _setColumns] = useState<ColumnType[]>(columns);
  const [_skeleton, _setSkelton] = useState<boolean | undefined>(skeleton);
  useEffect(() => {
    setDataSource(dataSource);
  }, [dataSource]);
  return (
    <TableContext.Provider
      value={{
        dataSource: _dataSource,
        setDataSource,
        rowDataSource: dataSource,
        columns,
        scroll,
        skeleton,
        onRowClick,
        headerItemClassName,
        rowItemClassName,
        tableClassName,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

const useTableContext = () => {
  return useContext(TableContext);
};

export { useTableContext, TableProvider };
