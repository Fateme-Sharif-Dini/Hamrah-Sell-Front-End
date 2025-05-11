import SvgEye from '@/components/icons/eye';
import { ColumnType } from '@/components/table/table.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const columns: ColumnType[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'کد دستگاه',
    align: 'center',
  },
  {
    key: 'category',
    dataIndex: 'category',
    title: 'دسته بندی',
    align: 'center',
  },
  {
    key: 'brand',
    dataIndex: 'brand',
    title: 'برند',
    align: 'center',
  },
  {
    key: 'model',
    dataIndex: 'model',
    title: 'مدل',
    align: 'center',
  },
  {
    key: 'color',
    dataIndex: 'color',
    title: 'رنگ',
    align: 'center',
  },
  {
    key: 'ram',
    dataIndex: 'ram',
    title: 'رم',
    align: 'center',
  },
  {
    key: 'memory',
    dataIndex: 'memory',
    title: 'حافظه',
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
  {
    key: 'status',
    dataIndex: 'status',
    title: 'وضعیت',
    align: 'center',
    render: (value: string) => (
      <span style={{ color: value === 'فعال' ? 'green' : 'red' }}>
        ● {value}
      </span>
    ),
  },
  {
    key: 'privatePage',
    title: 'صفحه اختصاصی',
    align: 'center',
    render: (_, record: any) => (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="text-primary-400 border-primary-400"
      >
        <div className="flex items-center gap-2">
          <SvgEye />
          <Link href={`/basic-specifications/devices/edit/${record.id}`}>
            مشاهده
          </Link>
        </div>
      </Button>
    ),
  },
];

export const dataSource = [
  {
    id: '5685',
    category: 'گوشی',
    brand: 'شیائومی',
    model: 'Poco X4 Pro',
    color: 'مشکی',
    ram: '8',
    memory: '256',
    pack: 'گلوبال',
    network: '5G',
    status: 'فعال',
  },
  {
    id: '5963',
    category: 'هدفون',
    brand: 'QCY',
    model: 'T13 ANC',
    color: 'سفید',
    ram: '',
    memory: '',
    pack: '',
    network: '',
    status: 'غیرفعال',
  },
];
