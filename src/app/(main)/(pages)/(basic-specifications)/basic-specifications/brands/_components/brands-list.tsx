'use client';

import Table from '@/components/table/table';
import { brandColumns, brandDataSource } from '../_data/brands-data';

export const BrandsList = () => {
  return <Table columns={brandColumns} dataSource={brandDataSource} />;
};
