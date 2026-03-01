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
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
        <h1 className="section-title text-4xl md:text-5xl">Get In Touch</h1>
        <p className="max-w-3xl text-muted-foreground">
          Form nay la UI demo. Ban co the noi API submit sau trong file `app/contact/page.tsx`.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Send message</CardTitle>
            <CardDescription>Toi se phan hoi trong 24h.</CardDescription>
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
              <Input placeholder="Ten cua ban" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Noi dung can trao doi..." required />
              <div className="flex items-center gap-3">
                <Button type="submit">Gui lien he</Button>
                {sent && <p className="text-sm text-muted-foreground">Da submit demo.</p>}
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="size-4" />
                Social links
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
                {copied ? "Da copy email" : "Copy email"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="size-4" />
                Ho Chi Minh City, Vietnam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-44 rounded-2xl border border-border/70 bg-[radial-gradient(circle_at_20%_30%,rgba(137,165,255,0.35),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(0,216,255,0.3),transparent_32%),linear-gradient(120deg,rgba(38,39,51,0.76),rgba(10,12,20,0.95))]" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
