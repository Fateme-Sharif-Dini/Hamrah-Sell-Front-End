import Image from 'next/image';
import { LayoutTitlePage } from '../../../_components/layout-title-page';
import { BreadCrumb } from '../../../_components/breadcrumb';
import { LayoutActionBar } from '../../../_components/layout-action-bar';
import { CategoriesList } from './_components/categories-list';

export default function BasicSpecificationsCategoriesPage() {
  return (
    <div className="h-full space-y-4 p-8 ">
      <div className="space-y-4">
        <div className="border-b-black-white-50 space-y-4 border-b pb-4">
          <div className="flex items-center justify-between gap-4">
            <LayoutTitlePage />
            <div>
              <Image
                src="/images/logo-colored.png"
                width={115}
                height={47}
                alt="MCI Colored Logo"
              />
            </div>
          </div>

          <BreadCrumb />
        </div>

        <div id="BasicSpecificationsDevicesPage-Actions">
          <LayoutActionBar url="/basic-specifications/categories/new" />
        </div>
      </div>
      <div className="h-[calc(100dvh-370px)] max-h-[calc(100dvh-370px)]">
        <CategoriesList />
      </div>
    </div>
  );
}
