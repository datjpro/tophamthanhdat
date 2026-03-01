"use client";

import Link from "next/link";
import { Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/lib/data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("todathanhdev@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">Contact Node</p>
        <h1 className="section-title">Initiate Contact</h1>
        <p className="max-w-3xl text-muted-foreground">
          Styled as frosted editorial panels. Form is still demo-state for easy API hookup later.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="frosted-glass">
          <CardHeader>
            <CardTitle className="display-text text-4xl">Secure Message</CardTitle>
            <CardDescription>Average response window: 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 2200);
              }}
            >
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
              <Textarea placeholder="Project context..." required />
              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Request
                </Button>
                {sent && <p className="text-sm text-muted-foreground">Message submitted (UI demo).</p>}
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="size-4 text-accent" />
                Social Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {SOCIAL_LINKS.map((item) => (
                <Button key={item.label} asChild variant="outline" className="w-full justify-start">
                  <Link href={item.href} target="_blank">
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button variant="secondary" className="w-full justify-start" onClick={copyEmail}>
                <Copy className="size-4" />
                {copied ? "Email copied" : "Copy email"}
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="size-4 text-primary" />
                Ho Chi Minh City, Vietnam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="particle-bg h-48 rounded-2xl border border-border bg-[linear-gradient(130deg,rgba(230,81,0,0.12),rgba(0,242,255,0.1))]" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
