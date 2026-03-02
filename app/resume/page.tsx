"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { getExperiences, getImageMap, getProfile, getSkills } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";

const RESUME_COPY = {
  vi: {
    tag: "CV / Tong Quan Chuyen Mon",
    title: "Dinh Huong, Kinh Nghiem va Nang Luc",
    description:
      "Thong tin CV duoc dong bo theo du lieu trung tam, de cap nhat nhanh khi bo sung du an va thanh tuu moi.",
    download: "Tai CV",
    experience: "Kinh Nghiem & Du An",
    skills: "Ky Nang Chuyen Mon",
    education: "Hoc Van",
    objective: "Muc Tieu Nghe Nghiep",
  },
  en: {
    tag: "Resume / Professional Summary",
    title: "Direction, Experience, and Capability Stack",
    description:
      "Resume content is centralized for fast updates whenever new projects and achievements are added.",
    download: "Download CV",
    experience: "Experience & Projects",
    skills: "Skills Matrix",
    education: "Education",
    objective: "Career Direction",
  },
} as const;

function ResumePageContent() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  const copy = RESUME_COPY[locale];
  const profile = getProfile(locale);
  const experiences = getExperiences(locale);
  const skills = getSkills(locale);
  const imageMap = getImageMap();

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="glass-panel relative aspect-[3/4] overflow-hidden rounded-3xl p-2">
          <div className="relative h-full overflow-hidden rounded-2xl">
            <SafeImage
              src={imageMap.resumeProfile}
              fallbackSrc={imageMap.fallback}
              alt="Resume profile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="mono-label text-accent">{copy.tag}</p>
          <h1 className="section-title">{copy.title}</h1>
          <p className="max-w-3xl text-muted-foreground">{profile.about}</p>
          <p className="max-w-3xl text-muted-foreground">{copy.description}</p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/resume.pdf" target="_blank">
              <Download className="size-4" />
              {copy.download}
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-5xl">{copy.education}</h2>
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-2xl">{profile.education}</CardTitle>
            <CardDescription>
              <span className="mono-label text-muted-foreground">{copy.objective}: </span>
              {profile.objective}
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-5xl">{copy.experience}</h2>
        <div className="grid gap-4">
          {experiences.map((exp) => (
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
        <h2 className="display-text text-5xl">{copy.skills}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
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

export default function ResumePage() {
  return (
    <Suspense fallback={null}>
      <ResumePageContent />
    </Suspense>
  );
}
