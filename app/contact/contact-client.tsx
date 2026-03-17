"use client";

import Link from "next/link";
import { Copy, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getContactInfo, getSocialLinks } from "@/lib/content-data";
import type { Locale } from "@/lib/i18n";

const CONTACT_COPY = {
  vi: {
    tag: "Lien He",
    title: "Ket Noi De Hop Tac",
    description: "Form nay se mo ung dung email de gui tin nhan truc tiep.",
    secureMessage: "Gui Tin Nhan",
    send: "Gui Yeu Cau",
    sent: "Da mo ung dung email.",
    directEmail: "Gui nhanh qua email:",
    social: "Kenh Ket Noi",
    copyEmail: "Sao chep email",
    copied: "Da sao chep email",
    namePlaceholder: "Ho va ten",
    emailPlaceholder: "Email cua ban",
    messagePlaceholder: "Mo ta ngan ve du an can trao doi...",
    phone: "So dien thoai",
  },
  en: {
    tag: "Contact Node",
    title: "Initiate Collaboration",
    description: "This form opens your email client to send the message.",
    secureMessage: "Secure Message",
    send: "Send Request",
    sent: "Email client opened.",
    directEmail: "Send directly via email:",
    social: "Social Access",
    copyEmail: "Copy email",
    copied: "Email copied",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Project context...",
    phone: "Phone",
  },
} as const;

export function ContactPageClient({ locale }: { locale: Locale }) {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const copy = CONTACT_COPY[locale];
  const contact = getContactInfo(locale);
  const socialLinks = getSocialLinks();
  const mapQuery = encodeURIComponent(contact.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">{copy.tag}</p>
        <h1 className="section-title">{copy.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{copy.description}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="frosted-glass">
          <CardHeader>
            <CardTitle className="display-text text-4xl">{copy.secureMessage}</CardTitle>
            <CardDescription>{contact.responseTime}</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                const subject =
                  locale === "vi"
                    ? `Lien he tu ${formData.name || formData.email || "Website"}`
                    : `Contact from ${formData.name || formData.email || "Website"}`;
                const body = [
                  `${copy.namePlaceholder}: ${formData.name}`,
                  `${copy.emailPlaceholder}: ${formData.email}`,
                  "",
                  `${copy.messagePlaceholder}`,
                  formData.message,
                ].join("\n");
                const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(body)}`;
                window.location.href = mailto;
                setSent(true);
                setTimeout(() => setSent(false), 2200);
              }}
            >
              <Input
                placeholder={copy.namePlaceholder}
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                required
              />
              <Input
                type="email"
                placeholder={copy.emailPlaceholder}
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                required
              />
              <Textarea
                placeholder={copy.messagePlaceholder}
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }))
                }
                required
              />
              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {copy.send}
                </Button>
                {sent && <p className="text-sm text-muted-foreground">{copy.sent}</p>}
              </div>
              <p className="text-sm text-muted-foreground">
                {copy.directEmail}{" "}
                <Link className="text-primary underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="size-4 text-accent" />
                {copy.social}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((item) => (
                <Button key={item.label} asChild variant="outline" className="w-full justify-start">
                  <Link href={item.href} target="_blank">
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button variant="secondary" className="w-full justify-start" onClick={copyEmail}>
                <Copy className="size-4" />
                {copied ? copy.copied : copy.copyEmail}
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                  <Phone className="size-4" />
                  {copy.phone}: {contact.phone}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="size-4 text-primary" />
                {contact.cityLabel}
              </CardTitle>
              <CardDescription>{contact.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title={`Map: ${contact.address}`}
                  src={mapSrc}
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
