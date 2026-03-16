"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { getAboutCards, getImageMap, getProfile, getSkills } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";

const ABOUT_COPY = {
  vi: {
    tag: "Gioi Thieu / Profile Intelligence",
    title: "Nen Tang Tu Duy Phat Trien",
    terminal: "profile_dump.sh",
    whoami: "sinhvien@portfolio:~$ whoami",
    locationLabel: "Dia Diem",
    experienceLabel: "Trang Thai",
    galleryAlt: "Anh gioi thieu",
    skillTitle: "Ky Nang Chuyen Mon",
    skillDescription: "Cum ky nang su dung hang ngay trong web, mobile va blockchain.",
  },
  en: {
    tag: "About / Profile Intelligence",
    title: "The Architecture Behind My Work",
    terminal: "profile_dump.sh",
    whoami: "student@portfolio:~$ whoami",
    locationLabel: "Location",
    experienceLabel: "Status",
    galleryAlt: "About gallery",
    skillTitle: "Skill Nodes",
    skillDescription: "Daily capability clusters for web, mobile, and blockchain delivery.",
  },
} as const;

function AboutPageContent({ locale }: { locale: "vi" | "en" }) {
  const copy = ABOUT_COPY[locale];
  const cards = getAboutCards(locale);
  const skills = getSkills(locale);
  const profile = getProfile(locale);
  const imageMap = getImageMap();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">{copy.tag}</p>
        <h1 className="section-title">{copy.title}</h1>
      </section>

      <section className="asymmetric-grid gap-5">
        <article className="glass-panel col-span-12 h-fit rounded-2xl p-1 lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-xl border border-border bg-background/60">
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              </div>
              <p className="mono-label text-muted-foreground">{copy.terminal}</p>
            </div>
            <div className="space-y-5 p-5">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-accent">{copy.whoami}</span>
              </p>
              <p className="text-sm text-muted-foreground">{profile.objective}</p>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                <SafeImage
                  src={imageMap.aboutSticky}
                  fallbackSrc={imageMap.fallback}
                  alt="About profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <p className="mono-label text-muted-foreground">{copy.locationLabel}</p>
                  <p className="mt-1 text-sm">{profile.location}</p>
                </div>
                <div>
                  <p className="mono-label text-muted-foreground">{copy.experienceLabel}</p>
                  <p className="mt-1 text-sm">{profile.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="col-span-12 space-y-5 lg:col-span-7">
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card, index) => (
              <Card
                key={card.title}
                className={index === 0 ? "glass-panel md:col-span-2" : "glass-panel"}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <card.icon className="size-4 text-primary" />
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {imageMap.aboutGallery.map((image, idx) => (
              <div key={image} className="glass-panel relative aspect-[3/4] overflow-hidden rounded-2xl p-2">
                <div className="relative h-full overflow-hidden rounded-xl">
                  <SafeImage
                    src={image}
                    fallbackSrc={imageMap.fallback}
                    alt={`${copy.galleryAlt} ${idx + 1}`}
                    fill
                    className="object-cover grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="display-text text-4xl">{copy.skillTitle}</CardTitle>
              <CardDescription>{copy.skillDescription}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="frosted-glass rounded-xl border-l-2 border-l-primary px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {skill.category} / {skill.note}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function AboutPageClient() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <AboutPageContent locale={locale} />;
}

export default function AboutPage() {
  return (
    <Suspense fallback={null}>
      <AboutPageClient />
    </Suspense>
  );
}
