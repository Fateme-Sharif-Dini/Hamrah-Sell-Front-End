import { Dispatch, ReactNode, SetStateAction } from 'react';
export type ColumnType = {
  dataIndex?: string;
  key: string;
  title: ReactNode;
  align?: 'center' | 'right' | 'left';
  className?: string;
  headClassName?: string;
  rowClassName?: string;
  filters?: { text: string; value: string }[];
  render?: (item: any, record?: any, index?: number) => ReactNode;
  searchComponent?: ((searchValue: string) => any[]) | boolean;
  onSearch?: () => void;
  sort?: boolean;
  onSort?: () => void;
};

export type TableContextProps = {
  dataSource?: unknown[];
  rowDataSource?: unknown[];
  setDataSource?: Dispatch<SetStateAction<unknown[]>>;
  columns?: ColumnType[];
  scroll?: { x: number | undefined };
  skeleton?: boolean;
  onRowClick?: (record: any) => void;
  headerItemClassName?: string;
  rowItemClassName?: string;
  tableClassName?: string;
  hideBars?: boolean;
};
