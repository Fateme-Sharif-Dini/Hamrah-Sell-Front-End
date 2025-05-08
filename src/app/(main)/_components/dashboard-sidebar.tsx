'use client';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import SvgChevronDoubleRight from '@/components/icons/chevron-double-right';
import SvgBars4 from '@/components/icons/bars-4';

export const DashboardSidebar: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={classNames(
        'bg-primary-300 *:transition-all h-screen px-7 py-16 text-white transition-all duration-200',
        {
          open: open,
          close: !open,
        }
      )}
      style={{ width: open ? '379px' : '128px' }}
    >
      <div className="flex items-center justify-between">
        {!!open && (
          <p className="fade-in text-nowrap px-5 py-2.5 text-[20px] font-bold transition-all duration-200">
            | منوی کاربری
          </p>
        )}
        <Button onClick={() => setOpen(!open)} variant="white" size="xl">
          {!!open ? <SvgChevronDoubleRight /> : <SvgBars4 />}
        </Button>
      </div>
    </div>
  );
};
