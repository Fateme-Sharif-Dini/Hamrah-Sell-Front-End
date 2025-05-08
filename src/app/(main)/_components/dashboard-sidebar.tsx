'use client';

import { FC, ReactElement, useState } from 'react';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import SvgChevronDoubleRight from '@/components/icons/chevron-double-right';
import SvgBars4 from '@/components/icons/bars-4';
import SvgHome from '@/components/icons/home';
import SvgDeviceTablet from '@/components/icons/device-tablet';
import SvgUserGroup from '@/components/icons/user-group';
import SvgDocumentChartBar from '@/components/icons/document-chart-bar';
import SvgArrowRightStartOnRectangle from '@/components/icons/arrow-right-start-on-rectangle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SvgLogoB2 from '@/components/icons/logo-b2';
import SvgClock from '@/components/icons/clock';
import SvgCalendar from '@/components/icons/calendar';

type Menu = {
  id: number;
  title: string;
  icon: ReactElement;
  href: string;
  action?: () => void;
};

const menus: Menu[] = [
  {
    id: 1,
    title: 'صفحه اصلی',
    icon: <SvgHome />,
    href: '/',
  },
  {
    id: 1,
    title: 'مشخصات پایه کالا',
    icon: <SvgDeviceTablet />,
    href: '/basic-specifications',
  },
  {
    id: 1,
    title: 'اجزای سیستم',
    icon: <SvgUserGroup />,
    href: '/system',
  },
  {
    id: 1,
    title: 'گزارش‌ها',
    icon: <SvgDocumentChartBar />,
    href: '/reports',
  },
  {
    id: 1,
    title: 'خروج از حساب کاربری',
    icon: <SvgArrowRightStartOnRectangle />,
    href: '/button-logout',
    action: () => {},
  },
];

export const DashboardSidebar: FC = () => {
  const [open, setOpen] = useState(true);
  const pathName = usePathname();
  return (
    <div
      className={classNames(
        'bg-primary-300 *:transition-all flex h-screen flex-col justify-between px-7 py-16 text-white transition-all duration-200',
        {
          open: open,
          close: !open,
        }
      )}
      style={{ width: open ? '379px' : '128px' }}
    >
      <div className="space-y-4">
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

        <ul className="space-y-4">
          {menus.map(({ id, title, icon, href, action }) => {
            const isActive = href === pathName;
            return (
              <li key={id}>
                <Button
                  size="xl"
                  variant={isActive ? 'secondary' : 'white'}
                  className="flex w-full items-center justify-start gap-1"
                  asChild={!action}
                >
                  {!action ? (
                    <Link href={href}>
                      {icon}
                      {!!open && <span className="font-bold">{title}</span>}
                    </Link>
                  ) : (
                    <div className="[&>svg]:size-8 flex w-full items-center justify-start gap-1">
                      {icon}
                      {!!open && <span className="font-bold">{title}</span>}
                    </div>
                  )}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      {!!open && (
        <div className="space-y-8">
          <div>
            <SvgLogoB2 className="m-auto h-[71px] w-[173px]" />
          </div>
          <div className="*:bg-primary-75 *:text-black *:rounded-full *:px-4 *:py-1.5 *:flex *:items-center *:gap-1 space-y-4">
            <div>
              <SvgClock />
              <p className="font-bold">ساعت: 20:30 </p>
            </div>
            <div>
              <SvgCalendar />
              <p className="font-bold">تاریخ: 20 اردیبهشت 1403</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
