"use client";

import type { AnchorHTMLAttributes } from "react";

interface LiveProjectButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
}

export function LiveProjectButton({ label = "Live Project", className = "", ...props }: LiveProjectButtonProps) {
  return (
    <a
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 inline-flex items-center justify-center
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base ${className}`}
      {...props}
    >
      {label}
    </a>
  );
}
