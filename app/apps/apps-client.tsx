"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";
import { CURATED_APPS, type CuratedApp } from "@/lib/apps-data";

const APPS_COPY = {
  vi: {
    backHome: "Về Trang Chủ",
    tag: "Kho Ứng Dụng & Phần Mềm",
    title: "Phần Mềm & Dự Án Tuyển Chọn",
    readFull: "Xem Chi Tiết",
    downloadRelease: "Tải Về (Release)",
    pricingOpenSource: "Mã nguồn mở",
  },
  en: {
    backHome: "Back Home",
    tag: "Apps & Open Source",
    title: "Curated Apps & Projects",
    readFull: "View Details",
    downloadRelease: "Download (Release)",
    pricingOpenSource: "Open Source",
  },
} as const;

export function AppsClientPage() {
  const searchParams = useSearchParams();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale: Locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = APPS_COPY[locale];

  return (
    <div className="min-w-0 space-y-12" suppressHydrationWarning={true}>
      {/* Top action and label - styled identically to Blog page */}
      <div className="flex flex-wrap items-center justify-between gap-4" suppressHydrationWarning={true}>
        <Link
          href={withLocale("/", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 font-normal cursor-pointer"
        >
          <ArrowLeft className="size-3" />
          {copy.backHome}
        </Link>
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
      </div>

      <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
        {copy.title}
      </h1>

      {/* Grid of Apps - styled identically to Blog grid */}
      <div className="grid gap-6 md:grid-cols-2" suppressHydrationWarning={true}>
        {CURATED_APPS.map((app: CuratedApp) => (
          <article
            key={app.id}
            className="min-w-0 bg-white border border-black/10 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-5 overflow-hidden hover:border-black/25 transition-all duration-200 group"
            suppressHydrationWarning={true}
          >
            <div className="space-y-4" suppressHydrationWarning={true}>
              {/* Top metadata line: version, license, platform */}
              <div className="flex flex-wrap items-center gap-2" suppressHydrationWarning={true}>
                <p className="text-[12px] uppercase tracking-wider text-black/45 font-mono">
                  {app.version || "v0.7.0-vn"} &bull; {copy.pricingOpenSource}
                </p>
                {app.badge && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium px-2 py-0.5 rounded-full">
                    <Sparkles className="size-3 text-emerald-600" />
                    {app.badge[locale]}
                  </span>
                )}
              </div>

              {/* Icon & App Title */}
              <div className="flex items-start gap-4 pt-1" suppressHydrationWarning={true}>
                <div
                  className="relative size-14 sm:size-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 p-2 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                  suppressHydrationWarning={true}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={app.iconUrl}
                    alt={app.name}
                    width={48}
                    height={48}
                    className="size-full object-contain drop-shadow-sm"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = `/projects/${app.id.replace("-vn", "")}-icon.png`;
                      if (!target.src.endsWith(fallback)) {
                        target.src = fallback;
                      }
                    }}
                  />
                </div>
                <div className="space-y-1" suppressHydrationWarning={true}>
                  <h2 className="text-[22px] font-medium tracking-tight text-black leading-tight break-words">
                    <Link
                      href={withLocale(`/apps/${app.id}`, locale)}
                      className="hover:underline underline-offset-4"
                    >
                      {app.name}
                    </Link>
                  </h2>
                  <p className="text-[13px] text-black/50 font-medium">
                    {app.platforms.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Summary / Tagline */}
              <p className="text-[14px] text-black/60 leading-relaxed break-words">
                {app.description[locale]}
              </p>

              {/* Highlights feature pills */}
              {app.featureTags && app.featureTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1" suppressHydrationWarning={true}>
                  {app.featureTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                        tag.includes("Rust")
                          ? "bg-emerald-50 text-emerald-800"
                          : "bg-black/5 text-black/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions: View Details (like Blog) & Direct Release Download Link */}
            <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-3" suppressHydrationWarning={true}>
              <Link
                href={withLocale(`/apps/${app.id}`, locale)}
                className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-medium"
              >
                <span>{copy.readFull}</span>
                <ArrowRight className="size-3" />
              </Link>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black/80 transition-colors duration-200 cursor-pointer font-medium shadow-2xs"
              >
                <Download className="size-3" />
                <span>{copy.downloadRelease}</span>
                <ExternalLink className="size-2.5 opacity-60" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
