import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS, getProjectBySlug } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="space-y-8">
      <Button asChild variant="outline" size="sm">
        <Link href="/projects">
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>
      </Button>

      <section className="space-y-4">
        <p className="mono-label text-accent">
          {project.year} / {project.role}
        </p>
        <h1 className="section-title">{project.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{project.description}</p>
      </section>

      <div className="relative h-[21rem] overflow-hidden rounded-3xl border border-border md:h-[31rem]">
        <Image src={project.image} alt={project.title} fill className="object-cover grayscale-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Card className="glass-panel">
        <CardHeader className="space-y-4">
          <CardTitle className="display-text text-4xl">Tech Strip</CardTitle>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} className="mono-label border-border bg-muted text-accent">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </Card>

      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="display-text text-4xl">Key Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button asChild className="bg-primary text-primary-foreground">
          <Link href={project.github} target="_blank">
            <Github className="size-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-accent/35 hover:border-accent">
          <Link href={project.demo} target="_blank">
            <ExternalLink className="size-4" />
            Live Demo
          </Link>
        </Button>
      </div>
    </div>
  );
}
