import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import type { ReactNode } from "react";

import "./jack.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "To Pham Thanh Dat -- Software Developer",
  description: "Portfolio landing page for To Pham Thanh Dat - Software Developer",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${kanit.variable} font-sans portfolio-wrapper`}>
      {children}
    </div>
  );
}

