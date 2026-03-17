"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoRippleProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export function LogoRipple({ href, className, children, ariaLabel }: LogoRippleProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn("logo-ripple", className)}
    >
      <span className="logo-ripple__distort" aria-hidden="true" />
      <span className="logo-ripple__ripple" aria-hidden="true" />
      <span className="logo-ripple__slash logo-ripple__slash--1" aria-hidden="true" />
      <span className="logo-ripple__slash logo-ripple__slash--2" aria-hidden="true" />
      <span className="logo-ripple__slash logo-ripple__slash--3" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
