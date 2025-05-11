import { ComponentBase } from '@/types/component-base.type';

export type PaginationProps = Omit<ComponentBase, 'isDisabled'> & {
  currentPage: number;
  totalPages: number;
  pageSize?: number;
  onPageChanged?: (index: number) => void;
};
