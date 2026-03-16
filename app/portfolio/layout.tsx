import type { ReactNode } from "react";
import Script from "next/script";

import "./portfolio.css";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script src="/portfolio/assets/js/data.js" strategy="beforeInteractive" />
      <Script src="/portfolio/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
