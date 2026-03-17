"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Music2, X } from "lucide-react";

import { cn } from "@/lib/utils";

const YOUTUBE_ID = "MyxAIQ0QXtw";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=MyxAIQ0QXtw";
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1`;

export function MusicChatbox() {
  const [open, setOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  function unmute() {
    const payload = JSON.stringify({
      event: "command",
      func: "unMute",
      args: [],
    });
    iframeRef.current?.contentWindow?.postMessage(payload, "*");
  }

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      unmute();
    }, 200);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const handleInteraction = () => {
      unmute();
    };
    window.addEventListener("pointerdown", handleInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", handleInteraction);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className={cn(
          "w-[20.5rem] overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur transition-all duration-200",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Music2 className="size-4 text-accent" />
            Nhan nhac dang phat
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full border border-border/70 p-1 text-muted-foreground transition hover:text-foreground"
            aria-label="Dong trinh phat"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="space-y-3 px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Phat nhac tu YouTube. Am thanh tu dong bat sau lan tuong tac dau tien.
          </p>
          <div className="overflow-hidden rounded-xl border border-border/70 bg-black">
            <iframe
              title="YouTube music player"
              src={EMBED_URL}
              ref={iframeRef}
              className="h-40 w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <Link
            href={YOUTUBE_URL}
            target="_blank"
            className="inline-flex items-center text-xs text-primary underline-offset-4 hover:underline"
          >
            Mo YouTube trong tab moi
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-3 text-sm font-semibold shadow-lg backdrop-blur transition hover:-translate-y-0.5"
        aria-label={open ? "Thu nho trinh phat nhac" : "Mo trinh phat nhac"}
        aria-expanded={open}
      >
        <MessageCircle className="size-4 text-accent" />
        Phat nhac
      </button>
    </div>
  );
}
