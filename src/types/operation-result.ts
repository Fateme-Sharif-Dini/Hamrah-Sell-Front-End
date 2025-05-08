import { Problem } from './http-errors.interface';

export type OperationResult<T> = {
  isSuccess: boolean;
  error?: Problem;
  response?: T | void;
  value?: T | void;
};

export type PaginationResult<T> = {
  records: T;
  totalCount: number;
};

export type OperationPaginationResult<T = []> = OperationResult<
  PaginationResult<T>
>;
