"use client";

import Link from "next/link";
import { useRef } from "react";

import { SafeImage } from "@/components/ui/safe-image";
import { cn } from "@/lib/utils";

type LogoCityProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
};

export function LogoCity({ href, className, ariaLabel }: LogoCityProps) {
  const rootRef = useRef<HTMLAnchorElement | null>(null);

  const handleMove: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const target = rootRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    target.style.setProperty("--mx", x.toFixed(3));
    target.style.setProperty("--my", y.toFixed(3));
  };

  const handleLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const target = rootRef.current;
    if (!target) return;
    target.style.setProperty("--mx", "0");
    target.style.setProperty("--my", "0");
  };

  return (
    <Link
      href={href}
      ref={rootRef}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("logo-city", className)}
    >
      <span className="logo-city__terminal" aria-hidden="true">
        <span>&lt;DatJ | CITY-TECH INTEGRATION&gt;</span>
        <span>cmd: init.ship.rose; data.context = ManCity;</span>
      </span>
      <span className="logo-city__distort" aria-hidden="true" />
      <span className="logo-city__bubble" aria-hidden="true">
        <SafeImage
          src="/logo-mc.png"
          fallbackSrc="/logo-mc.png"
          alt=""
          width={160}
          height={160}
          className="logo-city__mc"
        />
        <span className="logo-city__ship">
          <svg viewBox="0 0 120 80" aria-hidden="true">
            <path d="M12 60H108L92 74H28L12 60Z" />
            <polygon points="38,58 38,18 12,58" />
            <polygon points="60,58 60,8 90,58" />
            <polygon points="82,58 82,26 108,58" />
          </svg>
        </span>
        <span className="logo-city__rose">
          <svg viewBox="0 0 60 60" aria-hidden="true">
            <circle cx="30" cy="30" r="8" />
            <circle cx="30" cy="12" r="7" />
            <circle cx="44" cy="20" r="7" />
            <circle cx="46" cy="34" r="7" />
            <circle cx="30" cy="46" r="7" />
            <circle cx="16" cy="34" r="7" />
            <circle cx="16" cy="20" r="7" />
          </svg>
        </span>
      </span>
      <span className="logo-city__slash logo-city__slash--1" aria-hidden="true" />
      <span className="logo-city__slash logo-city__slash--2" aria-hidden="true" />
      <span className="logo-city__slash logo-city__slash--3" aria-hidden="true" />
      <span className="logo-city__gel" aria-hidden="true" />
      <SafeImage
        src="/logo-datj.png"
        fallbackSrc="/logo.png"
        alt="DatJ logo"
        width={160}
        height={88}
        className="logo-city__image"
        priority
      />
    </Link>
  );
}
