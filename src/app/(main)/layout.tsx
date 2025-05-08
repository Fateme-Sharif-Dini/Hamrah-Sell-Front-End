import { PropsWithChildren } from 'react';
import { DashboardSidebar } from './_components/dashboard-sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="m-auto flex w-full max-w-[1920px]">
      <div>
        <DashboardSidebar />
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}
