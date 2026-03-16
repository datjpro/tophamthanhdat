"use client";

import { useSearchParams } from "next/navigation";

import { ProjectsPageClient } from "@/app/projects/projects-client";
import { normalizeLocale } from "@/lib/i18n";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <ProjectsPageClient locale={locale} />;
}
