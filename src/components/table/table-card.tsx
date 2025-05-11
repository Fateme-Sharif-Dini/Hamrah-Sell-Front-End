'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { TableContextProps } from './table.types';
import TableEmpty from './table-empty';
import { useTableContext } from './table-context';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement | null>,
  HTMLDivElement
> & {
  // dataSource?: any[];
  // columns?: ColumnType[];
  index?: number;
  onRecordClick?: (record: any) => any;
};

const TableCard = ({ onRecordClick, ...props }: TableContextProps & Props) => {
  const { dataSource, columns } = useTableContext();
  const [acumolator, setAcumolator] = useState(10);
  const showMore = () => {
    setAcumolator(acumolator + 10);
  };
  const hideBtn = () => {
    if (dataSource?.length == dataSource?.slice(0, acumolator).length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-3 ">
      {dataSource?.length! > 0 ? (
        dataSource?.slice(0, acumolator).map?.((dataItem: any, dataIndex) => {
          return (
            <div
              className=" flex flex-col overflow-hidden  "
              onClick={() => {
                onRecordClick && onRecordClick!(dataItem);
              }}
              key={dataIndex.toString()}
            >
              <div
                {...props}
                className={` overflow-hidden rounded-lg ${
                  props.className || ''
                } `}
              >
                {columns?.map?.((columnItem, columnIndex) => {
                  return (
                    <div
                      key={props.key || columnIndex.toString()}
                      className={`grid grid-cols-2`}
                    >
                      <div
                        style={{
                          backgroundColor:
                            columnIndex % 2 == 0 ? '#a2a9b8' : '#959DA8',
                          color: 'white ',
                        }}
                        className=" col-span-1 flex items-center p-2 text-center"
                      >
                        {columnItem.title}
                      </div>
                      {
                        <div
                          style={{
                            backgroundColor:
                              columnIndex % 2 == 0 ? '#ebebeb' : '#f9fafc',
                          }}
                          className={`v-table-left-side col-span-1 ${
                            columnItem?.render ? 'p-0' : 'p-2'
                          } flex items-center justify-center text-center `}
                          key={dataIndex.toString()}
                        >
                          {columnItem?.render
                            ? columnItem.render(
                                dataItem[columnItem.key],
                                dataItem,
                                dataIndex
                              )
                            : dataItem[columnItem.key]?.toString() || '-'}
                        </div>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <TableEmpty />
      )}
      {!hideBtn() && <Button onClick={showMore}>نمایش داده های بیشتر</Button>}
    </div>
  );
};

export default TableCard;
