import Image from 'next/image';
import { LayoutTitlePage } from '../../_components/layout-title-page';
import { BreadCrumb } from '../../_components/breadcrumb';
import { PageListCard } from '@/app/(main)/_components/page-list-card';

const lins: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: 'شرکت‌های نمایندگی',
    href: '/system/representative-companies',
  },
  {
    id: 2,
    title: 'فروشگاه‌ها',
    href: '/system/shops',
  },
  {
    id: 3,
    title: 'تامین کنندگان',
    href: '/system/suppliers',
  },
  {
    id: 4,
    title: 'مدیران سیستم',
    href: '/system/administrators',
  },
];

export default function SystemPage() {
  return (
    <div className="space-y-4 p-8">
      <div className="border-b-black-white-50 space-y-4 border-b pb-4">
        <div className="flex items-center justify-between gap-4">
          <LayoutTitlePage />
          <div>
            <Image
              src="/images/logo-colored.png"
              width={115}
              height={47}
              alt="MCI Colored Logo"
            />
          </div>
        </div>

        <BreadCrumb />
      </div>

      <ul className="space-y-4">
        {lins.map((item) => (
          <li key={item.id}>
            <PageListCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
