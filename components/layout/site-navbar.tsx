"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getNavLinks } from "@/lib/data";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = normalizeLocale(searchParams.get("lang"));
  const navLinks = getNavLinks(locale);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[min(96%,82rem)] -translate-x-1/2 rounded-full glass-nav">
      <div className="flex h-14 items-center gap-3 px-4 md:px-6">
        <div className="flex min-w-0 flex-1 items-center">
          <Link href={withLocale("/", locale)} className="flex items-center gap-3">
            <span className="mono-label text-primary">TD</span>
            <span className="text-sm font-semibold tracking-tight">ToDat.Archive</span>
          </Link>
        </div>

        <nav className="hidden flex-none items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={withLocale(link.href, locale)}
                className={cn(
                  "inline-flex h-9 min-w-[112px] items-center justify-center whitespace-nowrap rounded-full px-4 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            className="border border-border bg-muted/70 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="space-y-2 border-t border-border px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={withLocale(link.href, locale)}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-2 text-sm",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
