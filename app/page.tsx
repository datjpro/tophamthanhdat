import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { IMAGE_MAP, PROJECTS, SITE_THEME } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="space-y-18">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Shield className="size-4 text-accent" />
            <p className="mono-label text-accent">Full-Stack Interface Engineer</p>
          </div>

          <h1 className="section-title max-w-4xl">
            Bridging bold editorial visuals with robust production architecture.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            This portfolio is rebuilt with a hybrid language inspired by the provided stitch samples.
            The structure stays modular so you can edit content quickly.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/projects">
                {SITE_THEME.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent">
              <Link href="/contact">{SITE_THEME.ctaSecondary}</Link>
            </Button>
          </div>

          <div className="grid gap-6 pt-5 sm:grid-cols-2">
            <div>
              <p className="mono-label text-muted-foreground">Primary Focus</p>
              <p className="mt-2 text-sm text-foreground">Product interfaces, performance, and design systems.</p>
            </div>
            <div>
              <p className="mono-label text-muted-foreground">Current Stack</p>
              <p className="mt-2 text-sm text-foreground">Next.js, TypeScript, Tailwind, shadcn/ui.</p>
            </div>
          </div>
        </div>

        <div className="relative isolate min-h-[29rem] rounded-3xl border border-border particle-bg p-4 md:p-6">
          <div className="absolute inset-4 rounded-[1.5rem] border border-accent/25" />
          <div className="absolute inset-9 rounded-[1.2rem] border border-primary/20" />
          <div className="relative h-full overflow-hidden rounded-[1.2rem] border border-border">
            <SafeImage
              src={IMAGE_MAP.homeHero}
              fallbackSrc={IMAGE_MAP.fallback}
              alt="Home hero portrait"
              fill
              className="object-cover object-center grayscale-[0.12] contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="glass-panel absolute bottom-8 left-8 rounded-xl px-4 py-2">
            <p className="mono-label text-accent">Available for selected collaborations</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display-text text-4xl text-foreground md:text-6xl">Curated Artifacts</h2>
          <Button asChild variant="outline" className="border-primary/40">
            <Link href="/projects">
              See All Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="group overflow-hidden glass-panel">
              <div className="relative h-60 overflow-hidden">
                <SafeImage
                  src={project.image}
                  fallbackSrc={IMAGE_MAP.fallback}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardHeader className="space-y-3">
                <p className="mono-label text-accent">{project.year}</p>
                <CardTitle className="display-text text-3xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.summary}</CardDescription>
                <Button asChild variant="link" className="w-fit px-0 text-primary">
                  <Link href={`/projects/${project.slug}`}>
                    Open Case Study
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
