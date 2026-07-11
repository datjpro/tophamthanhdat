"use client";

import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

interface HeroSectionProps {
  onContactClick?: () => void;
  onNavClick?: (sectionId: string) => void;
}

export function HeroSection({ onContactClick, onNavClick }: HeroSectionProps) {
  const navLinks = [
    { label: "About", target: "about" },
    { label: "Price", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="z-20 w-full">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          <span className="font-bold text-[#D7E2EA] tracking-wider uppercase text-sm md:text-lg">
            DATJPRO
          </span>
          <div className="flex gap-6 md:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavClick?.(link.target)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 2. Hero Heading (centered vertically, wrapped in overflow-hidden) */}
      <div className="flex-grow flex items-center justify-center w-full z-0 px-4 md:px-10">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} as="h1" className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m dat
          </FadeIn>
        </div>
      </div>

      {/* 3. Hero Portrait (absolute positioning) */}
      <FadeIn
        delay={0.6}
        y={30}
        as="div"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        {/* We make Magnet click-through/interactive by disabling pointer events on wrapper and enabling on children */}
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto w-full h-full flex justify-center items-end"
        >
          <img
            src="/portfolio/profile/home-hero.jpg"
            alt="Dat Portrait"
            className="w-full h-auto object-contain select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* 4. Bottom bar */}
      <div className="z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full gap-4">
        <FadeIn delay={0.35} y={20} as="p" className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
          a software developer driven by crafting practical and scalable projects
        </FadeIn>

        <FadeIn delay={0.5} y={20} as="div" className="flex-shrink-0">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
