'use client';

import { usePathname } from 'next/navigation';

export const BreadCrumb = () => {
  /**
   * Hooks
   */
  const pathname = usePathname();

  /**
   * Logic
   */
  const title: Record<string, string[]> = {
    '/basic-specifications': ['مشخصات پایه کالا', 'منوی داخلی'],
  };

  return (
    !!title[pathname] && (
      <p className="border-black-white-50 text-black-white-300 rounded-lg border px-6 py-1.5">
        {title[pathname].join(' / ')}
      </p>
    )
  );
};
