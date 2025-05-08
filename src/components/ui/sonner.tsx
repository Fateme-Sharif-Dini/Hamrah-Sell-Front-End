'use client';

import { cn } from '@/lib/utils';
// import { ExclamationMark } from '../icons/ExclamationMarkIcon';

interface CustomToastProps {
  title: string;
  description?: string;
  type?: 'error' | 'success';
}

export function CustomToaster({
  title,
  description,
  type = 'success',
}: CustomToastProps) {
  return (
    <div
      className={cn(
        'relative flex w-full max-w-sm items-center gap-5 pb-3 pl-9 pr-2 pt-2',
        type === 'error'
          ? 'bg-[var(--orange-300)] text-white'
          : 'bg-[var(--hamrah-green)] text-white'
      )}
    >
      <div>{/* <ExclamationMark className="h-[63px] w-[63px]" /> */}</div>
      <div className="flex-1 justify-center text-right">
        <div>{title}</div>
        {description && <div className="text-sm">{description}</div>}
      </div>
      <div className="absolute right-0 top-[78px] h-[2px] w-full bg-white" />
    </div>
  );
}
