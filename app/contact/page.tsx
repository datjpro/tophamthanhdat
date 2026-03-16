"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ContactPageClient } from "@/app/contact/contact-client";
import { normalizeLocale } from "@/lib/i18n";

function ContactPageWrapper() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  return <ContactPageClient locale={locale} />;
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageWrapper />
    </Suspense>
  );
}
