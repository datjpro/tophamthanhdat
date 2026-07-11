"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

interface ProjectData {
  number: string;
  title: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // targetScale calculation: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex justify-center items-start sticky top-24 md:top-32 w-full z-0"
      style={{
        // Add responsive top padding dynamically using Tailwind variables defined in parent
        top: `calc(${index * 28}px + var(--card-sticky-offset, 6rem))`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        {/* Top row */}
        <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-[#D7E2EA]/15 w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]/20 leading-none select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] tracking-wide mt-1">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} target="_blank" rel="noreferrer noopener" />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 md:gap-6 w-full">
          {/* Left Column (40%): 2 stacked images */}
          <div className="flex flex-col gap-4 md:gap-6 w-full justify-between">
            <div
              className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] w-full"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} screenshot 1`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] w-full"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} screenshot 2`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (60%): 1 tall image */}
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] w-full h-full min-h-[300px] md:min-h-0">
            <img
              src={project.col2Image}
              alt={`${project.title} spotlight render`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const projects: ProjectData[] = [
    {
      number: "01",
      title: "Nextlevel Studio",
      category: "Client",
      col1Image1:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1Image2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      link: "#",
    },
    {
      number: "02",
      title: "Aura Brand Identity",
      category: "Personal",
      col1Image1:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1Image2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      link: "#",
    },
    {
      number: "03",
      title: "Solaris Digital",
      category: "Client",
      col1Image1:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1Image2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 w-full [--card-sticky-offset:6rem] md:[--card-sticky-offset:8rem]"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 0.95 }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="flex flex-col gap-10 w-full relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
