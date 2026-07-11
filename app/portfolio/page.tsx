"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

// Custom Hook to manage scoped body styles for the portfolio subpages
function usePortfolioTheme() {
  useEffect(() => {
    // Add class on mount
    document.documentElement.classList.add("portfolio-page");
    document.body.classList.add("portfolio-page");

    // Remove class on unmount
    return () => {
      document.documentElement.classList.remove("portfolio-page");
      document.body.classList.remove("portfolio-page");
    };
  }, []);
}

export default function PortfolioPage() {
  usePortfolioTheme();

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "contact") {
      // Scroll to bottom of the page for contact
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleContactClick} onNavClick={handleNavClick} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={handleContactClick} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />
    </div>
  );
}
