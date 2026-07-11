import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black flex flex-col justify-center items-center px-5 py-24 select-none" suppressHydrationWarning={true}>
      <div className="space-y-6 text-center max-w-md" suppressHydrationWarning={true}>
        <p className="text-[13px] tracking-wider uppercase text-black/50">404 / ERROR</p>
        <h1 
          className="text-black font-medium leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 96px)" }}
        >
          NOT FOUND
        </h1>
        <p className="text-[16px] text-black/70 leading-relaxed max-w-sm mx-auto font-normal">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4" suppressHydrationWarning={true}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-5 py-[0.4em] rounded-full hover:bg-black/85 transition-colors duration-200 font-medium cursor-pointer"
          >
            <ArrowLeft className="size-3" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
