"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Music2, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { normalizeLocale } from "@/lib/i18n";

const YOUTUBE_ID = "MyxAIQ0QXtw";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=MyxAIQ0QXtw";
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1`;

const COPY = {
  vi: {
    title: "Nhan nhac dang phat",
    hint: "Am thanh tu dong bat sau lan tuong tac dau tien.",
    openYoutube: "Mo YouTube trong tab moi",
    toggle: "Phat nhac",
    closeLabel: "Dong trinh phat",
    ariaOpen: "Mo trinh phat nhac",
    ariaClose: "Thu nho trinh phat nhac",
    statusPlaying: "Dang phat",
    statusIdle: "Khong phat",
  },
  en: {
    title: "Now playing",
    hint: "Audio starts after the first interaction.",
    openYoutube: "Open YouTube in a new tab",
    toggle: "Play music",
    closeLabel: "Close player",
    ariaOpen: "Open music player",
    ariaClose: "Collapse music player",
    statusPlaying: "Playing",
    statusIdle: "Not playing",
  },
} as const;

export function MusicChatbox() {
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  const copy = COPY[locale];
  const [open, setOpen] = useState(false);
  const [playerState, setPlayerState] = useState<"idle" | "playing">("idle");
  const [embedUrl, setEmbedUrl] = useState(EMBED_URL);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const isPlaying = playerState === "playing";

  function unmute() {
    const payload = JSON.stringify({
      event: "command",
      func: "unMute",
      args: [],
    });
    iframeRef.current?.contentWindow?.postMessage(payload, "*");
  }

  function registerPlayer() {
    const targetWindow = iframeRef.current?.contentWindow;
    if (!targetWindow) return;
    targetWindow.postMessage(JSON.stringify({ event: "listening", id: "music-player" }), "*");
    targetWindow.postMessage(
      JSON.stringify({ event: "command", func: "addEventListener", args: ["onStateChange"] }),
      "*",
    );
  }

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      let data: unknown = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (!data || typeof data !== "object") return;
      const payload = data as { event?: string; info?: number };
      if (payload.event !== "onStateChange") return;
      if (payload.info === 1) {
        setPlayerState("playing");
      } else {
        setPlayerState("idle");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const origin = encodeURIComponent(window.location.origin);
    setEmbedUrl(`${EMBED_URL}&origin=${origin}`);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
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
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div
          className={cn(
            "absolute bottom-16 right-0 w-[20.5rem] overflow-hidden rounded-2xl border border-border shadow-2xl transition-all duration-200",
            open
              ? "translate-y-0 opacity-100 bg-card/95 backdrop-blur"
              : "pointer-events-none translate-y-3 opacity-0 bg-transparent backdrop-blur-0",
            isPlaying &&
              open &&
              "ring-2 ring-primary/60 shadow-[0_0_46px_rgba(59,130,246,0.55)]",
          )}
          aria-hidden={!open}
        >
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Music2 className="size-4 text-accent" />
            {copy.title}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full border border-border/70 p-1 text-muted-foreground transition hover:text-foreground"
            aria-label={copy.closeLabel}
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="space-y-3 px-4 py-3">
          <p className="text-xs text-muted-foreground">
            {copy.hint}
          </p>
          <div className="overflow-hidden rounded-xl border border-border/70 bg-black">
            <iframe
              title="YouTube music player"
              src={embedUrl}
              ref={iframeRef}
              className="h-40 w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={registerPlayer}
              allowFullScreen
            />
          </div>
          <Link
            href={YOUTUBE_URL}
            target="_blank"
            className="inline-flex items-center text-xs text-primary underline-offset-4 hover:underline"
          >
            {copy.openYoutube}
          </Link>
        </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-3 text-sm font-semibold shadow-lg backdrop-blur transition hover:-translate-y-0.5",
            isPlaying &&
              "border-primary/60 bg-primary/10 shadow-[0_0_26px_rgba(59,130,246,0.6)]",
          )}
          aria-label={open ? copy.ariaClose : copy.ariaOpen}
          aria-expanded={open}
        >
          <MessageCircle className="size-4 text-accent" />
          {copy.toggle}
          <span
            className={cn(
              "ml-1 inline-flex items-center gap-1 text-xs",
              isPlaying ? "text-primary" : "text-muted-foreground",
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                isPlaying ? "animate-pulse bg-primary" : "bg-muted-foreground/60",
              )}
            />
            {isPlaying ? copy.statusPlaying : copy.statusIdle}
          </span>
        </button>
      </div>
    </div>
  );
}
