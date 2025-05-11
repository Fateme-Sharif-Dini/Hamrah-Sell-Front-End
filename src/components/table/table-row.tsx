import React, { MouseEvent, useState } from 'react';
import { ColumnType } from './table.types';
import { useTableContext } from './table-context';

type Props = {
  columns: ColumnType[];
  dataIndex: number;
  dataItem: any;
  skeleton: boolean;
  className?: string;
  indentation?: number;
};

export default function TableRow({
  columns,
  dataIndex,
  dataItem,
  skeleton,
  className,
  indentation,
}: Props) {
  const baseIndentation = indentation || 0;
  const [isExpanded, setIsExpanded] = useState(false);
  // const [numberOfExpandedChildren, setNumberOfExpandedChildren] = useState(0);
  // let ii = 0;
  // useEffect(() => {
  //   if (isExpanded && dataItem.children) {
  //     ii += dataItem.children.length;
  //   }
  // }, [isExpanded, dataItem.children]);

  const { onRowClick, rowItemClassName } = useTableContext();
  const handleToggleExpand = (event: MouseEvent) => {
    event.stopPropagation();
    onRowClick?.(dataItem);
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <tr
        onClick={handleToggleExpand}
        className={`${className} relative ${
          rowItemClassName ?? rowItemClassName
        } `}
        key={dataIndex.toString()}
      >
        {/* <td
          className="  absolute  justify-center items-center w-[1%]  "
          // style={{ padding: 0, textAlign: "left" }}
        >
          {dataItem.children ? (
            <div
              className={` transition-all ${isExpanded ? "-rotate-90" : ""}`}
            >
              ⮜
            </div>
          ) : (
            <></>
          )}
        </td> */}
        {columns?.map?.((columnItem, columnIndex) => {
          return (
            <td
              key={columnIndex.toString()}
              scope="col"
              style={{
                textAlign: columnItem.align || 'center',
                paddingRight: baseIndentation || undefined,
              }}
              className={`border-b-black-white-50 relative select-none border-b px-2 py-2 ${
                columnItem?.rowClassName || ''
              } ${columnItem.className}`}
            >
              {/* {columnIndex == 0 ? (
                <div
                  className={`me-2 absolute pointer-events-none inline-block transition-all ${isExpanded ? "_-rotate-90" : ""}`}
                >
                  {isExpanded ? "-" : "+"}
                </div>
              ) : (
                <></>
              )} */}
              {columnItem.key in dataItem && !!!columnItem.render ? (
                <span className="skeleton-content">
                  {dataItem[columnItem.key]}
                </span>
              ) : (
                <span className="skeleton-content">
                  {columnItem.render?.(
                    dataItem[columnItem.key],
                    dataItem,
                    dataIndex
                  )}
                </span>
              )}
            </td>
          );
        })}
      </tr>
      {isExpanded && dataItem.children ? (
        <>
          {dataItem.children.map?.((childItem: any, childIndex: any) => {
            return (
              <TableRow
                key={`${dataIndex}-${childIndex}`}
                indentation={baseIndentation + 40}
                columns={columns}
                dataIndex={childIndex}
                dataItem={childItem}
                skeleton={skeleton}
              />
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
