"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Sparkles,
  Cpu,
  Copy,
  Check,
  FileText,
  Github,
  Code2,
  CheckCircle2,
  Package,
} from "lucide-react";

import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";
import type { CuratedApp } from "@/lib/apps-data";

const APP_DETAIL_COPY = {
  vi: {
    back: "Về Kho Ứng Dụng",
    downloadReleaseBtn: "Tải Bản Phát Hành (GitHub Release)",
    downloadDirect: "Tải Về Trực Tiếp",
    viewSource: "Mã Nguồn Trên GitHub",
    upstreamSource: "Kho Lưu Trữ Gốc (Upstream)",
    license: "Bản quyền mã nguồn mở",
    techHeading: "100% Rust Thuần Túy",
    aiReady: "Sẵn sàng cho Agent AI (MCP)",
    overviewHeading: "1. Tổng Quan Dự Án Mã Nguồn Mở",
    featuresHeading: "2. Các Điểm Nổi Bật Trên Bản Việt Hóa",
    featuresDesc:
      "Phiên bản do Tô Đạt (datjpro) xây dựng và phát hành, tối ưu hóa các tính năng và trải nghiệm dành riêng cho người dùng Việt Nam.",
    installHeading: "3. Tệp Tải Về & Hướng Dẫn Cài Đặt",
    specsHeading: "4. Thông Số Kỹ Thuật & Giấy Phép",
    copyFormula: "Sao chép công thức",
    copied: "Đã sao chép!",
    installNotesTitle: "Lưu ý cài đặt:",
    installMsi: "Bản Cài Đặt (.msi): Tải về và nhấp đúp để cài đặt tự động vào máy tính Windows 10/11.",
    installZip:
      "Bản Portable (.zip): Chỉ cần giải nén tệp zip vào một thư mục bất kỳ và chạy file thực thi ngay lập tức mà không cần cài đặt hay quyền admin.",
    openSourcePromise: "Dự án hoàn toàn sạch, an toàn, không chứa quảng cáo hay mã theo dõi người dùng.",
  },
  en: {
    back: "Back to Apps",
    downloadReleaseBtn: "Download Release (GitHub)",
    downloadDirect: "Direct Downloads",
    viewSource: "View Source on GitHub",
    upstreamSource: "Upstream Repository",
    license: "Open Source License",
    techHeading: "100% Pure Rust",
    aiReady: "AI-Agent Ready (MCP)",
    overviewHeading: "1. Open Source Project Overview",
    featuresHeading: "2. Vietnamese Edition Features",
    featuresDesc:
      "Forked and tailored by Tô Đạt (datjpro), introducing specialized enhancements for Vietnamese users.",
    installHeading: "3. Download Assets & Installation",
    specsHeading: "4. Technical Specifications & License",
    copyFormula: "Copy formula",
    copied: "Copied!",
    installNotesTitle: "Installation Notes:",
    installMsi: "MSI Installer (.msi): Download and double-click to install natively on Windows 10/11.",
    installZip:
      "Portable Zip (.zip): Unzip to any folder and execute the application immediately without installation or admin privileges.",
    openSourcePromise: "100% telemetry-free, secure, and open source under permissive licensing.",
  },
} as const;

