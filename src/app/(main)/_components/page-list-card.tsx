import SvgChevronLeft from '@/components/icons/chevron-left';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type TPageListCard = { id: number; title: string; href: string };

export const PageListCard: FC<TPageListCard> = ({ id, title, href }) => {
  return (
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
  );
};
