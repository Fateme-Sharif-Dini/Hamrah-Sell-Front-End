import Image from 'next/image';
import { LayoutTitlePage } from '../../_components/layout-title-page';
import { BreadCrumb } from '../../_components/breadcrumb';
import Link from 'next/link';
import SvgChevronLeft from '@/components/icons/chevron-left';

const lins: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: 'دستگاه‌ها',
    href: '/basic-specifications/devices',
  },
  {
    id: 2,
    title: 'دسته بندی‌‌ها',
    href: '/basic-specifications/categories',
  },
  {
    id: 3,
    title: 'برندها',
    href: '/basic-specifications/brands',
  },
  {
    id: 4,
    title: 'ویژگی گوشی',
    href: '/basic-specifications/feature',
  },
  {
    id: 5,
    title: 'تقسیم فروش',
    href: '/basic-specifications/sales-division',
  },
];

export default function BasicSpecificationsPage() {
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
        {lins.map(({ id, title, href }) => (
          <li key={id}>
            <Link
              href={href}
              className="border-black-white-50 flex items-center overflow-hidden rounded-lg border-2"
            >
              <Image
                src="/images/mobile-cart-image.png"
                width={192}
                height={100}
                className="h-[100px]"
                alt={title}
              />
              <div className="flex h-[100px] w-full flex-col justify-between">
                <div className="flex h-full items-center justify-between px-8 py-4">
                  <p className="font-bold text-[32pdx]">{title}</p>
                  <SvgChevronLeft className="text-black-white-50" />
                </div>
                <div className="bg-primary-300 h-8"></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
