'use client';

import SvgArrowLeft from '@/components/icons/arrow-left';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';

export const BreadCrumb = () => {
  /**
   * Hooks
   */
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Logic
   */
  const title: Record<string, string[]> = {
    '/basic-specifications': ['مشخصات پایه کالا', 'منوی داخلی'],
    '/basic-specifications/devices': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'دستگاه‌ها',
    ],
    '/basic-specifications/categories': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'دسته بندی‌‌ها',
    ],
    '/basic-specifications/brands': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'برندها',
    ],
    '/basic-specifications/feature': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'ویژگی گوشی',
    ],
    '/basic-specifications/sales-division': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'تقسیم فروش',
    ],

    '/system': ['اجزای سیستم', 'منوی داخلی'],
    '/system/representative-companies': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'شرکت‌های نمایندگی',
    ],
    '/system/shops': ['مشخصات پایه کالا', 'منوی داخلی', 'فروشگاه‌ها'],
    '/system/suppliers': ['مشخصات پایه کالا', 'منوی داخلی', 'تامین کنندگان'],
    '/system/administrators': [
      'مشخصات پایه کالا',
      'منوی داخلی',
      'مدیران سیستم',
    ],
    '/reports': ['گزارش‌ها', 'منوی داخلی'],
  };

  return (
    !!title[pathname] && (
      <div className="flex items-center justify-between gap-4">
        <p className="border-black-white-50 text-black-white-300 grow rounded-lg border-2 px-6 py-1.5">
          {title[pathname].join(' / ')}
        </p>
        <Button variant="outline" onClick={router.back} className="!py-4.5">
          <SvgArrowLeft />
        </Button>
      </div>
    )
  );
};
