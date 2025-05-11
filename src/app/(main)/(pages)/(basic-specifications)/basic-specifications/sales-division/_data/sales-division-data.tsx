import SvgPencilSquare from '@/components/icons/pencil-square';
import { ColumnType } from '@/components/table/table.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const distributionColumns: ColumnType[] = [
  {
    key: 'categoryId',
    dataIndex: 'categoryId',
    title: 'کد دسته بندی',
    align: 'center',
  },
  {
    key: 'category',
    dataIndex: 'category',
    title: 'دسته بندی',
    align: 'center',
  },
  {
    key: 'programId',
    dataIndex: 'programId',
    title: 'کد برنامه تقسیم فعال',
    align: 'center',
  },
  {
    key: 'createdAt',
    dataIndex: 'createdAt',
    title: 'زمان ثبت',
    align: 'center',
  },
  {
    key: 'supplierShare',
    dataIndex: 'supplierShare',
    title: 'سهم تامین کننده',
    align: 'center',
  },
  {
    key: 'storeShare',
    dataIndex: 'storeShare',
    title: 'سهم فروشگاه',
    align: 'center',
  },
  {
    key: 'hamrahAvalShare',
    dataIndex: 'hamrahAvalShare',
    title: 'سهم همراه اول',
    align: 'center',
  },
  {
    key: 'action',
    title: 'سهم همراه اول',
    align: 'center',
    render: (_, record: any) => (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="text-primary-400 border-primary-400"
      >
        <div className="flex items-center gap-2">
          <SvgPencilSquare />
          <Link href={`/basic-specifications/sales-division/edit/${record.id}`}>
            تغییر برنامه
          </Link>
        </div>
      </Button>
    ),
  },
];

export const distributionDataSource = [
  {
    categoryId: '101',
    category: 'گوشی',
    programId: '122',
    createdAt: '1402/02/22 - 21:50:33',
    supplierShare: '80%',
    storeShare: '14%',
    hamrahAvalShare: '6%',
  },
  {
    categoryId: '102',
    category: 'هدفون',
    programId: '124',
    createdAt: '1402/02/22 - 21:50:33',
    supplierShare: '80%',
    storeShare: '15%',
    hamrahAvalShare: '5%',
  },
  {
    categoryId: '103',
    category: 'پاوربانک',
    programId: '128',
    createdAt: '1402/02/22 - 21:50:33',
    supplierShare: '80%',
    storeShare: '15%',
    hamrahAvalShare: '5%',
  },
  {
    categoryId: '104',
    category: 'هندزفری',
    programId: '130',
    createdAt: '1402/02/22 - 21:50:33',
    supplierShare: '95%',
    storeShare: '3%',
    hamrahAvalShare: '2%',
  },
  {
    categoryId: '105',
    category: 'ساعت هوشمند',
    programId: '111',
    createdAt: '1402/02/22 - 21:50:33',
    supplierShare: '88%',
    storeShare: '6%',
    hamrahAvalShare: '6%',
  },
];
