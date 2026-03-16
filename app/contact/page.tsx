"use client";

import { useSearchParams } from "next/navigation";

import { ContactPageClient } from "@/app/contact/contact-client";
import { normalizeLocale } from "@/lib/i18n";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <ContactPageClient locale={locale} />;
}
