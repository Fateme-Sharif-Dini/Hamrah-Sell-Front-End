'use client';
import React, { useEffect, useState } from 'react';
import { PaginationProps } from './pagination.types';
import getPageNumbers from './PageNumber';
import classNames from 'classnames';
import { Size } from '@/types/size.type';
import { paginationTV } from './tv';

const sizeClasses: Record<Size, string> = {
  tiny: 'pagination-xs',
  small: 'pagination-sm',
  normal: '',
  large: 'pagination-lg',
  auto: '',
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChanged,
  variant = 'default',
  size = 'normal',
  className,
}) => {
  const { active, base, item } = paginationTV({});

  const [activePage, setactivePage] = useState(currentPage);

  const classes = classNames(
    // className,
    { [`pagination-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );

  useEffect(() => {
    onPageChanged?.(activePage);
  }, [activePage]);

  const pages = getPageNumbers(activePage, totalPages);
  if (totalPages == 1) {
    return null;
  }
  return (
    <ul className={`pagination pagination-secondary ${base()} `}>
      {pages.pages.map?.((page, index) => (
        <React.Fragment key={index}>
          {page == totalPages && pages.plusFive && (
            <li
              key={'minus-five'}
              className={`pagination-item ${item()} ${classes}`}
              onClick={() => setactivePage(activePage + 5)}
            >
              ...
            </li>
          )}

          <li
            key={`pagination-${page}`}
            className={`${item()} pagination-item ${
              activePage === page && active()
            }  ${classes}`}
            onClick={() => setactivePage(page)}
          >
            {page}
          </li>
          {page === 1 && pages.minusFive && (
            <li
              key={'plus-five'}
              className={`pagination-item ${item()} ${classes}`}
              onClick={() => setactivePage(activePage - 5)}
            >
              ...
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Pagination;
