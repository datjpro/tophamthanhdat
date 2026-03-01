import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-[2rem] border border-border/70 bg-card/40 p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Minimal + Bold
          </p>
          <h1 className="section-title text-4xl md:text-6xl">
            Topham Thanh Dat
            <br />
            <span className="text-muted-foreground">Frontend Engineer</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Trang nay da duoc tach thanh nhieu route rieng de ban de sua sau nay:
            Home, About, Projects, Achievements, Contact, Resume.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">
                Xem du an
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Lien he</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-border/70 bg-secondary/30 p-4">
            <Image
              src="/avatar.svg"
              alt="Profile avatar"
              width={560}
              height={560}
              className="h-auto w-full rounded-[1.5rem]"
              priority
            />
            <div className="absolute bottom-6 left-6 rounded-full border border-border/80 bg-card/90 px-4 py-2 text-xs uppercase tracking-[0.22em]">
              Open to work
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="section-title text-2xl md:text-3xl">Featured Projects</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              See all
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="overflow-hidden bg-card/65">
              <div className="relative h-44">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
                <Button asChild variant="outline" size="sm" className="w-fit">
                  <Link href={`/projects/${project.slug}`}>View detail</Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
