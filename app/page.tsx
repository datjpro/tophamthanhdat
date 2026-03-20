"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { getImageMap, getProfile, getProjects, getSiteThemeCopy } from "@/lib/content-data";
import { normalizeLocale, withLocale } from "@/lib/i18n";

const HOME_COPY = {
  vi: {
    badge: "Software Developer",
    title: "Ket noi ky nang xay dung giao dien hien dai voi tu duy he thong thuc chien.",
    description:
      "Day la portfolio ca nhan cua To Pham Thanh Dat, tong hop du an web, mobile va blockchain voi cach trinh bay de mo rong va cap nhat nhanh.",
    primaryFocusLabel: "Muc Tieu Chinh",
    primaryFocus: "Phat trien web/mobile, blockchain va huong toi vai tro Solution Architect.",
    currentStackLabel: "Cong Nghe Hien Tai",
    currentStack: "React.js, Flutter, ASP.NET Core, Solidity, Truffle.",
    availability: "San sang hop tac du an phu hop",
    curatedTitle: "Du An Noi Bat",
    seeAllProjects: "Xem Tat Ca Du An",
    openCaseStudy: "Xem Chi Tiet",
  },
  en: {
    badge: "Software Developer",
    title: "Bridging modern interface delivery with practical system thinking.",
    description:
      "This portfolio presents To Pham Thanh Dat's web, mobile, and blockchain work in a modular format that is easy to maintain and update.",
    primaryFocusLabel: "Primary Focus",
    primaryFocus: "Web/mobile engineering, blockchain systems, and growth toward Solution Architect.",
    currentStackLabel: "Current Stack",
    currentStack: "React.js, Flutter, ASP.NET Core, Solidity, Truffle.",
    availability: "Available for suitable collaborations",
    curatedTitle: "Featured Projects",
    seeAllProjects: "See All Projects",
    openCaseStudy: "Open Case Study",
  },
} as const;

function HomePageContent({ locale }: { locale: "vi" | "en" }) {
  const copy = HOME_COPY[locale];
  const profile = getProfile(locale);
  const featuredProjects = getProjects(locale).slice(0, 2);
  const siteThemeCopy = getSiteThemeCopy(locale);
  const imageMap = getImageMap();

  return (
    <div className="space-y-18">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Shield className="size-4 text-accent" />
            <p className="mono-label text-accent">{copy.badge}</p>
          </div>

          <h1 className="section-title max-w-4xl">{copy.title}</h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.about} {copy.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={withLocale("/projects", locale)}>
                {siteThemeCopy.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent">
              <Link href={withLocale("/contact", locale)}>{siteThemeCopy.ctaSecondary}</Link>
            </Button>
          </div>

          <div className="grid gap-6 pt-5 sm:grid-cols-2">
            <div>
              <p className="mono-label text-muted-foreground">{copy.primaryFocusLabel}</p>
              <p className="mt-2 text-sm text-foreground">{copy.primaryFocus}</p>
            </div>
            <div>
              <p className="mono-label text-muted-foreground">{copy.currentStackLabel}</p>
              <p className="mt-2 text-sm text-foreground">{copy.currentStack}</p>
            </div>
          </div>
        </div>

        <div className="relative isolate min-h-[29rem] rounded-3xl border border-border particle-bg p-4 md:p-6">
          <div className="absolute inset-4 rounded-[1.5rem] border border-accent/25" />
          <div className="absolute inset-9 rounded-[1.2rem] border border-primary/20" />
          <div className="relative h-full overflow-hidden rounded-[1.2rem] border border-border">
            <SafeImage
              src={imageMap.homeHero}
              fallbackSrc={imageMap.fallback}
              alt="Home hero portrait"
              fill
              className="object-cover object-center grayscale-[0.12] contrast-110"
              priority
            />
            <div className="image-scrim" />
          </div>
          <div className="image-overlay-glass image-overlay-compact absolute bottom-6 left-6 max-w-[calc(100%-3rem)] rounded-xl px-4 py-2 md:bottom-8 md:left-8">
            <p className="image-overlay-label mono-label">{copy.availability}</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display-text text-4xl text-foreground md:text-6xl">{copy.curatedTitle}</h2>
          <Button asChild variant="outline" className="border-primary/40">
            <Link href={withLocale("/projects", locale)}>
              {copy.seeAllProjects}
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
                  fallbackSrc={imageMap.fallback}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="image-scrim" />
              </div>
              <CardHeader className="space-y-3">
                <p className="mono-label text-accent">{project.year}</p>
                <CardTitle className="display-text text-3xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.summary}</CardDescription>
                <Button asChild variant="link" className="w-fit px-0 text-primary">
                  <Link href={withLocale(`/projects/${project.slug}`, locale)}>
                    {copy.openCaseStudy}
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

function HomePageClient() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <HomePageContent locale={locale} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageClient />
    </Suspense>
  );
}
