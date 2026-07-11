"use client";

import React, { Suspense } from "react";
import { Download, ExternalLink } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { normalizeLocale } from "@/lib/i18n";

const RESUME_COPY = {
  vi: {
    tag: "Hồ Sơ Cá Nhân / Resume",
    title: "CV Của Tô Phạm Thanh Đạt",
    description:
      "Trang này hiển thị trực tiếp file CV PDF của tôi để xem nhanh, mở trong tab mới hoặc tải xuống ngay.",
    download: "Tải CV Xuống",
    open: "Mở Tab Mới",
    preview: "Xem Trước CV",
    fallback: "Nếu trình xem PDF không hiển thị, hãy mở file trong tab mới hoặc tải xuống.",
  },
  en: {
    tag: "CV / Resume",
    title: "To Pham Thanh Dat CV",
    description:
      "This page displays my PDF CV directly so it can be previewed, opened in a new tab, or downloaded instantly.",
    download: "Download CV",
    open: "Open in New Tab",
    preview: "CV Preview",
    fallback: "If the PDF preview does not load, open the file in a new tab or download it instead.",
  },
} as const;

function ResumePageContent({ locale }: { locale: "vi" | "en" }) {
  const copy = RESUME_COPY[locale];

  return (
    <div className="space-y-12">
      {/* Title section */}
      <section className="space-y-4">
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-[16px] text-black/60 leading-relaxed">{copy.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black/85 transition-colors duration-200 font-normal cursor-pointer"
          >
            <Download className="size-3.5" />
            {copy.download}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-all duration-200 font-normal cursor-pointer"
          >
            <ExternalLink className="size-3.5" />
            {copy.open}
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section className="space-y-6">
        <h2 className="text-[28px] sm:text-[34px] font-medium text-black tracking-tight">{copy.preview}</h2>
        <div className="bg-white border border-black/10 rounded-2xl p-2 shadow-sm overflow-hidden">
          <div className="overflow-hidden rounded-xl border border-black/5 bg-[#fafafa]">
            <iframe
              src="/resume.pdf#view=FitH"
              title={copy.title}
              className="h-[70vh] w-full bg-white md:h-[92vh] border-0"
            />
          </div>
        </div>
        <p className="text-sm text-black/50">{copy.fallback}</p>
      </section>
    </div>
  );
}

function ResumePageWrapper() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <ResumePageContent locale={locale} />;
}

export default function ResumePage() {
  return (
    <Suspense fallback={null}>
      <ResumePageWrapper />
    </Suspense>
  );
}
