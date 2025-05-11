'use client';
import Table from '@/components/table/table';
import {
  distributionColumns,
  distributionDataSource,
} from '../_data/sales-division-data';

export const SalesDivisionList = () => {
  return (
    <Table columns={distributionColumns} dataSource={distributionDataSource} />
  );
};
