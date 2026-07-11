"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { normalizeLocale, withLocale } from "@/lib/i18n";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
};

const BLOG_DETAIL_COPY = {
  vi: {
    back: "Về Trang Blog",
  },
  en: {
    back: "Back to Blog",
  },
} as const;

export function BlogPostClient({ post, children }: { post: BlogPost; children: React.ReactNode }) {
  const searchParams = useSearchParams();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = BLOG_DETAIL_COPY[locale];

  return (
    <div className="space-y-8 max-w-4xl" suppressHydrationWarning={true}>
      <div suppressHydrationWarning={true}>
        <Link
          href={withLocale("/blog", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 font-normal cursor-pointer"
        >
          <ArrowLeft className="size-3" />
          {copy.back}
        </Link>
      </div>

      <article className="bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-sm space-y-6" suppressHydrationWarning={true}>
        <header className="mb-6 space-y-3 pb-6 border-b border-black/5" suppressHydrationWarning={true}>
          <p className="text-[12px] uppercase tracking-wider text-black/45">
            {new Date(post.date).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US")} &bull; {post.readingTime}
          </p>
          <h1 className="text-[28px] sm:text-[38px] font-medium tracking-tight text-black leading-tight">
            {post.title}
          </h1>
          <p className="text-[16px] text-black/60 leading-relaxed font-normal">{post.summary}</p>
        </header>
        <div className="mdx-content text-black/80 prose max-w-none" suppressHydrationWarning={true}>
          {children}
        </div>
      </article>
    </div>
  );
}
