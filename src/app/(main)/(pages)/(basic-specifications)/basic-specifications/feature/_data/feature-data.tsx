import { ColumnType } from '@/components/table/table.types';

export const featureColumns: ColumnType[] = [
  {
    key: 'feature',
    dataIndex: 'feature',
    title: 'حافظه (گیگابایت)',
    align: 'center',
  },
  {
    key: 'ram',
    dataIndex: 'ram',
    title: 'رم (گیگابایت)',
    align: 'center',
  },
  {
    key: 'color',
    dataIndex: 'color',
    title: 'رنگ',
    align: 'center',
  },
  {
    key: 'pack',
    dataIndex: 'pack',
    title: 'پک',
    align: 'center',
  },
  {
    key: 'network',
    dataIndex: 'network',
    title: 'شبکه',
    align: 'center',
  },
];

export const featureDataSource = [
  { feature: 16, ram: 2, color: 'مشکی', pack: 'گلوبال', network: '3G' },
  { feature: 32, ram: 3, color: 'سفید', pack: 'ویتنام', network: '4G' },
  { feature: 64, ram: 4, color: 'نقره ای', pack: 'چین', network: '5G' },
  { feature: 128, ram: 6, color: 'خاکستری', pack: 'هند', network: '4G' },
  { feature: 256, ram: 8, color: 'آبی', pack: 'امارات', network: '' },
  { feature: 512, ram: 12, color: 'طلایی', pack: 'اروپا', network: '' },
  { feature: 1024, ram: 16, color: 'سبز', pack: 'آمریکا', network: '' },
  {
    feature: 2048,
    ram: undefined,
    color: 'قرمز',
    pack: 'کره جنوبی',
    network: '',
  },
  {
    feature: undefined,
    ram: undefined,
    color: 'بنفش',
    pack: 'ژاپن',
    network: '',
  },
  { feature: undefined, ram: undefined, color: 'زرد', pack: '', network: '' },
  { feature: undefined, ram: undefined, color: 'صورتی', pack: '', network: '' },
];
