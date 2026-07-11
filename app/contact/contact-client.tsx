"use client";

import React, { useState } from "react";
import { Copy, Mail, MapPin, Phone } from "lucide-react";

import { getContactInfo, getSocialLinks } from "@/lib/content-data";
import type { Locale } from "@/lib/i18n";

const CONTACT_COPY = {
  vi: {
    tag: "Liên Hệ",
    title: "Kết Nối Để Hợp Tác",
    description: "Form này sẽ mở ứng dụng email để gửi tin nhắn trực tiếp.",
    secureMessage: "Gửi Tin Nhắn",
    send: "Gửi Yêu Cầu",
    sent: "Đã mở ứng dụng email.",
    directEmail: "Gửi nhanh qua email:",
    social: "Kênh Kết Nối",
    copyEmail: "Sao chép email",
    copied: "Đã sao chép email",
    namePlaceholder: "Họ và tên",
    emailPlaceholder: "Email của bạn",
    messagePlaceholder: "Mô tả ngắn về dự án cần trao đổi...",
    phone: "Số điện thoại",
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
    <div className="space-y-12">
      {/* Title section */}
      <section className="space-y-4">
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
        <h1 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-black leading-tight">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-[16px] text-black/60 leading-relaxed">
          {copy.description}
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        {/* Contact Form */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-[22px] font-medium text-black tracking-tight">{copy.secureMessage}</h2>
            <p className="text-[13px] text-black/50">{contact.responseTime}</p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const subject =
                locale === "vi"
                  ? `Liên hệ từ ${formData.name || formData.email || "Website"}`
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
            <input
              type="text"
              placeholder={copy.namePlaceholder}
              value={formData.name}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-black placeholder-black/35 focus:outline-none focus:border-black/40 text-[14px]"
              required
            />
            <input
              type="email"
              placeholder={copy.emailPlaceholder}
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-black placeholder-black/35 focus:outline-none focus:border-black/40 text-[14px]"
              required
            />
            <textarea
              placeholder={copy.messagePlaceholder}
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  message: event.target.value,
                }))
              }
              rows={4}
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-black placeholder-black/35 focus:outline-none focus:border-black/40 text-[14px] resize-none"
              required
            />
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-black text-white px-5 py-[0.4em] rounded-full hover:bg-black/85 transition-colors duration-200 text-[14px] cursor-pointer font-medium"
              >
                {copy.send}
              </button>
              {sent && <p className="text-sm text-black/55">{copy.sent}</p>}
            </div>
            <p className="text-[13px] text-black/50 pt-2 border-t border-black/5">
              {copy.directEmail}{" "}
              <a href={`mailto:${contact.email}`} className="text-black underline underline-offset-2 hover:opacity-60 transition-opacity">
                {contact.email}
              </a>
            </p>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Social Channels */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="flex items-center gap-2 text-[16px] font-medium text-black tracking-tight">
              <Mail className="size-4 text-black/60 flex-shrink-0" />
              {copy.social}
            </h2>
            <div className="space-y-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center gap-2 justify-start bg-white hover:bg-black hover:text-white text-black border border-black/10 rounded-xl px-4 py-2.5 transition-all duration-200 text-[14px]"
                >
                  {item.icon ? <item.icon className="size-4 opacity-70" /> : null}
                  <span>{item.label}</span>
                </a>
              ))}
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center gap-2 justify-start bg-black/5 hover:bg-black hover:text-white text-black rounded-xl px-4 py-2.5 transition-all duration-200 text-[14px] cursor-pointer"
              >
                <Copy className="size-4 opacity-70" />
                <span>{copied ? copy.copied : copy.copyEmail}</span>
              </button>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="w-full inline-flex items-center gap-2 justify-start bg-white hover:bg-black hover:text-white text-black border border-black/10 rounded-xl px-4 py-2.5 transition-all duration-200 text-[14px]"
              >
                <Phone className="size-4 opacity-70" />
                <span>
                  {copy.phone}: {contact.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="space-y-1">
              <h2 className="flex items-center gap-2 text-[16px] font-medium text-black tracking-tight">
                <MapPin className="size-4 text-black/60 flex-shrink-0" />
                {contact.cityLabel}
              </h2>
              <p className="text-[13px] text-black/55">{contact.address}</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-black/5 bg-black/5">
              <iframe
                title={`Map: ${contact.address}`}
                src={mapSrc}
                className="h-48 w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
