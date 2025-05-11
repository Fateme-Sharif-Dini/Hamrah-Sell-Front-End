'use client';
import Table from '@/components/table/table';
import { featureColumns, featureDataSource } from '../_data/feature-data';

export const FeatureList = () => {
  return <Table columns={featureColumns} dataSource={featureDataSource} />;
};
