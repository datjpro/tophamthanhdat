"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { SafeImage } from "@/components/ui/safe-image";
import { getImageMap, getProjectBySlug } from "@/lib/content-data";
import { normalizeLocale, withLocale } from "@/lib/i18n";

type Props = {
  slug: string;
};

const DETAIL_COPY = {
  vi: {
    back: "Quay Lại Danh Sách Dự Án",
    techStrip: "Công Nghệ Sử Dụng",
    keyResults: "Kết Quả Nổi Bật",
    liveDemo: "Xem Demo",
    notFound: "Không tìm thấy dự án.",
  },
  en: {
    back: "Back to Projects",
    techStrip: "Tech Stack",
    keyResults: "Key Results",
    liveDemo: "Live Demo",
    notFound: "Project not found.",
  },
} as const;

export function ProjectDetailClient({ slug }: Props) {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  const copy = DETAIL_COPY[locale];
  const project = getProjectBySlug(slug, locale);
  const imageMap = getImageMap();

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-black/60">{copy.notFound}</p>
        <Link
          href={withLocale("/projects", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="size-3" />
          {copy.back}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Back button */}
      <div>
        <Link
          href={withLocale("/projects", locale)}
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="size-3" />
          {copy.back}
        </Link>
      </div>

      {/* Header section */}
      <section className="space-y-3">
        <p className="text-[13px] tracking-wider uppercase text-black/50">
          {project.year} &bull; {project.role}
        </p>
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {project.title}
        </h1>
        <p className="text-[16px] text-black/70 leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </section>

      {/* Hero Image */}
      <div className="relative h-[21rem] overflow-hidden rounded-2xl border border-black/5 bg-black/5 md:h-[31rem]">
        <SafeImage
          src={project.image}
          fallbackSrc={imageMap.fallback}
          alt={project.title}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-750"
        />
      </div>

      {/* Tech Stack Card */}
      <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-[22px] font-medium text-black tracking-tight">{copy.techStrip}</h2>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[11px] font-medium tracking-wider uppercase bg-black/5 text-black px-2.5 py-[0.2em] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Key Results Card */}
      <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-[22px] font-medium text-black tracking-tight">{copy.keyResults}</h2>
        <ul className="list-disc space-y-2.5 pl-5 text-[15px] text-black/70 leading-relaxed">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-2 pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black/85 transition-colors duration-200"
        >
          <Github className="size-3.5" />
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white text-black border border-black/20 text-[13px] px-4 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200"
        >
          <ExternalLink className="size-3.5" />
          {copy.liveDemo}
        </a>
      </div>
    </div>
  );
}
