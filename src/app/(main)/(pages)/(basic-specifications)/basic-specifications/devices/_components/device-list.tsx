'use client';
import Table from '@/components/table/table';
import { columns, dataSource } from '../_data/devices-data';

export const DeviceList = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};
