"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState("Đang khởi tạo...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Kiểm tra sessionStorage ngay sau khi hydration
    const hasShownIntro = sessionStorage.getItem("datj_intro_shown");
    if (hasShownIntro) {
      setIsLoading(false);
      return;
    }

    // Khoá cuộn trang trong lúc loader hiển thị
    document.body.style.overflow = "hidden";

    // 2. Cài đặt animation tiến trình (giả lập mượt dựa theo thời gian thực)
    const startTime = Date.now();
    const MIN_DURATION = 2000; // Tăng lên 2000ms để người dùng xem trọn vẹn animation GIF
    const MAX_DURATION = 4000; // Cap tối đa 4000ms

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / MIN_DURATION) * 100), 99);
      setProgress(pct);

      if (elapsed > 500) {
        setStatusText("Đang tải tài nguyên...");
      }
      if (elapsed > 1400) {
        setStatusText("Sắp hoàn tất...");
      }
    }, 50);

    const finishLoading = () => {
      clearInterval(progressInterval);
      setProgress(100);
      setStatusText("Hoàn tất!");
      setIsFadingOut(true);

      // Lưu flag đánh dấu đã xem intro cho session này
      sessionStorage.setItem("datj_intro_shown", "1");

      // Đợi hết hiệu ứng transition (600ms) rồi gỡ hẳn loader khỏi DOM
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }, 600);
    };

    // Tạo các điều kiện chờ
    const minDelayPromise = new Promise((resolve) =>
      setTimeout(resolve, MIN_DURATION)
    );

    const pageLoadPromise = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        const handleLoad = () => {
          window.removeEventListener("load", handleLoad);
          resolve(true);
        };
        window.addEventListener("load", handleLoad);
      }
    });

    const maxTimeoutPromise = new Promise((resolve) =>
      setTimeout(resolve, MAX_DURATION)
    );

    // Chờ tối thiểu MIN_DURATION VÀ tài nguyên trang đã sẵn sàng
    Promise.race([
      Promise.all([minDelayPromise, pageLoadPromise]),
      maxTimeoutPromise,
    ]).then(() => {
      finishLoading();
    });

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#EAE8E3] text-[#1A1A1A] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-opacity motion-reduce:duration-150 ${
        isFadingOut
          ? "opacity-0 -translate-y-2 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Khung viền màn hình CRT chứa ảnh GIF */}
      <div className="relative w-[160px] h-[120px] sm:w-[180px] sm:h-[135px] border-2 border-[#1A1A1A] rounded-[12px] bg-[#000000] overflow-hidden flex items-center justify-center shadow-lg group">
        {/* Hiệu ứng quét dòng CRT Scanline */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
        
        {/* Hiệu ứng CRT startup flare overlay */}
        <div className="crt-beam absolute inset-0 z-20 pointer-events-none" />

        {/* Ảnh GIF nhúng vào trung tâm màn hình CRT */}
        <img
          src="/anime-girl.gif"
          alt="Loading Anim"
          className="w-full h-full object-cover relative z-0"
        />
      </div>

      {/* Thương hiệu bên dưới */}
      <span className="mt-3 text-xs font-bold tracking-widest text-[#1A1A1A] uppercase">
        DatJ® Portfolio
      </span>

      {/* Thanh tiến trình & status text */}
      <div className="mt-4 flex flex-col items-center gap-1.5 w-44">
        <div className="w-full h-[2.5px] bg-[#1A1A1A]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1A1A1A] transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[12px] text-[#5A5A56] font-mono tracking-tight">
          {statusText}
        </span>
      </div>

      {/* CSS Keyframes hiệu ứng quét màn hình CRT khi bật nguồn */}
      <style jsx>{`
        .crt-beam {
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(26,26,26,0) 70%);
          animation: crtStartup 0.8s ease-in-out forwards;
        }

        @keyframes crtStartup {
          0% {
            opacity: 1;
            transform: scaleY(0.02) scaleX(1);
            background: #ffffff;
          }
          40% {
            opacity: 0.9;
            transform: scaleY(0.05) scaleX(1);
            background: #ffffff;
          }
          70% {
            opacity: 0.5;
            transform: scaleY(1) scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .crt-beam {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
