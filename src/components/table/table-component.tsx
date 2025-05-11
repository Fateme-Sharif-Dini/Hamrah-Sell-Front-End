'use client';
import React, { createRef, useEffect, useRef, useState } from 'react';
// import TableFilters from './table-filters';
// import TableSort from './table-sort';
// import { TextPlaceholder } from "../../../../placeholders/text-placeholder";
import { TableContextProps } from './table.types';
import { useTableContext } from './table-context';
// import TableFiltersIcon from './table-filters-icon';
// import TableSearch from './table-search';
// import TableSearchIcon from './table-search-icon';
import TableRow from './table-row';
import NoItemFound from '../no-item/no-item-found';
import { useDraggableTable } from '@/hooks/useDraggableTable';
// type Props = {};
export default function TableComponent({}: // dataSource,
// columns,
// skeleton
TableContextProps) {
  const [pressed, setPressed] = useState(false);
  const grabbedTHElement: React.MutableRefObject<HTMLTableCellElement | null> =
    useRef<HTMLTableCellElement>(null);
  const startX = useRef<number | undefined>(undefined);
  const startWidth = useRef<number | undefined>(undefined);
  const {
    dataSource,
    columns,
    // rowDataSource,
    skeleton,
    // onRowClick,
    headerItemClassName,
    // rowItemClassName,
    hideBars,
    tableClassName,
  } = useTableContext();

  const mouseDownHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setPressed(true);
    startX.current = event.pageX;
    grabbedTHElement.current = (event.target as HTMLDivElement).closest('th');
    startWidth.current = grabbedTHElement.current?.clientWidth;
  };
  const mouseUpHandler = () => {
    setPressed(false);
  };
  const mouseMoveHandler = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    if (pressed) {
      grabbedTHElement.current!.style.width = `${
        startWidth.current! - event.pageX + startX.current!
      }px`;
      // grabbedTHElement.current!.style.minWidth = `${
      //   startWidth.current! - event.pageX + startX.current!
      // }px`;
    }
  };

  const BarElemet = () => {
    return (
      <div
        onMouseDown={mouseDownHandler}
        className="resize-bar width-[10px] absolute -left-[0px]  top-0 z-10 h-full cursor-col-resize p-[1px] "
      ></div>
    );
  };
  const ref = createRef<HTMLTableElement>();
  const {
    mouseDownHandler: mdh,
    attachListeners,
    detachListeners,
  } = useDraggableTable(ref);

  useEffect(() => {
    if (ref.current) {
      attachListeners();
    }
    return () => {
      detachListeners();
    };
  }, [attachListeners, detachListeners, ref]);

  return (
    <>
      <figure
        onMouseDown={mdh}
        ref={ref}
        className={` *:transition-all  fancy-scrollbar  min-h-max     w-full select-none overflow-hidden overflow-x-auto text-sm`}
      >
        <table
          className={`undraggable h-fit w-full min-w-max overflow-y-visible transition-all ${tableClassName}   ${
            !!!dataSource?.length ? 'min-h-96' : ''
          }`}
        >
          <thead className="select-none overflow-hidden">
            <tr className="border-b-black-white-50 [&>th:not(:last-child)]:border-e-black-white-50   border-b transition-all [&>th:not(:last-child)]:border-e ">
              {columns?.map?.((item, index) => {
                return (
                  <th
                    // style={{ display: "flex", flexDirection: "column" }}
                    onMouseUp={mouseUpHandler}
                    onMouseMove={mouseMoveHandler}
                    scope="col"
                    className={`${index == 0 ? 'rounded-s-lg' : ''} ${
                      index == columns.length - 1 ? 'rounded-e-lg' : ''
                    }   relative align-top font-semibold transition-all ${
                      headerItemClassName ?? headerItemClassName
                    }  grow-1 ${item?.headClassName || ''} ${item.className}`}
                    key={item.key}
                  >
                    {!hideBars && <BarElemet />}
                    <div
                      style={{
                        textAlign: item.align || 'center',
                        justifyContent: item.align || 'center',
                      }}
                      className="bg-black-white-10 relative m-auto flex gap-3 p-4"
                    >
                      <div>{item.title}</div>
                      {/* <TableSearchIcon item={item} /> */}
                      {/* <TableFiltersIcon item={item} /> */}
                      {/* <TableSort item={item} /> */}
                    </div>
                    {/* <TableSearch item={item} /> */}
                    {/* <TableFilters item={item} /> */}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="relative ">
            {!!!dataSource?.length ? (
              <tr className="absolute flex h-[99%] w-full items-center justify-center overflow-hidden ">
                <NoItemFound imageWidth={200} textContent="اطلاعاتی یافت نشد" />
              </tr>
            ) : (
              dataSource.map?.((dataItem: any, dataIndex) => {
                return (
                  <TableRow
                    key={dataIndex.toString()}
                    columns={columns!}
                    dataIndex={dataIndex}
                    dataItem={dataItem}
                    skeleton={skeleton!}
                  />
                );
              })
            )}

            {}
          </tbody>
        </table>
      </figure>
    </>
  );
}
