"use client";

import React, { useRef, useState, useEffect } from "react";

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate scroll offset based on spec:
      // (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      setOffset(calculatedOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const row1Images = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  ];

  const row2Images = [
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
  ];

  // Tripled images for seamless scrolling loop
  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 w-full"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow1.map((url, idx) => (
            <img
              key={`r1-${idx}`}
              src={url}
              alt="3D Creator Work Row 1"
              loading="lazy"
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow2.map((url, idx) => (
            <img
              key={`r2-${idx}`}
              src={url}
              alt="3D Creator Work Row 2"
              loading="lazy"
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
