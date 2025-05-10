'use client';

import { FC } from 'react';
import { SearchBox } from './search-box';
import SvgFunnel from '@/components/icons/funnel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SvgPlus from '@/components/icons/plus';

type Props = {
  url: string;
};

export const LayoutActionBar: FC<Props> = ({ url }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <SearchBox />
      <div className="flex items-center justify-between gap-4">
        <div className="border-primary-200 bg-primary-50 h-12 rounded-lg border px-11 py-3">
          <SvgFunnel className="!size-6" />
        </div>
        <Button
          asChild
          variant="primary"
          className="flex h-12 items-center gap-3 rounded-lg !px-10"
        >
          <Link href={url}>
            <SvgPlus />
            <span>اضافه کردن</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
