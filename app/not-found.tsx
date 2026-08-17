"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Menu, X, Globe } from "lucide-react";
import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4";

const COPY = {
  vi: {
    brand: "DatJ®",
    links: [
      { label: "Dự Án", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Thành Tựu", href: "/achievements" },
      { label: "Blog", href: "/blog" },
      { label: "Liên Hệ", href: "/contact" },
    ],
    heading: "Rất tiếc, trang bạn tìm kiếm không tồn tại!",
    backHome: "Quay về trang chủ",
    menu: "Menu",
    langLabel: "EN",
  },
  en: {
    brand: "DatJ®",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Achievements", href: "/achievements" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    heading: "Oops, something went wrong! Page not found.",
    backHome: "Back to Home",
    menu: "Menu",
    langLabel: "VI",
  },
};

function NotFoundContent() {
  const searchParams = useSearchParams();
  const [scaleY, setScaleY] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("vi");
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lang = normalizeLocale(searchParams.get("lang"));
    setLocale(lang);
  }, [searchParams]);

  useEffect(() => {
    const updateScale = () => {
      if (textRef.current && textRef.current.offsetHeight > 0) {
        const measured = window.innerHeight / textRef.current.offsetHeight;
        setScaleY(measured);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const currentCopy = COPY[locale];

  const toggleLocale = () => {
    setLocale((prev) => (prev === "vi" ? "en" : "vi"));
  };

  return (
    <div
      className="fixed inset-0 z-[100] w-full h-screen overflow-hidden flex flex-col select-none"
      style={{
        background: "linear-gradient(to bottom, #FF8233 0%, #FDAC55 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* BACKGROUND "404" TEXT EFFECT */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
        style={{
          opacity: 0.8,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 95%)",
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Scaled 404 Text */}
          <div
            ref={textRef}
            className="text-white font-black leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontSize: "clamp(200px, 48vw, 800px)",
              transform: `scale(1.15, ${scaleY * 1.4})`,
              transformOrigin: "center",
            }}
          >
            404
          </div>

          {/* White Oval Over Text */}
          <div
            className="absolute rounded-full bg-white h-[22vh] sm:h-[26vh] md:h-[50vh]"
            style={{
              width: "clamp(120px, 20vw, 400px)",
              transform: `scaleY(${scaleY})`,
              transformOrigin: "center",
            }}
          />
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        {/* Logo (left) */}
        <Link
          href={withLocale("/", locale)}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
          </div>
          <span className="text-white font-bold text-lg sm:text-2xl ml-1 tracking-tight">
            {currentCopy.brand}
          </span>
          <span className="text-white text-xl sm:text-2xl leading-none -mt-1 font-light opacity-90">
            ✳︎
          </span>
        </Link>

        {/* Desktop nav links (center) */}
        <nav className="hidden md:flex items-center gap-1.5">
          {currentCopy.links.map((item) => (
            <Link
              key={item.href}
              href={withLocale(item.href, locale)}
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-white text-[#F16524] hover:opacity-90 hover:shadow-sm transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons (right): Language Switch & Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white bg-white/20 hover:bg-white/30 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer backdrop-blur-xs"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentCopy.langLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white bg-[#F16524] flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">
              {currentCopy.menu}
            </span>
          </button>
        </div>
      </header>

      {/* CENTER VIDEO */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ marginTop: "calc(-6vh - 40px)" }}
      >
        <div className="w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh] flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none mix-blend-darken"
            src={VIDEO_URL}
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 tracking-tight drop-shadow-sm">
          {currentCopy.heading}
        </h1>
        <Link
          href={withLocale("/", locale)}
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base bg-[#F16524] hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{currentCopy.backHome}</span>
        </Link>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[380px] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)",
          }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl ml-1">
                {currentCopy.brand}
              </span>
              <span className="text-white text-xl">✳︎</span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-6 flex flex-col gap-3 flex-1 overflow-y-auto">
            {currentCopy.links.map((item, idx) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${150 + idx * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-6 mt-auto">
            <Link
              href={withLocale("/", locale)}
              onClick={() => setMenuOpen(false)}
              className={`w-full py-4 rounded-full bg-white font-semibold text-base text-[#F16524] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 transform ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "450ms" : "0ms",
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{currentCopy.backHome}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
}
