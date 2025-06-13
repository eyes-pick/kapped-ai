"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface LandingLayoutShellProps {
  header?: ReactNode;
  hero?: ReactNode;
  className?: string;
}

export default function LandingLayoutShell({
  header,
  hero,
  className = "",
}: LandingLayoutShellProps) {
  return (
    <div className={clsx("flex flex-col min-h-screen", className)}>
      {header && <div>{header}</div>}
      <main className="flex-1 flex flex-col items-center justify-start">
        {hero}
      </main>
    </div>
  );
}
