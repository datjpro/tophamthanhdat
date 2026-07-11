"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { SafeImage } from "@/components/ui/safe-image";
import { getAboutCards, getImageMap, getProfile, getSkills } from "@/lib/content-data";
import { normalizeLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ABOUT_COPY = {
  vi: {
    tag: "Giới Thiệu / Profile Information",
    title: "Nền Tảng Tư Duy Phát Triển",
    terminal: "profile_info.json",
    locationLabel: "Địa Điểm",
    experienceLabel: "Trạng Thái",
    galleryAlt: "Ảnh giới thiệu",
    skillTitle: "Kỹ Năng Chuyên Môn",
    skillDescription: "Cụm công nghệ và kỹ năng sử dụng hằng ngày trong công việc.",
  },
  en: {
    tag: "About / Profile Information",
    title: "The Architecture Behind My Work",
    terminal: "profile_info.json",
    locationLabel: "Location",
    experienceLabel: "Status",
    galleryAlt: "About gallery",
    skillTitle: "Skill Nodes",
    skillDescription: "Core capability clusters for web, mobile, and blockchain engineering.",
  },
} as const;

function AboutPageContent({ locale }: { locale: "vi" | "en" }) {
  const copy = ABOUT_COPY[locale];
  const cards = getAboutCards(locale);
  const skills = getSkills(locale);
  const profile = getProfile(locale);
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

      {/* Grid container */}
      <section className="grid grid-cols-12 gap-8 items-start">
        {/* Profile Card (left) */}
        <article className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-black/5 pb-3">
            <span className="text-[13px] font-mono text-black/40">{copy.terminal}</span>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/20" />
              <span className="h-2 w-2 rounded-full bg-black/30" />
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[15px] text-black/70 leading-relaxed font-normal">
              {profile.objective}
            </p>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-black/5 bg-black/5">
              <SafeImage
                src={imageMap.aboutSticky}
                fallbackSrc={imageMap.fallback}
                alt="About profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-750"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-5 text-[14px]">
              <div>
                <p className="text-[12px] uppercase tracking-wider text-black/40 mb-1">{copy.locationLabel}</p>
                <p className="font-medium text-black leading-tight">{profile.location}</p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider text-black/40 mb-1">{copy.experienceLabel}</p>
                <p className="font-medium text-black leading-tight">{profile.experience}</p>
              </div>
            </div>
          </div>
        </article>

        {/* Content list (right) */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          {/* Objective Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  "bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3",
                  index === 0 ? "md:col-span-2" : ""
                )}
              >
                <h3 className="flex items-center gap-2 text-[18px] font-medium text-black tracking-tight">
                  <card.icon className="size-4 text-black/70 flex-shrink-0" />
                  {card.title}
                </h3>
                <p className="text-[14px] text-black/60 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid gap-6 md:grid-cols-2">
            {imageMap.aboutGallery.map((image, idx) => (
              <div key={image} className="bg-white border border-black/10 rounded-2xl p-2 shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5">
                  <SafeImage
                    src={image}
                    fallbackSrc={imageMap.fallback}
                    alt={`${copy.galleryAlt} ${idx + 1}`}
                    fill
                    className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skills Node Card */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-[22px] font-medium text-black tracking-tight">{copy.skillTitle}</h2>
              <p className="text-[14px] text-black/50 mt-1">{copy.skillDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black/3 rounded-xl border-l-2 border-black px-4 py-3 space-y-1"
                >
                  <p className="text-[14px] font-medium text-black leading-tight">{skill.name}</p>
                  <p className="text-[12px] text-black/50">
                    {skill.category} &bull; {skill.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