export function AppDetailClient({ app }: { app: CuratedApp }) {
  const searchParams = useSearchParams();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale: Locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = APP_DETAIL_COPY[locale];

  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const handleCopyFormula = useCallback((formulaText: string) => {
    navigator.clipboard.writeText(formulaText).then(() => {
      setCopiedFormula(formulaText);
      setTimeout(() => setCopiedFormula(null), 2000);
    });
  }, []);

  const overviewData = app.overview?.[locale];

  return (
    <div className="min-w-0 space-y-8 max-w-4xl" suppressHydrationWarning={true}>
      {/* Top Back Navigation Button */}
      <div suppressHydrationWarning={true}>
        <Link
          href={withLocale("/apps", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 font-normal cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="size-3" />
          {copy.back}
        </Link>
      </div>

      {/* Main Article Container - Styled identically to Blog Detail */}
      <article
        className="min-w-0 bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-sm space-y-8 overflow-hidden"
        suppressHydrationWarning={true}
      >
        {/* Header Section */}
        <header className="space-y-5 pb-6 border-b border-black/10" suppressHydrationWarning={true}>
          {/* Top Meta & Badges */}
          <div className="flex flex-wrap items-center gap-2" suppressHydrationWarning={true}>
            <span className="text-[12px] uppercase tracking-wider text-black/50 font-mono">
              {app.version || "v0.7.0-vn"} &bull; Open Source
            </span>
            <span className="text-black/30">&bull;</span>
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
              <Sparkles className="size-3 text-emerald-600" />
              {app.badge ? app.badge[locale] : "Bản Tiếng Việt"}
            </span>
            <span className="inline-flex items-center gap-1 bg-black/5 text-black/80 border border-black/10 text-[11px] font-mono px-2.5 py-0.5 rounded-full">
              <Cpu className="size-3" />
              100% Rust
            </span>
          </div>

          {/* Icon + Title Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1" suppressHydrationWarning={true}>
            <div
              className="relative size-16 sm:size-20 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 p-2.5 flex items-center justify-center shrink-0 shadow-2xs"
              suppressHydrationWarning={true}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={app.iconUrl}
                alt={app.name}
                width={64}
                height={64}
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
              <h1 className="text-[28px] sm:text-[38px] font-semibold tracking-tight text-black leading-tight break-words">
                {app.name}
              </h1>
              <p className="text-[16px] text-black/65 leading-relaxed font-normal break-words">
                {app.tagline[locale]}
              </p>
            </div>
          </div>

          {/* Primary CTA / Release Download Banner */}
          <div
            className="mt-4 p-4 sm:p-5 bg-[#f7f9fa] border border-black/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            suppressHydrationWarning={true}
          >
            <div className="space-y-1" suppressHydrationWarning={true}>
              <p className="text-[13px] font-semibold text-black flex items-center gap-1.5">
                <Package className="size-4 text-emerald-600" />
                <span>
                  {locale === "vi"
                    ? `Bản phát hành chính thức ${app.name} ${app.version || ""}`
                    : `Official Release ${app.name} ${app.version || ""}`}
                </span>
              </p>
              <p className="text-[12px] text-black/60">
                {locale === "vi"
                  ? "Tải về trực tiếp hoặc xem tệp phát hành trên GitHub"
                  : "Download directly or view release assets on GitHub"}
              </p>
            </div>

            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white text-[13px] px-5 py-2.5 rounded-full hover:bg-black/80 transition-all font-medium cursor-pointer shadow-xs shrink-0"
            >
              <Download className="size-4" />
              <span>{copy.downloadReleaseBtn}</span>
              <ExternalLink className="size-3.5 opacity-70" />
            </a>
          </div>
        </header>

        {/* Content Section 1: Project Overview */}
        <section className="space-y-4">
          <h2 className="text-[22px] sm:text-[24px] font-semibold text-black tracking-tight">
            {copy.overviewHeading}
          </h2>

          <div className="space-y-3.5 text-[15px] leading-relaxed text-black/75" suppressHydrationWarning={true}>
            {overviewData?.summary.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Architectural highlights cards */}
          <div className="grid gap-3 sm:grid-cols-2 pt-2" suppressHydrationWarning={true}>
            {overviewData?.coreHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#f8f9fa] border border-black/8 rounded-xl space-y-1.5"
                suppressHydrationWarning={true}
              >
                <p className="text-[14px] font-semibold text-black flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  {item.title}
                </p>
                <p className="text-[13px] text-black/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Section 2: Vietnamese Specific Features */}
        <section className="space-y-4 pt-4 border-t border-black/10">
          <div className="space-y-1" suppressHydrationWarning={true}>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-black tracking-tight flex items-center gap-2">
              <Sparkles className="size-5 text-emerald-600" />
              <span>{overviewData?.vnFeaturesTitle || copy.featuresHeading}</span>
            </h2>
            <p className="text-[14px] text-black/65">{copy.featuresDesc}</p>
          </div>

          {/* Formula Cards */}
          <div className="space-y-3 pt-1" suppressHydrationWarning={true}>
            {overviewData?.vnFeatures.map((feat, idx) => {
              const isFormula = feat.formula?.startsWith("=");
              return (
                <div
                  key={idx}
                  className="bg-white border border-black/10 rounded-xl p-4 sm:p-5 hover:border-black/25 transition-all space-y-2 shadow-2xs"
                  suppressHydrationWarning={true}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2" suppressHydrationWarning={true}>
                    <h3 className="text-[15px] font-semibold text-black flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      {feat.title[locale]}
                    </h3>
                    {feat.formula && isFormula && (
                      <button
                        type="button"
                        onClick={() => feat.formula && handleCopyFormula(feat.formula)}
                        className="inline-flex items-center gap-1.5 text-[12px] bg-black/5 hover:bg-black/10 text-black/80 px-3 py-1 rounded-md font-mono transition-colors cursor-pointer"
                        title={copy.copyFormula}
                      >
                        {copiedFormula === feat.formula ? (
                          <>
                            <Check className="size-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-sans font-medium">
                              {copy.copied}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5 opacity-60" />
                            <span>{feat.formula}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <p className="text-[14px] text-black/70 leading-relaxed font-normal">
                    {feat.description[locale]}
                  </p>
                  {feat.formula && !isFormula && (
                    <span className="inline-block text-[11px] font-mono text-black/50 bg-black/5 px-2.5 py-0.5 rounded">
                      {feat.formula}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Section 3: Downloads & Install */}
        <section className="space-y-4 pt-4 border-t border-black/10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold text-black tracking-tight flex items-center gap-2">
            <Download className="size-5 text-emerald-600" />
            <span>{copy.installHeading}</span>
          </h2>

          {/* Download Packages Cards */}
          <div className="space-y-3" suppressHydrationWarning={true}>
            {overviewData?.downloads.map((asset, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/10 rounded-2xl p-5 hover:border-black/25 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
                suppressHydrationWarning={true}
              >
                <div className="space-y-1" suppressHydrationWarning={true}>
                  <div className="flex items-center gap-2" suppressHydrationWarning={true}>
                    <FileText className="size-4 text-emerald-600 shrink-0" />
                    <h3 className="text-[15px] font-semibold text-black">
                      {asset.label[locale]}
                    </h3>
                    <span className="text-[11px] bg-black/5 text-black/60 px-2 py-0.5 rounded font-mono">
                      {asset.size}
                    </span>
                  </div>
                  <p className="text-[12px] text-black/60 font-mono">{asset.name}</p>
                  {asset.desc && (
                    <p className="text-[13px] text-black/75">{asset.desc[locale]}</p>
                  )}
                </div>

                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white text-[13px] px-4 py-2 rounded-xl hover:bg-black/80 transition-colors font-medium shrink-0 cursor-pointer shadow-xs"
                >
                  <Download className="size-3.5" />
                  <span>Tải về trực tiếp</span>
                </a>
              </div>
            ))}
          </div>

          {/* Installation Instructions Box */}
          <div className="bg-[#f7f9fa] border border-black/10 rounded-2xl p-4 sm:p-5 text-[13px] text-black/80 space-y-2.5" suppressHydrationWarning={true}>
            <p className="font-semibold text-black">{copy.installNotesTitle}</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-black/70">
              <li>{copy.installMsi}</li>
              <li>
                {locale === "vi"
                  ? `Bản Portable (.zip): Chỉ cần giải nén tệp zip vào một thư mục bất kỳ và chạy file thực thi ngay lập tức mà không cần cài đặt hay quyền admin.`
                  : `Portable Zip (.zip): Unzip to any folder and execute the application immediately without installation or admin privileges.`}
              </li>
              <li>{copy.openSourcePromise}</li>
            </ul>
          </div>
        </section>

        {/* Content Section 4: Specifications & Source Code */}
        <section className="space-y-4 pt-4 border-t border-black/10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold text-black tracking-tight flex items-center gap-2">
            <Cpu className="size-5 text-emerald-600" />
            <span>{copy.specsHeading}</span>
          </h2>

          {/* Specs Table */}
          <div className="border border-black/10 rounded-2xl overflow-hidden divide-y divide-black/5 text-[13px]" suppressHydrationWarning={true}>
            {overviewData?.techSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[160px_1fr] sm:grid-cols-[220px_1fr] p-3.5 bg-white hover:bg-black/[0.01]"
                suppressHydrationWarning={true}
              >
                <span className="font-medium text-black/60">{spec.label}</span>
                <span className="text-black font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* GitHub Links */}
          <div className="grid gap-3 sm:grid-cols-2 pt-2" suppressHydrationWarning={true}>
            {app.githubUrl && (
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-black/10 hover:border-black/30 rounded-xl flex items-center justify-between gap-3 transition-colors group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3" suppressHydrationWarning={true}>
                  <Github className="size-5 text-black" />
                  <div suppressHydrationWarning={true}>
                    <p className="text-[14px] font-semibold text-black">{copy.viewSource}</p>
                    <p className="text-[12px] text-black/50 font-mono">
                      {app.githubUrl.replace("https://github.com/", "")}
                    </p>
                  </div>
                </div>
                <ExternalLink className="size-4 text-black/40 group-hover:text-black transition-colors" />
              </a>
            )}

            {app.upstreamUrl && (
              <a
                href={app.upstreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-black/10 hover:border-black/30 rounded-xl flex items-center justify-between gap-3 transition-colors group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3" suppressHydrationWarning={true}>
                  <Code2 className="size-5 text-black" />
                  <div suppressHydrationWarning={true}>
                    <p className="text-[14px] font-semibold text-black">
                      {copy.upstreamSource}
                    </p>
                    <p className="text-[12px] text-black/50 font-mono">
                      {app.upstreamUrl.replace("https://github.com/", "")}
                    </p>
                  </div>
                </div>
                <ExternalLink className="size-4 text-black/40 group-hover:text-black transition-colors" />
              </a>
            )}
          </div>
        </section>

        {/* Footer of Article: Back & Download buttons */}
        <footer className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={withLocale("/apps", locale)}
            className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer font-medium"
          >
            <ArrowLeft className="size-3" />
            <span>{copy.back}</span>
          </Link>

          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-5 py-2 rounded-full hover:bg-black/80 transition-colors cursor-pointer font-medium shadow-xs"
          >
            <Download className="size-3.5" />
            <span>{copy.downloadReleaseBtn}</span>
            <ExternalLink className="size-3 opacity-60" />
          </a>
        </footer>
      </article>
    </div>
  );
}
