"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ProjectsPageClient } from "@/app/projects/projects-client";
import { normalizeLocale } from "@/lib/i18n";

function ProjectsPageWrapper() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <ProjectsPageClient locale={locale} />;
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageWrapper />
    </Suspense>
  );
}
