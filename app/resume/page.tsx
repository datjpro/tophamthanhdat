import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES, IMAGE_MAP, SKILLS } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="glass-panel relative aspect-[3/4] overflow-hidden rounded-3xl p-2">
          <div className="relative h-full overflow-hidden rounded-2xl">
            <Image src={IMAGE_MAP.resumeProfile} alt="Resume profile" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="mono-label text-accent">Resume / Professional Summary</p>
          <h1 className="section-title">Experience, Direction and Capability Stack</h1>
          <p className="max-w-3xl text-muted-foreground">
            This page is sectionized for fast editing. Data remains centralized in lib/data.ts for
            maintainability.
          </p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/resume.pdf" target="_blank">
              <Download className="size-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-5xl">Experience</h2>
        <div className="grid gap-4">
          {EXPERIENCES.map((exp) => (
            <Card key={`${exp.company}-${exp.role}`} className="glass-panel">
              <CardHeader>
                <p className="mono-label text-primary">{exp.date}</p>
                <CardTitle className="text-2xl">
                  {exp.role} <span className="text-muted-foreground">@ {exp.company}</span>
                </CardTitle>
                <CardDescription>{exp.impact}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-5xl">Skills Matrix</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <Card key={skill.name} className="glass-panel">
              <CardHeader>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
                <CardDescription className="mono-label text-muted-foreground">
                  {skill.category} / {skill.note}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
