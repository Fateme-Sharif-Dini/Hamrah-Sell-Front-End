import React from 'react';
// import { IconRefresh } from "../icons/icons";

type Props = {};

export default function TableEmpty({}: Props) {
  return (
    <td className="text-base-400 flex h-full flex-col items-center justify-center text-xl">
      <div>اطلاعاتی برای نمایش وجود ندارد</div>
      <div>{/* <IconRefresh /> */}</div>
    </td>
  );
}
