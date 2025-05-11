'use client';

import useSearchUrlUpdater from '@/hooks/use-search-url-updater';
import Pagination from '../pagination/pagination';
import { Suspense } from 'react';

const FakeProductPagination = () => {
  const updateUrl = useSearchUrlUpdater();
  const onPageChanged = (page: number) => {
    updateUrl({ page });
  };

  return (
    <Pagination totalPages={18} currentPage={1} onPageChanged={onPageChanged} />
  );
};

export default function ProductPagination() {
  return (
    <Suspense>
      <FakeProductPagination />
    </Suspense>
  );
}
