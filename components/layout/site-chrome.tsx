"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { MusicChatbox } from "@/components/layout/music-chatbox";

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
  const isPortfolio = normalizedPath === "/portfolio" || normalizedPath.startsWith("/portfolio/");

  if (isPortfolio) {
    return (
      <>
        {children}
        <MusicChatbox />
      </>
    );
  }

  return (
    <>
      <div className="noise-overlay" />
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="vertical-hairline vertical-hairline-left" />
      <div className="vertical-hairline vertical-hairline-right" />
      <div className="relative z-10 min-h-screen">
        <Suspense fallback={null}>
          <SiteNavbar />
        </Suspense>
        <main className="mx-auto w-full max-w-[90rem] px-6 pb-12 pt-28 md:px-10">{children}</main>
        <Suspense fallback={null}>
          <SiteFooter />
        </Suspense>
      </div>
      <MusicChatbox />
    </>
  );
}
