"use client";

import Link from "next/link";
import React, { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";

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
    description: "Tổng hợp những dự án thực tế về web, mobile và blockchain. Bạn có thể dùng chuột kéo qua lại để duyệt dự án.",
    caseStudy: "Chi Tiết",
    github: "GitHub",
    demo: "Demo",
    dragHint: "Kéo thả chuột để xem tiếp",
  },
  en: {
    tag: "Project Chronology",
    title: "Selected Projects",
    description: "A curated timeline of practical web, mobile, and blockchain projects. Drag with mouse to explore projects.",
    caseStudy: "Case Study",
    github: "GitHub",
    demo: "Demo",
    dragHint: "Drag to explore projects",
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

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const momentumAnimRef = useRef<number | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);
    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, [checkScrollBounds, filteredProjects]);

  const cancelMomentum = () => {
    if (momentumAnimRef.current !== null) {
      cancelAnimationFrame(momentumAnimRef.current);
      momentumAnimRef.current = null;
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // only left click
    cancelMomentum();

    const el = scrollContainerRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.35; // drag sensitivity multiplier

    if (Math.abs(x - startXRef.current) > 5) {
      hasDraggedRef.current = true;
    }

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      const dx = e.pageX - lastXRef.current;
      velocityRef.current = dx / dt;
      lastXRef.current = e.pageX;
      lastTimeRef.current = now;
    }

    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const applyMomentum = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let v = velocityRef.current * 16; // scale to 60fps frame
    const friction = 0.94;

    const step = () => {
      if (Math.abs(v) < 0.2 || !scrollContainerRef.current) {
        cancelMomentum();
        return;
      }
      scrollContainerRef.current.scrollLeft -= v;
      v *= friction;
      momentumAnimRef.current = requestAnimationFrame(step);
    };

    momentumAnimRef.current = requestAnimationFrame(step);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    if (hasDraggedRef.current) {
      applyMomentum();
      // Keep hasDragged flag for 80ms to block accidental click navigation
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 80);
    }
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      if (hasDraggedRef.current) {
        applyMomentum();
        setTimeout(() => {
          hasDraggedRef.current = false;
        }, 80);
      }
    }
  };

  // Smooth button scrolling
  const scrollByAmount = (amount: number) => {
    cancelMomentum();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      {/* Title section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
          <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
            {copy.title}
          </h1>
          <p className="text-[16px] text-black/60 leading-relaxed">
            {copy.description}
          </p>
        </div>

        {/* Scroll Controls & Drag Hint */}
        <div className="flex items-center gap-3 self-start md:self-end select-none">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-black/50 border border-black/10 rounded-full px-3 py-1 bg-white shadow-2xs">
            <MoveHorizontal className="size-3.5" />
            <span>{copy.dragHint}</span>
          </div>

          <button
            onClick={() => scrollByAmount(-460)}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
            className={cn(
              "w-9 h-9 rounded-full border border-black/15 flex items-center justify-center transition-all duration-200 cursor-pointer",
              canScrollLeft
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-black shadow-xs active:scale-95"
                : "bg-black/5 text-black/25 border-transparent cursor-not-allowed"
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => scrollByAmount(460)}
            disabled={!canScrollRight}
            aria-label="Next projects"
            className={cn(
              "w-9 h-9 rounded-full border border-black/15 flex items-center justify-center transition-all duration-200 cursor-pointer",
              canScrollRight
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-black shadow-xs active:scale-95"
                : "bg-black/5 text-black/25 border-transparent cursor-not-allowed"
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 select-none">
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

      {/* Timeline Draggable Container */}
      <section
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "timeline-scroll overflow-x-auto pb-8 select-none transition-colors duration-150",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          scrollBehavior: isDragging ? "auto" : "smooth",
        }}
      >
        <div className="flex min-h-[34rem] items-start gap-9 px-2 pt-6">
          {filteredProjects.map((project, index) => (
            <TimelineCard
              key={project.slug}
              project={project}
              order={index + 1}
              locale={locale}
              fallbackImage={imageMap.fallback}
              hasDraggedRef={hasDraggedRef}
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
  hasDraggedRef,
}: {
  project: ProjectItem;
  order: number;
  locale: Locale;
  fallbackImage: string;
  hasDraggedRef: React.MutableRefObject<boolean>;
}) {
  const copy = PAGE_COPY[locale];
  const meta = PROJECT_LAYOUT_META[project.slug] ?? { variant: "mid", width: "w-[360px] md:w-[420px]" };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <article
      className={cn(
        "group flex-shrink-0 transition-transform duration-200",
        meta.width,
        getOffsetByVariant(meta.variant)
      )}
    >
      {/* Image frame */}
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-black/5 bg-black/5 pointer-events-none">
        <span className="pointer-events-none absolute left-4 top-4 font-mono text-[48px] font-bold text-black/10 select-none z-10 leading-none">
          {String(order).padStart(2, "0")}
        </span>
        <div className="relative aspect-[4/5] overflow-hidden select-none">
          <SafeImage
            src={project.image}
            fallbackSrc={fallbackImage}
            alt={project.title}
            fill
            draggable={false}
            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Info card */}
      <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm space-y-4 transition-shadow duration-200 group-hover:shadow-md">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pointer-events-none">
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
            onClick={handleLinkClick}
            className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
          >
            {copy.caseStudy}
            <ArrowRight className="size-3" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-1 bg-black text-white text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black/85 transition-colors duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
          >
            <Github className="size-3" />
            {copy.github}
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
          >
            <ExternalLink className="size-3" />
            {copy.demo}
          </a>
        </div>
      </div>
    </article>
  );
}
