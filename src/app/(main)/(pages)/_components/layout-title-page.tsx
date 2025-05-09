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
  };

  return (
    <p className="text-primary-300 text-[48px] font-bold">
      | <span>{title[pathname] ?? 'همراه اول'}</span>
    </p>
  );
};
