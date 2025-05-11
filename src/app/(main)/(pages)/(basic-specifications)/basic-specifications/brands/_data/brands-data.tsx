import { ColumnType } from '@/components/table/table.types';

export const brandColumns: ColumnType[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'کد برند',
    align: 'center',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'برند',
    align: 'center',
  },
  {
    key: 'count',
    dataIndex: 'count',
    title: 'تعداد دستگاه‌ها',
    align: 'center',
  },
];

export const brandDataSource = [
  { id: '101', name: 'شیائومی', count: 12 },
  { id: '102', name: 'سامسونگ', count: 20 },
  { id: '103', name: 'اپل', count: 5 },
  { id: '104', name: 'هواوی', count: 2 },
  { id: '105', name: 'سونی', count: 1 },
];
