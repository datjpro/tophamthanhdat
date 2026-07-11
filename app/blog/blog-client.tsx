"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { normalizeLocale, withLocale } from "@/lib/i18n";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
};

const BLOG_COPY = {
  vi: {
    backHome: "Về Trang Chủ",
    tag: "Ghi Chú Kỹ Thuật",
    title: "Nhật Ký Nghiên Cứu và Xây Dựng",
    readFull: "Đọc Bài Viết",
  },
  en: {
    backHome: "Back Home",
    tag: "Lab Notes",
    title: "Research and Build Notes",
    readFull: "Read Full Post",
  },
} as const;

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const searchParams = useSearchParams();
  
  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = BLOG_COPY[locale];

  return (
    <div className="space-y-12" suppressHydrationWarning={true}>
      {/* Top action and label */}
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

      {/* Grid of posts */}
      <div className="grid gap-6 md:grid-cols-2" suppressHydrationWarning={true}>
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4"
            suppressHydrationWarning={true}
          >
            <div className="space-y-3" suppressHydrationWarning={true}>
              <p className="text-[12px] uppercase tracking-wider text-black/40">
                {new Date(post.date).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US")} &bull; {post.readingTime}
              </p>
              <h2 className="text-[22px] font-medium tracking-tight text-black leading-tight">
                {post.title}
              </h2>
              <p className="text-[14px] text-black/60 leading-relaxed">{post.summary}</p>
            </div>
            
            <div className="pt-2">
              <Link
                href={withLocale(`/blog/${post.slug}`, locale)}
                className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span>{copy.readFull}</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
