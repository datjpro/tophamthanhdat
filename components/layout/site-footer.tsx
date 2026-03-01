"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { getFooterCopy, getSocialLinks } from "@/lib/data";
import { normalizeLocale } from "@/lib/i18n";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  const footer = getFooterCopy(locale);
  const socialLinks = getSocialLinks();

  return (
    <footer className="mx-auto mb-7 mt-12 w-[min(96%,82rem)] border-t border-border px-2 py-10">
      <div className="grid gap-7 md:grid-cols-2">
        <div className="space-y-4">
          <p className="mono-label text-muted-foreground">{footer.subtitle}</p>
          <p className="display-text max-w-xl text-3xl leading-none text-foreground md:text-5xl">
            {footer.headline}
          </p>
        </div>

        <div className="space-y-5 md:justify-self-end">
          <p className="mono-label text-muted-foreground">{footer.connect}</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground md:flex-row md:justify-between">
        <p>
          {footer.rights} &copy; {new Date().getFullYear()} To Dat. All rights reserved.
        </p>
        <p className="mono-label">{footer.madeWith}</p>
      </div>
    </footer>
  );
}
