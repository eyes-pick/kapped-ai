// 'use client';
import { ReactNode } from "react";
import clsx from "clsx";

export default function HeaderShell({
  leftSlot,
  centerSlot,
  rightSlot,
  className = "",
}: {
  leftSlot?: ReactNode;
  centerSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
}) {
  return (
    <header
      id="main-header"
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-[200px_1fr_200px] justify-center items-center bg-zinc-950 text-white px-4 py-3 w-full max-h-[80px]",
        className,
      )}
    >
      <div id="aside-header" className="flex justify-start items-center w-full">
        {leftSlot}
      </div>
      <div
        id="main-header-center"
        className="flex justify-center items-center w-full"
      >
        {centerSlot}
      </div>
      <div id="bside-header" className="flex justify-end items-center w-full">
        {rightSlot}
      </div>
    </header>
  );
}
