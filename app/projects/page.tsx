"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS, type ProjectFilter } from "@/lib/data";

const filters: ProjectFilter[] = ["All", "React", "Next.js", "Node"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(
    () => PROJECTS.filter((project) => activeFilter === "All" || project.tech.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Projects
        </p>
        <h1 className="section-title text-4xl md:text-5xl">Project Portfolio</h1>
        <p className="max-w-3xl text-muted-foreground">
          Ban co the them/sua project trong `lib/data.ts` va route `/projects/[slug]` se doc tu cung
          nguon du lieu.
        </p>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.slug} className="overflow-hidden">
              <div className="relative h-52">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <CardHeader className="space-y-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projects/${project.slug}`}>Chi tiet</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="size-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="size-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
