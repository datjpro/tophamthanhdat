"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { normalizeLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));

  const nextLocale: Locale = locale === "vi" ? "en" : "vi";

  function toggleLocale() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLocale);
    const nextQuery = params.toString();
    const nextHref = nextQuery ? `${pathname}?${nextQuery}` : pathname;
    router.replace(nextHref, { scroll: false });
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="w-[74px] justify-center border border-border/70 bg-card/60 px-0"
      aria-label={locale === "vi" ? "Switch to English" : "Chuyen sang tieng Viet"}
    >
      <Languages className="size-4" />
      <span className="mono-label text-[10px]">{locale.toUpperCase()}</span>
    </Button>
  );
}
