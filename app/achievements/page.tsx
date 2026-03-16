"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { getAchievements, getExperiences, getImageMap } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";

const ACHIEVEMENT_COPY = {
  vi: {
    tag: "Thanh Tuu",
    title: "Giai Thuong, Cot Moc va Kinh Nghiem",
    featured: "Giai Tieu Bieu",
    featuredTitle: "Giai Ba - HUTECH CODE WAR 2024",
    timeline: "Hanh Trinh Du An",
  },
  en: {
    tag: "Achievements",
    title: "Wins, Milestones, and Experience",
    featured: "Featured Award",
    featuredTitle: "Third Prize - HUTECH CODE WAR 2024",
    timeline: "Experience Timeline",
  },
} as const;

function AchievementsPageContent({ locale }: { locale: "vi" | "en" }) {
  const copy = ACHIEVEMENT_COPY[locale];
  const achievements = getAchievements(locale);
  const experiences = getExperiences(locale);
  const imageMap = getImageMap();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">{copy.tag}</p>
        <h1 className="section-title">{copy.title}</h1>
      </section>

      <div className="glass-panel overflow-hidden rounded-3xl p-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <SafeImage
            src={imageMap.achievementHero}
            fallbackSrc={imageMap.fallback}
            alt="Achievement highlight"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-lg bg-background/70 px-4 py-3 backdrop-blur">
            <p className="mono-label text-accent">{copy.featured}</p>
            <p className="display-text text-3xl text-foreground">{copy.featuredTitle}</p>
          </div>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <Card key={item.title} className="glass-panel">
            <CardHeader>
              <p className="mono-label text-primary">{item.period}</p>
              <CardTitle className="display-text text-3xl">{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="display-text text-5xl">{copy.timeline}</h2>
        <div className="relative pl-7">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
          <div className="space-y-4">
            {experiences.map((item) => (
              <Card key={`${item.company}-${item.role}`} className="glass-panel relative">
                <span className="absolute -left-[1.95rem] top-6 h-3.5 w-3.5 rounded-full bg-primary" />
                <CardHeader>
                  <p className="mono-label text-accent">{item.date}</p>
                  <CardTitle className="text-xl">
                    {item.role} <span className="text-muted-foreground">@ {item.company}</span>
                  </CardTitle>
                  <CardDescription>{item.impact}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AchievementsPageClient() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <AchievementsPageContent locale={locale} />;
}

export default function AchievementsPage() {
  return (
    <Suspense fallback={null}>
      <AchievementsPageClient />
    </Suspense>
  );
}
