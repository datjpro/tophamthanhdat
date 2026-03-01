import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES, SKILLS } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Resume</p>
        <h1 className="section-title text-4xl md:text-5xl">Professional Summary</h1>
        <p className="max-w-3xl text-muted-foreground">
          Trang resume rieng de ban de cap nhat kinh nghiem va ky nang. Neu co CV file, doi link
          nut download ben duoi.
        </p>
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="size-4" />
            Download CV
          </Link>
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="section-title text-2xl md:text-3xl">Experience</h2>
        <div className="grid gap-4">
          {EXPERIENCES.map((exp) => (
            <Card key={`${exp.company}-${exp.role}`}>
              <CardHeader>
                <CardTitle>
                  {exp.role} <span className="text-muted-foreground">@ {exp.company}</span>
                </CardTitle>
                <CardDescription>{exp.date}</CardDescription>
                <p className="text-sm text-muted-foreground">{exp.impact}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-title text-2xl md:text-3xl">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle className="text-base">{skill.name}</CardTitle>
                <CardDescription>
                  {skill.category} · {skill.note}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
