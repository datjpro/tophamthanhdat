"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { SafeImage } from "@/components/ui/safe-image";
import {
  PROJECT_LAYOUT_META,
  getImageMap,
  getProjectFilters,
  getProjects,
  type ProjectFilter,
  type ProjectItem,
  type TimelineVariant,
} from "@/lib/content-data";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const PAGE_COPY = {
  vi: {
    tag: "Timeline Dự Án",
    title: "Dự Án Tiêu Biểu",
    description: "Tổng hợp những dự án thực tế về web, mobile và blockchain.",
    caseStudy: "Chi Tiết",
    github: "GitHub",
    demo: "Demo",
  },
  en: {
    tag: "Project Chronology",
    title: "Selected Projects",
    description: "A curated timeline of practical web, mobile, and blockchain projects.",
    caseStudy: "Case Study",
    github: "GitHub",
    demo: "Demo",
  },
} as const;

function getOffsetByVariant(variant: TimelineVariant) {
  if (variant === "high") return "mt-[-40px] md:mt-[-80px]";
  if (variant === "low") return "mt-[40px] md:mt-[80px]";
  return "mt-0";
}

export function ProjectsPageClient({ locale }: { locale: Locale }) {
  const copy = PAGE_COPY[locale];
  const filters = getProjectFilters(locale);
  const projects = getProjects(locale);
  const imageMap = getImageMap();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.tech.includes(activeFilter)),
    [activeFilter, projects],
  );

  return (
    <div className="space-y-12">
      {/* Title section */}
      <section className="space-y-4">
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-[16px] text-black/60 leading-relaxed">
          {copy.description}
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "px-4 py-[0.3em] text-[13px] sm:text-[14px] rounded-full transition-all duration-200 border cursor-pointer",
              activeFilter === filter.value
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black/10 hover:bg-black hover:text-white"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Timeline Grid */}
      <section className="timeline-scroll overflow-x-auto pb-8">
        <div className="flex min-h-[34rem] items-start gap-9 px-2 pt-6">
          {filteredProjects.map((project, index) => (
            <TimelineCard
              key={project.slug}
              project={project}
              order={index + 1}
              locale={locale}
              fallbackImage={imageMap.fallback}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function TimelineCard({
  project,
  order,
  locale,
  fallbackImage,
}: {
  project: ProjectItem;
  order: number;
  locale: Locale;
  fallbackImage: string;
}) {
  const copy = PAGE_COPY[locale];
  const meta = PROJECT_LAYOUT_META[project.slug] ?? { variant: "mid", width: "w-[360px] md:w-[420px]" };

  return (
    <article className={cn("group flex-shrink-0", meta.width, getOffsetByVariant(meta.variant))}>
      {/* Image frame */}
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-black/5 bg-black/5">
        <span className="pointer-events-none absolute left-4 top-4 font-mono text-[48px] font-bold text-black/10 select-none z-10 leading-none">
          {String(order).padStart(2, "0")}
        </span>
        <div className="relative aspect-[4/5] overflow-hidden">
          <SafeImage
            src={project.image}
            fallbackSrc={fallbackImage}
            alt={project.title}
            fill
            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
      </div>

      {/* Info card */}
      <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm space-y-4">
        {/* Tech badges */}
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

        <div>
          <h2 className="text-[22px] font-medium tracking-tight text-black leading-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-[14px] text-black/60 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href={withLocale(`/projects/${project.slug}`, locale)}
            className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200"
          >
            {copy.caseStudy}
            <ArrowRight className="size-3" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-black text-white text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black/85 transition-colors duration-200"
          >
            <Github className="size-3" />
            {copy.github}
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200"
          >
            <ExternalLink className="size-3" />
            {copy.demo}
          </a>
        </div>
      </div>
    </article>
  );
}
