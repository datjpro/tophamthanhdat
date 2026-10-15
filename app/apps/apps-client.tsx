"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Sparkles,
  Code2,
  CheckCircle2,
  Layers,
  Palette,
  Bot,
  Wrench,
  Laptop,
} from "lucide-react";

import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";
import {
  CURATED_APPS,
  type AppCategory,
  type Platform,
} from "@/lib/apps-data";

const APPS_PAGE_COPY = {
  vi: {
    backHome: "Về Trang Chủ",
    tag: "Kho Ứng Dụng Tuyển Chọn",
    title: "Phần Mềm & Công Cụ Đắc Lực",
    subtitle:
      "Tuyển tập những phần mềm, công cụ lập trình, thiết kế và tiện ích hệ thống mà tôi sử dụng và khuyên dùng để tối ưu năng suất làm việc mỗi ngày.",
    searchPlaceholder: "Tìm kiếm phần mềm, công cụ, nền tảng...",
    categories: {
      all: "Tất Cả",
      dev: "Lập Trình",
      productivity: "Năng Suất",
      design: "Thiết Kế",
      ai: "AI & Trợ Lý",
      utilities: "Tiện Ích Hệ Thống",
    },
    pricingLabels: {
      free: "Miễn phí",
      "open-source": "Mã nguồn mở",
      freemium: "Bản miễn phí + Pro",
      paid: "Trả phí",
    },
    whyRecommend: "Điểm nổi bật & Lý do khuyên dùng:",
    visitSite: "Trang chính thức",
    noResults: "Không tìm thấy ứng dụng phù hợp với tìm kiếm của bạn.",
    suggestTitle: "Bạn có ứng dụng hay muốn gợi ý thêm?",
    suggestSubtitle: "Hãy chia sẻ với tôi qua email hoặc trang liên hệ.",
    contactBtn: "Gửi gợi ý cho Đạt",
    statsTotal: "công cụ tuyển chọn",
    filterPlatform: "Nền tảng:",
    allPlatforms: "Mọi nền tảng",
  },
  en: {
    backHome: "Back Home",
    tag: "Curated App Catalog",
    title: "Premier Software & Daily Tools",
    subtitle:
      "A handpicked collection of software, dev tools, design apps, and system utilities I personally rely on to deliver high-craft digital work.",
    searchPlaceholder: "Search apps, developer tools, platforms...",
    categories: {
      all: "All",
      dev: "Engineering",
      productivity: "Productivity",
      design: "Design & UX",
      ai: "AI & Agents",
      utilities: "System Utilities",
    },
    pricingLabels: {
      free: "Free",
      "open-source": "Open Source",
      freemium: "Freemium",
      paid: "Commercial",
    },
    whyRecommend: "Key strength & Why I recommend it:",
    visitSite: "Visit website",
    noResults: "No applications found matching your search criteria.",
    suggestTitle: "Know an exceptional tool worth featuring?",
    suggestSubtitle: "Send your suggestions over email or via my contact page.",
    contactBtn: "Suggest a Tool",
    statsTotal: "curated tools",
    filterPlatform: "Platform:",
    allPlatforms: "All platforms",
  },
} as const;

