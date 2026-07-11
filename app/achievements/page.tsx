"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { SafeImage } from "@/components/ui/safe-image";
import { getAchievements, getExperiences, getImageMap } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";

const ACHIEVEMENT_COPY = {
  vi: {
    tag: "Thành Tựu",
    title: "Giải Thưởng, Cột Mốc và Kinh Nghiệm",
    featured: "Giải Tiêu Biểu",
    featuredTitle: "Giải Ba - HUTECH CODE WAR 2024",
    timeline: "Hành Trình Dự Án",
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
    <div className="space-y-12">
      {/* Title section */}
      <section className="space-y-4">
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {copy.title}
        </h1>
      </section>

      {/* Featured Award Cover */}
      <div className="bg-white border border-black/10 rounded-2xl p-2 shadow-sm overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black/5">
          <SafeImage
            src={imageMap.achievementHero}
            fallbackSrc={imageMap.fallback}
            alt="Achievement highlight"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-750"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-black/10 text-black rounded-xl p-4 md:p-5 max-w-[28rem] shadow-md">
            <p className="text-[11px] uppercase tracking-wider text-black/55 mb-1.5 font-medium">{copy.featured}</p>
            <p className="text-[18px] md:text-[22px] font-medium leading-tight tracking-tight text-black">{copy.featuredTitle}</p>
          </div>
        </div>
      </div>

      {/* Achievement list */}
      <section className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <div key={item.title} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3">
            <p className="text-[12px] uppercase tracking-wider text-black/40">{item.period}</p>
            <h3 className="text-[20px] font-medium tracking-tight text-black leading-snug">{item.title}</h3>
            <p className="text-[14px] text-black/60 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <h2 className="text-[28px] sm:text-[34px] font-medium text-black tracking-tight">{copy.timeline}</h2>
        <div className="relative pl-7">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-black/10" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <div key={`${item.company}-${item.role}`} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm relative space-y-3">
                <span className="absolute -left-[1.95rem] top-6 h-3.5 w-3.5 rounded-full bg-black border-[3px] border-white shadow-sm" />
                <p className="text-[12px] uppercase tracking-wider text-black/45">{item.date}</p>
                <h3 className="text-[18px] font-medium text-black tracking-tight">
                  {item.role} <span className="text-black/50 font-normal">@ {item.company}</span>
                </h3>
                <p className="text-[14px] text-black/60 leading-relaxed">{item.impact}</p>
              </div>
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
