import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailClient } from "@/components/projects/project-detail-client";
import { getProjectBySlug, getProjects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects("en").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "en");
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "en");
  if (!project) notFound();

  return <ProjectDetailClient slug={slug} />;
}