export function AppsClientPage() {
  const searchParams = useSearchParams();

  // Avoid SSR hydration text mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale: Locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = APPS_PAGE_COPY[locale];

  const [selectedCategory, setSelectedCategory] = useState<AppCategory>("all");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return CURATED_APPS.filter((app) => {
      // Category match
      if (selectedCategory !== "all" && app.category !== selectedCategory) {
        return false;
      }

      // Platform match
      if (selectedPlatform !== "all" && !app.platforms.includes(selectedPlatform as Platform)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = app.name.toLowerCase().includes(query);
        const taglineMatch = app.tagline[locale].toLowerCase().includes(query);
        const descMatch = app.description[locale].toLowerCase().includes(query);
        const reasonMatch = app.recommendationReason[locale].toLowerCase().includes(query);
        const platformMatch = app.platforms.some((p) => p.toLowerCase().includes(query));
        return nameMatch || taglineMatch || descMatch || reasonMatch || platformMatch;
      }

      return true;
    });
  }, [selectedCategory, selectedPlatform, searchQuery, locale]);

  const categories: { id: AppCategory; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: copy.categories.all, icon: <Layers className="size-3.5" /> },
    { id: "dev", label: copy.categories.dev, icon: <Code2 className="size-3.5" /> },
    { id: "productivity", label: copy.categories.productivity, icon: <CheckCircle2 className="size-3.5" /> },
    { id: "design", label: copy.categories.design, icon: <Palette className="size-3.5" /> },
    { id: "ai", label: copy.categories.ai, icon: <Bot className="size-3.5" /> },
    { id: "utilities", label: copy.categories.utilities, icon: <Wrench className="size-3.5" /> },
  ];

  const platforms: { id: string; label: string }[] = [
    { id: "all", label: copy.allPlatforms },
    { id: "macOS", label: "macOS" },
    { id: "Windows", label: "Windows" },
    { id: "Linux", label: "Linux" },
    { id: "Web", label: "Web" },
  ];

  return (
    <div className="min-w-0 space-y-10" suppressHydrationWarning={true}>
      {/* Top back navigation & tag */}
      <div className="flex flex-wrap items-center justify-between gap-4" suppressHydrationWarning={true}>
        <Link
          href={withLocale("/", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 font-normal cursor-pointer"
        >
          <ArrowLeft className="size-3" />
          {copy.backHome}
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-emerald-500" />
          <p className="text-[13px] tracking-wider uppercase text-black/50 font-medium">{copy.tag}</p>
        </div>
      </div>

      {/* Header section */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {copy.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] text-black/65 leading-relaxed font-normal">
          {copy.subtitle}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-black/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={copy.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 text-[14px] bg-white border border-black/15 rounded-xl text-black placeholder:text-black/40 focus:outline-hidden focus:border-black transition-colors"
            />
          </div>

          {/* Platform selector */}
          <div className="flex items-center gap-2">
            <Laptop className="size-4 text-black/40 hidden sm:inline-block" />
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-3 py-2 text-[13px] bg-white border border-black/15 rounded-xl text-black focus:outline-hidden focus:border-black cursor-pointer"
            >
              {platforms.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-normal transition-all cursor-pointer ${
                  isSelected
                    ? "bg-black text-white shadow-xs"
                    : "bg-white text-black/70 border border-black/15 hover:border-black/35 hover:text-black"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results counter */}
      <div className="flex items-center justify-between text-[13px] text-black/50 px-1">
        <span>
          {filteredApps.length} {copy.statsTotal}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-black/70 hover:text-black underline cursor-pointer"
          >
            {locale === "vi" ? "Xoá bộ lọc tìm kiếm" : "Clear search"}
          </button>
        )}
      </div>

      {/* Apps Grid */}
      {filteredApps.length === 0 ? (
        <div className="bg-white border border-black/10 rounded-2xl p-12 text-center space-y-3">
          <p className="text-[15px] text-black/60">{copy.noResults}</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map((app) => {
            const pricingLabel = copy.pricingLabels[app.pricing];
            return (
              <article
                key={app.id}
                className="group relative bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-black/25 transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Badge & Pricing */}
                  <div className="flex items-center justify-between gap-2">
                    {app.badge ? (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200/80 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                        <Sparkles className="size-3" />
                        {app.badge[locale]}
                      </span>
                    ) : (
                      <span className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                        {copy.categories[app.category]}
                      </span>
                    )}

                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                        app.pricing === "free" || app.pricing === "open-source"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200/70"
                          : "bg-black/5 text-black/70 border border-black/10"
                      }`}
                    >
                      {pricingLabel}
                    </span>
                  </div>

                  {/* App Name and Tagline */}
                  <div className="space-y-1">
                    <h2 className="text-[21px] font-medium tracking-tight text-black flex items-center justify-between">
                      {app.name}
                    </h2>
                    <p className="text-[13px] font-medium text-black/75 leading-snug">
                      {app.tagline[locale]}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-black/60 leading-relaxed">
                    {app.description[locale]}
                  </p>

                  {/* Recommendation highlight box */}
                  <div className="bg-[#f7f7f8] border border-black/5 rounded-xl p-3 space-y-1">
                    <p className="text-[11px] uppercase tracking-wider text-black/50 font-medium">
                      {copy.whyRecommend}
                    </p>
                    <p className="text-[12px] text-black/80 leading-relaxed font-normal">
                      {app.recommendationReason[locale]}
                    </p>
                  </div>
                </div>

                {/* Footer of Card: Platforms & Link */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {app.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-[10px] bg-black/5 text-black/60 px-1.5 py-0.5 rounded font-mono"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[12px] px-3 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-150 cursor-pointer shrink-0 font-medium"
                  >
                    <span>{copy.visitSite}</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Suggest App Banner / Bottom Section */}
      <section className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-[20px] font-medium text-black tracking-tight">{copy.suggestTitle}</h2>
          <p className="text-[14px] text-black/60">{copy.suggestSubtitle}</p>
        </div>
        <Link
          href={withLocale("/contact", locale)}
          className="inline-flex items-center gap-2 bg-black text-white text-[13px] px-5 py-2.5 rounded-full hover:bg-black/85 transition-colors cursor-pointer font-normal shrink-0"
        >
          <span>{copy.contactBtn}</span>
          <ExternalLink className="size-3.5" />
        </Link>
      </section>
    </div>
  );
}
