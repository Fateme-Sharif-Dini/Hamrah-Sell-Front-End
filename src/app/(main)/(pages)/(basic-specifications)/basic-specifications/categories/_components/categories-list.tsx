'use client';

import Table from '@/components/table/table';
import { categoryColumns, categoryDataSource } from '../_data/categories-data';

export const CategoriesList = () => {
  return <Table columns={categoryColumns} dataSource={categoryDataSource} />;
};
