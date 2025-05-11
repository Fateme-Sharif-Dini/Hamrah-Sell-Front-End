import { FC } from 'react';
import { NoItemFoundProps } from './no-item-found.types';
import { IMAGE_CDN_URL } from '@/configs/global';
import classNames from 'classnames';
import Image from 'next/image';
const NoItemFound: FC<NoItemFoundProps> = ({
  className,
  textContent,
  imageWidth = 100,
  noIcon,
}) => {
  return (
    <div className={classNames(className)}>
      <div
        className={`fade-in-to-left speed-400 translate-space-10 -z-10 flex max-w-full flex-col items-center justify-center gap-5  `}
      >
        {!noIcon && (
          <Image
            className="img !size-40 md:!size-50  "
            height={200}
            width={200}
            src={`${IMAGE_CDN_URL}/public/images/404.svg`}
            alt={textContent || 'اطلاعاتی یافت نشد'}
          />
        )}
        <p className="text-base-400 font-semibold">
          {textContent || 'اطلاعاتی یافت نشد'}
        </p>
      </div>
    </div>
  );
};

export default NoItemFound;
