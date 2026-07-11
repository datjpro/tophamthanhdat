"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { normalizeLocale, withLocale, type Locale } from "@/lib/i18n";

// Hook as specified in prompt, adapted to reset on text changes
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timerId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        const next = text.slice(0, i + 1);
        setDisplayed(next);
        i++;
        if (next.length === text.length) {
          setDone(true);
          if (intervalId) clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timerId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

const HOME_COPY = {
  vi: {
    logo: "DatJ®",
    intro1: "Xin chào, tôi là Tô Đạt,",
    intro2: "Lập trình viên phát triển Web, Mobile và Blockchain",
    typewriter: "Chào mừng bạn ghé thăm. Nơi tư duy hệ thống gặp gỡ giao diện hiện đại. Hôm nay chúng ta sẽ phát triển dự án gì?",
    buttons: [
      { label: "Xem các dự án", href: "/projects" },
      { label: "Xem hồ sơ (CV)", href: "/resume" },
      { label: "Thành tích nổi bật", href: "/achievements" },
      { label: "Đọc blog cá nhân", href: "/blog" },
    ],
    reachMe: "Liên hệ: todat2207@gmail.com",
    getInTouch: "Liên hệ",
    links: [
      { label: "Dự Án", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Thành Tựu", href: "/achievements" },
      { label: "Blog", href: "/blog" },
    ],
  },
  en: {
    logo: "DatJ®",
    intro1: "Hey there, meet To Dat,",
    intro2: "Developer building Web, Mobile, and Blockchain systems",
    typewriter: "Glad you stopped in. I bridge modern interface design with practical system thinking. Now, what are we building?",
    buttons: [
      { label: "Explore my projects", href: "/projects" },
      { label: "Read my resume", href: "/resume" },
      { label: "My achievements", href: "/achievements" },
      { label: "Read my blog", href: "/blog" },
    ],
    reachMe: "Reach me: todat2207@gmail.com",
    getInTouch: "Get in touch",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Achievements", href: "/achievements" },
      { label: "Blog", href: "/blog" },
    ],
  },
};

function MainframePageContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = HOME_COPY[locale];
  const nextLocale: Locale = locale === "vi" ? "en" : "vi";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [copied, setCopied] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);

  // Video scrubbing effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptSeek = () => {
      if (!video || isSeekingRef.current) return;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.02) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      attemptSeek();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!video || isNaN(video.duration) || video.duration === 0) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const SENSITIVITY = 0.8;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;

      let nextTargetTime = targetTimeRef.current + timeOffset;
      if (nextTargetTime < 0) nextTargetTime = 0;
      if (nextTargetTime > video.duration) nextTargetTime = video.duration;
      targetTimeRef.current = nextTargetTime;

      attemptSeek();
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    const handleMouseEnter = () => {
      prevXRef.current = null;
    };

    const handleLoadedMetadata = () => {
      targetTimeRef.current = video.currentTime;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Fade in action buttons after 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const { displayed, done } = useTypewriter(copy.typewriter, 38, 600);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("todat2207@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLocale = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLocale);
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  };

  return (
    <div className="relative min-h-screen text-black overflow-x-hidden bg-[#fafafa]" suppressHydrationWarning={true}>
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: "70% center" }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center z-10 px-5 sm:px-8 py-4 sm:py-5" suppressHydrationWarning={true}>
        {/* Logo (left) */}
        <div className="flex items-center gap-3" suppressHydrationWarning={true}>
          <span
            className="text-[21px] sm:text-[26px] tracking-tight font-medium select-none text-black"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {copy.logo}
          </span>
          <span className="text-[25px] sm:text-[30px] select-none leading-none -mt-1 text-black" style={{ letterSpacing: "-0.02em" }}>
            ✳︎
          </span>
        </div>

        {/* Desktop Links (center) */}
        <div className="hidden md:flex items-center text-[23px] font-normal tracking-tight text-black" suppressHydrationWarning={true}>
          {copy.links.map((link, idx) => (
            <React.Fragment key={link.href}>
              <Link href={withLocale(link.href, locale)} className="hover:opacity-60 transition-opacity">
                {link.label}
              </Link>
              {idx < copy.links.length - 1 && <span>,&nbsp;</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop CTA & Language Switch (right) */}
        <div className="hidden md:flex items-center gap-6" suppressHydrationWarning={true}>
          <Link
            href={withLocale("/contact", locale)}
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity tracking-tight"
          >
            {copy.getInTouch}
          </Link>
          <button
            onClick={toggleLocale}
            className="text-[14px] font-medium tracking-wider text-black border border-black/20 rounded-full px-3 py-[0.2em] hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
          >
            {locale === "vi" ? "EN" : "VI"}
          </button>
        </div>

        {/* Mobile Hamburger & Language Switch */}
        <div className="md:hidden flex items-center gap-4 relative z-20" suppressHydrationWarning={true}>
          <button
            onClick={toggleLocale}
            className="text-[13px] font-medium tracking-wider text-black border border-black/20 rounded-full px-2.5 py-[0.15em] hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
          >
            {locale === "vi" ? "EN" : "VI"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-[2px] bg-black transition-all duration-300"
              style={{
                transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 z-[9] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        suppressHydrationWarning={true}
      >
        {copy.links.map((link) => (
          <Link
            key={link.href}
            href={withLocale(link.href, locale)}
            onClick={() => setIsMenuOpen(false)}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={withLocale("/contact", locale)}
          onClick={() => setIsMenuOpen(false)}
          className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          {copy.getInTouch}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-[1] w-full h-screen flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden" suppressHydrationWarning={true}>
        <div className="max-w-xl relative z-10 w-full text-black" suppressHydrationWarning={true}>
          {/* Blurred Intro Label */}
          <div
            className="pointer-events-none select-none mb-5 sm:mb-6 leading-[1.3] font-normal text-black"
            suppressHydrationWarning={true}
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              filter: "blur(4px)",
            }}
          >
            {copy.intro1}
            <br />
            {copy.intro2}
          </div>

          {/* Typewriter Text */}
          <p
            className="mb-5 sm:mb-6 font-normal min-h-[54px] text-black"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: "1.35",
            }}
          >
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
            )}
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
            suppressHydrationWarning={true}
          >
            {copy.buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={withLocale(btn.href, locale)}
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-normal"
              >
                {btn.label}
              </Link>
            ))}

            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center bg-transparent text-white border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer gap-2 sm:gap-3 font-normal"
            >
              {copied ? (
                <span>{locale === "vi" ? "Đã sao chép!" : "Copied!"}</span>
              ) : (
                <>
                  <span>
                    {locale === "vi" ? "Liên hệ: " : "Reach me: "}
                    <span className="underline underline-offset-1">
                      todat2207@gmail.com
                    </span>
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <rect x="4" y="4" width="7" height="7" rx="1" />
                    <path d="M2 8V2h6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MainframePage() {
  return (
    <Suspense fallback={null}>
      <MainframePageContent />
    </Suspense>
  );
}
