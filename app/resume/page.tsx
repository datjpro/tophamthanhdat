"use client";

import { Suspense } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { normalizeLocale } from "@/lib/i18n";

const RESUME_COPY = {
  vi: {
    tag: "CV / Resume",
    title: "CV Cua To Pham Thanh Dat",
    description:
      "Trang nay hien truc tiep file CV PDF cua toi de xem nhanh, mo tab moi hoac tai xuong ngay.",
    download: "Tai CV",
    open: "Mo Tab Moi",
    preview: "Xem Truoc CV",
    fallback: "Neu trinh xem PDF khong hien thi, hay mo file trong tab moi hoac tai xuong.",
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
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FileText className="size-4 text-accent" />
          <p className="mono-label text-accent">{copy.tag}</p>
        </div>
        <h1 className="section-title">{copy.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{copy.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <a href="/resume.pdf" download>
              <Download className="size-4" />
              {copy.download}
            </a>
          </Button>
          <Button asChild variant="outline" className="border-accent/35 hover:border-accent">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              {copy.open}
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-4xl md:text-5xl">{copy.preview}</h2>
        <div className="glass-panel overflow-hidden rounded-3xl p-2">
          <div className="overflow-hidden rounded-[1.35rem] border border-border bg-white">
            <iframe
              src="/resume.pdf#view=FitH"
              title={copy.title}
              className="h-[70vh] w-full bg-white md:h-[92vh]"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{copy.fallback}</p>
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
