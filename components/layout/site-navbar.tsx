"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const HOME_COPY = {
  vi: {
    logo: "DatJ®",
    getInTouch: "Liên hệ",
    links: [
      { label: "Dự Án", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Thành Tựu", href: "/achievements" },
      { label: "Blog", href: "/blog" },
    ],
  },
  en: {
    logo: "DatJ®",
    getInTouch: "Get in touch",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Achievements", href: "/achievements" },
      { label: "Blog", href: "/blog" },
    ],
  },
};

export function SiteNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = HOME_COPY[locale];
  const nextLocale: Locale = locale === "vi" ? "en" : "vi";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const normalizePath = (value: string) => {
    let nextValue = value;
    if (basePath && nextValue.startsWith(basePath)) {
      nextValue = nextValue.slice(basePath.length) || "/";
    }
    if (nextValue.length > 1 && nextValue.endsWith("/")) {
      nextValue = nextValue.slice(0, -1);
    }
    return nextValue;
  };

  const toggleLocale = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLocale);
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 w-full flex justify-between items-center z-50 px-5 sm:px-8 py-4 sm:py-5 bg-[#fafafa]/80 backdrop-blur-md border-b border-black/5 text-black"
        suppressHydrationWarning={true}
      >
        {/* Logo (left) */}
        <Link href={withLocale("/", locale)} className="flex items-center gap-3" suppressHydrationWarning={true}>
          <span
            className="text-[21px] sm:text-[26px] tracking-tight font-medium select-none text-black"
            style={{ fontFamily: "var(--font-heading)" }}
            suppressHydrationWarning={true}
          >
            {copy.logo}
          </span>
          <span 
            className="text-[25px] sm:text-[30px] select-none leading-none -mt-1 text-black" 
            style={{ letterSpacing: "-0.02em" }}
            suppressHydrationWarning={true}
          >
            ✳︎
          </span>
        </Link>

        {/* Desktop Links (center) */}
        <div 
          className="hidden md:flex items-center text-[23px] font-normal tracking-tight text-black"
          suppressHydrationWarning={true}
        >
          {copy.links.map((link, idx) => {
            const isActive = normalizePath(pathname) === normalizePath(link.href);
            return (
              <React.Fragment key={link.href}>
                <Link
                  href={withLocale(link.href, locale)}
                  className={cn(
                    "transition-opacity hover:opacity-100",
                    isActive ? "opacity-100 font-medium underline underline-offset-4" : "opacity-60"
                  )}
                  suppressHydrationWarning={true}
                >
                  {link.label}
                </Link>
                {idx < copy.links.length - 1 && <span className="opacity-60">,&nbsp;</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Desktop CTA & Language Switch (right) */}
        <div 
          className="hidden md:flex items-center gap-6"
          suppressHydrationWarning={true}
        >
          <Link
            href={withLocale("/contact", locale)}
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity tracking-tight"
            suppressHydrationWarning={true}
          >
            {copy.getInTouch}
          </Link>
          <button
            onClick={toggleLocale}
            className="text-[14px] font-medium tracking-wider text-black border border-black/20 rounded-full px-3 py-[0.2em] hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
            suppressHydrationWarning={true}
          >
            {locale === "vi" ? "EN" : "VI"}
          </button>
        </div>

        {/* Mobile Hamburger & Language Switch */}
        <div 
          className="md:hidden flex items-center gap-4 relative z-20"
          suppressHydrationWarning={true}
        >
          <button
            onClick={toggleLocale}
            className="text-[13px] font-medium tracking-wider text-black border border-black/20 rounded-full px-2.5 py-[0.15em] hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
            suppressHydrationWarning={true}
          >
            {locale === "vi" ? "EN" : "VI"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
            suppressHydrationWarning={true}
          >
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 z-[40] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        suppressHydrationWarning={true}
      >
        {copy.links.map((link) => (
          <Link
            key={link.href}
            href={withLocale(link.href, locale)}
            onClick={() => setIsMenuOpen(false)}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
            suppressHydrationWarning={true}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={withLocale("/contact", locale)}
          onClick={() => setIsMenuOpen(false)}
          className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
          suppressHydrationWarning={true}
        >
          {copy.getInTouch}
        </Link>
      </div>
    </>
  );
}
