"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";

function normalizePath(value: string, basePath: string) {
  let nextValue = value || "/";
  if (basePath && nextValue.startsWith(basePath)) {
    nextValue = nextValue.slice(basePath.length) || "/";
  }
  if (nextValue.length > 1 && nextValue.endsWith("/")) {
    nextValue = nextValue.slice(0, -1);
  }
  return nextValue;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = normalizePath(pathname, basePath);
  const isHome = normalizedPath === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-black flex flex-col justify-between" suppressHydrationWarning={true}>
      <div suppressHydrationWarning={true}>
        <Suspense fallback={null}>
          <SiteNavbar />
        </Suspense>
        <main className="mx-auto w-full max-w-[80rem] px-5 sm:px-8 md:px-10 pb-20 pt-28">
          {children}
        </main>
      </div>
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
    </div>
  );
}
