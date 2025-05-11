import { ColumnType } from '@/components/table/table.types';

export const categoryColumns: ColumnType[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'کد دسته بندی',
    align: 'center',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'نام دسته',
    align: 'center',
  },
  {
    key: 'count',
    dataIndex: 'count',
    title: 'تعداد دستگاه',
    align: 'center',
  },
];

export const categoryDataSource = [
  { id: '101', name: 'گوشی', count: 12 },
  { id: '102', name: 'هدفون', count: 20 },
  { id: '103', name: 'پاوربانک', count: 5 },
  { id: '104', name: 'هندزفری', count: 2 },
  { id: '105', name: 'ساعت هوشمند', count: 1 },
];
