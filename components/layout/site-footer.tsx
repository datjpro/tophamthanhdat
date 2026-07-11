"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getFooterCopy, getSocialLinks } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";

export function SiteFooter() {
  const searchParams = useSearchParams();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const footer = getFooterCopy(locale);
  const socialLinks = getSocialLinks();

  return (
    <footer 
      className="w-full border-t border-black/10 bg-[#fafafa] py-12 px-5 sm:px-8 md:px-10 text-black z-10 relative"
      suppressHydrationWarning={true}
    >
      <div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        suppressHydrationWarning={true}
      >
        <div suppressHydrationWarning={true}>
          <p className="text-[13px] tracking-wider uppercase text-black/50 mb-2">{footer.subtitle}</p>
          <h2 className="text-[24px] sm:text-[32px] font-medium tracking-tight leading-tight max-w-xl text-black">
            {footer.headline}
          </h2>
        </div>

        <div className="flex flex-col gap-2" suppressHydrationWarning={true}>
          <p className="text-[13px] tracking-wider uppercase text-black/50">{footer.connect}</p>
          <div 
            className="flex flex-wrap gap-x-4 gap-y-1 text-[16px] font-normal"
            suppressHydrationWarning={true}
          >
            {socialLinks.map((item, idx) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity text-black"
                >
                  {item.label}
                </a>
                {idx < socialLinks.length - 1 && <span className="text-black/30">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="mt-12 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-black/60 font-normal"
        suppressHydrationWarning={true}
      >
        <p>
          {footer.rights} &copy; {new Date().getFullYear()} To Dat. All rights reserved.
        </p>
        <p className="tracking-tight">
          DatJ Portfolio &bull; HCM, Vietnam
        </p>
      </div>
    </footer>
  );
}
