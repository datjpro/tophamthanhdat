"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    tag: "Timeline Du An",
    title: "Du An Tieu Bieu",
    description: "Tong hop nhung du an thuc te ve web, mobile va blockchain.",
    caseStudy: "Chi Tiet",
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
  if (variant === "high") return "mt-[-70px] md:mt-[-120px]";
  if (variant === "low") return "mt-[70px] md:mt-[110px]";
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
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">{copy.tag}</p>
        <h1 className="section-title">{copy.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{copy.description}</p>
      </section>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            size="sm"
            variant={activeFilter === filter.value ? "default" : "outline"}
            className={activeFilter === filter.value ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <section className="timeline-scroll overflow-x-auto pb-6">
        <div className="flex min-h-[32rem] items-start gap-9 px-2">
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
      <div className="relative mb-4 overflow-hidden rounded-xl border border-border">
        <span className="pointer-events-none absolute left-4 top-4 font-mono text-6xl font-bold text-foreground/10">
          {String(order).padStart(2, "0")}
        </span>
        <div className="relative aspect-[4/5]">
          <SafeImage
            src={project.image}
            fallbackSrc={fallbackImage}
            alt={project.title}
            fill
            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <Badge key={tag} className="mono-label border-border bg-muted text-accent">
              {tag}
            </Badge>
          ))}
        </div>

        <h2 className="display-text text-4xl leading-none">{project.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href={withLocale(`/projects/${project.slug}`, locale)}>
              {copy.caseStudy}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-primary text-primary-foreground">
            <Link href={project.github} target="_blank">
              <Github className="size-4" />
              {copy.github}
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={project.demo} target="_blank">
              <ExternalLink className="size-4" />
              {copy.demo}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
