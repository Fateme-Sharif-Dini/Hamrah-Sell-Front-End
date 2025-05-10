'use client';

import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const LayoutTitlePage: FC = () => {
  /**
   * Hooks
   */
  const pathname = usePathname();

  /**
   * Logic
   */
  const title: Record<string, string> = {
    '/basic-specifications': 'مشخصات پایه کالا',
    '/basic-specifications/devices': 'دستگاه‌ها',
    '/basic-specifications/categories': 'دسته بندی‌‌ها',
    '/basic-specifications/brands': 'برندها',
    '/basic-specifications/feature': 'ویژگی گوشی',
    '/basic-specifications/sales-division': 'تقسیم فروش',
    '/system': 'اجزای سیستم',
    '/system/representative-companies': 'شرکت‌های نمایندگی',
    '/system/shops': 'فروشگاه‌ها',
    '/system/suppliers': 'تامین کنندگان',
    '/system/administrators': 'مدیران سیستم',
    '/reports': 'گزارش‌ها',
  };

  return (
    <p className="text-primary-300 text-[48px] font-bold">
      | <span>{title[pathname] ?? 'همراه اول'}</span>
    </p>
  );
};
