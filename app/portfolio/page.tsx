"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Github } from "lucide-react";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import { getProjects } from "@/lib/content-data";

const PORTFOLIO_COPY = {
  vi: {
    tag: "Trang Trưng Bày / Visual Portfolio",
    heroTitle: "LẬP TRÌNH VIÊN THỰC CHIẾN",
    heroSubtitle: "Tập trung xây dựng các giải pháp Web, Mobile và Blockchain có tính thực tiễn cao, dễ bảo trì và mở rộng.",
    aboutHeading: "Về bản thân",
    aboutText: "Với nền tảng kỹ thuật phần mềm vững chắc, tôi tập trung vào phát triển ứng dụng web, app di động đa nền tảng và hệ thống blockchain. Tôi đam mê xây dựng những hệ thống có mã nguồn module hóa, giúp giải quyết bài toán thực tế của người dùng một cách hiệu quả và tối ưu nhất.",
    servicesHeading: "Dịch vụ cung cấp",
    services: [
      {
        number: "01",
        name: "Phát triển Web (Web Dev)",
        description: "Xây dựng ứng dụng web đơn trang và đa trang hiệu năng cao, tối ưu hóa giao diện responsive sử dụng React, TypeScript và các công cụ quản lý state hiện đại."
      },
      {
        number: "02",
        name: "Ứng dụng Di động (Mobile Dev)",
        description: "Xây dựng trải nghiệm ứng dụng di động mượt mà cho cả iOS và Android bằng cách sử dụng Flutter và Dart."
      },
      {
        number: "03",
        name: "Hệ thống Backend",
        description: "Thiết kế API sạch, kiến trúc Microservices và cơ sở dữ liệu quan hệ/phi quan hệ sử dụng ASP.NET Core, SQL Server và MongoDB."
      },
      {
        number: "04",
        name: "Blockchain & DApps",
        description: "Lập trình Smart Contract an toàn trên Solidity, sử dụng Truffle và Hardhat, đồng thời tích hợp thư viện Web3 vào Frontend để tương tác realtime."
      },
      {
        number: "05",
        name: "Kiến trúc Sạch (Clean Architecture)",
        description: "Tổ chức source code module hóa, phân tách rõ ràng các tầng nghiệp vụ, tối ưu hóa câu lệnh truy vấn CSDL và cấu hình CI/CD."
      }
    ],
    projectsHeading: "Dự án chọn lọc",
    ctaText: "Bạn có ý tưởng dự án cần trao đổi?",
    ctaBtn: "Liên hệ ngay",
  },
  en: {
    tag: "Showcase / Visual Portfolio",
    heroTitle: "PRACTICAL ENGINEER",
    heroSubtitle: "Driven by crafting high-performance, maintainable web, mobile, and blockchain systems.",
    aboutHeading: "About me",
    aboutText: "With a solid background in software engineering, I focus on web development, mobile apps, and blockchain systems. I truly enjoy building modular codebases that solve real-world problems and scale efficiently. Let's build something incredible together!",
    servicesHeading: "Core Services",
    services: [
      {
        number: "01",
        name: "Web Development",
        description: "Creation of responsive, high-performance web applications using React, TypeScript, and modern state management tools."
      },
      {
        number: "02",
        name: "Mobile Development",
        description: "Building native-like, cross-platform mobile experiences for iOS and Android using Flutter and Dart."
      },
      {
        number: "03",
        name: "Backend Systems",
        description: "Designing clean, scalable APIs, microservices, and database structures using ASP.NET Core, SQL Server, and MongoDB."
      },
      {
        number: "04",
        name: "Blockchain & DApps",
        description: "Writing secure, audited smart contracts in Solidity and building decentralized web applications with Web3 integration."
      },
      {
        number: "05",
        name: "Clean Architecture",
        description: "Structuring maintainable codebases with clear separations, optimizing queries, and engineering deployment pipelines."
      }
    ],
    projectsHeading: "Curated Work",
    ctaText: "Have a project in mind?",
    ctaBtn: "Get in touch",
  }
} as const;

const MARQUEE_TAGS = [
  "REACT.JS", "FLUTTER", "TYPESCRIPT", "SOLIDITY", "ASP.NET CORE", 
  "SQL SERVER", "MONGODB", "NODE.JS", "TAILWIND CSS", "GIT", "FIGMA"
];

function PortfolioPageContent() {
  const searchParams = useSearchParams();

  // Prevent SSR/hydration text mismatch by delaying locale resolution until client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = mounted ? normalizeLocale(searchParams.get("lang")) : "vi";
  const copy = PORTFOLIO_COPY[locale];
  const projects = getProjects(locale);

  const marqueeItems = [...MARQUEE_TAGS, ...MARQUEE_TAGS, ...MARQUEE_TAGS, ...MARQUEE_TAGS];

  return (
    <div className="space-y-16" suppressHydrationWarning={true}>
      {/* 1. Hero Section */}
      <section className="space-y-6 pt-6" suppressHydrationWarning={true}>
        <p className="text-[13px] tracking-wider uppercase text-black/50">{copy.tag}</p>
        <h1 
          className="text-black font-medium leading-[0.95] tracking-tight text-left select-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}
        >
          {copy.heroTitle}
        </h1>
        <p className="max-w-2xl text-[18px] sm:text-[22px] text-black/70 leading-normal font-normal">
          {copy.heroSubtitle}
        </p>
        <div className="pt-2" suppressHydrationWarning={true}>
          <Link
            href={withLocale("/contact", locale)}
            className="inline-flex items-center gap-1.5 bg-black text-white text-[14px] px-5 py-[0.4em] rounded-full hover:bg-black/85 transition-colors duration-200 font-medium cursor-pointer"
          >
            {copy.ctaBtn}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* 2. Scrolling Marquee */}
      <div className="w-full overflow-hidden bg-black py-4 select-none relative z-10 -mx-5 sm:-mx-8 md:-mx-10 my-8" suppressHydrationWarning={true}>
        <div className="flex whitespace-nowrap animate-marquee" suppressHydrationWarning={true}>
          <div className="flex gap-12 text-white font-mono text-[14px] uppercase tracking-widest pr-12" suppressHydrationWarning={true}>
            {marqueeItems.map((tag, idx) => (
              <span key={idx} className="flex items-center gap-3">
                {tag} <span className="opacity-40">✳︎</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. About Section */}
      <section className="grid gap-6 md:grid-cols-[0.4fr_0.6fr] items-start pt-6" suppressHydrationWarning={true}>
        <h2 className="text-[28px] sm:text-[34px] font-medium text-black tracking-tight uppercase leading-none">
          {copy.aboutHeading}
        </h2>
        <p className="text-[16px] sm:text-[18px] text-black/70 leading-relaxed font-normal">
          {copy.aboutText}
        </p>
      </section>

      {/* 4. Services Section */}
      <section className="grid gap-6 md:grid-cols-[0.4fr_0.6fr] items-start pt-6 border-t border-black/10" suppressHydrationWarning={true}>
        <h2 className="text-[28px] sm:text-[34px] font-medium text-black tracking-tight uppercase leading-none">
          {copy.servicesHeading}
        </h2>
        <div className="space-y-8" suppressHydrationWarning={true}>
          {copy.services.map((service) => (
            <div key={service.number} className="flex items-start gap-6 border-b border-black/5 pb-8 last:border-0 last:pb-0" suppressHydrationWarning={true}>
              <span className="text-[28px] sm:text-[36px] font-medium tracking-tight text-black/15 select-none leading-none">
                {service.number}
              </span>
              <div className="space-y-2" suppressHydrationWarning={true}>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-black tracking-tight uppercase leading-none">
                  {service.name}
                </h3>
                <p className="text-[14px] text-black/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Curated Projects Section */}
      <section className="grid gap-6 md:grid-cols-[0.4fr_0.6fr] items-start pt-6 border-t border-black/10" suppressHydrationWarning={true}>
        <h2 className="text-[28px] sm:text-[34px] font-medium text-black tracking-tight uppercase leading-none">
          {copy.projectsHeading}
        </h2>
        <div className="grid gap-6" suppressHydrationWarning={true}>
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4"
              suppressHydrationWarning={true}
            >
              <div className="space-y-2" suppressHydrationWarning={true}>
                <div className="flex flex-wrap gap-1.5" suppressHydrationWarning={true}>
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-[11px] font-medium tracking-wider uppercase bg-black/5 text-black px-2 py-[0.1em] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[20px] font-medium text-black tracking-tight leading-tight pt-1">
                  {project.title}
                </h3>
                <p className="text-[14px] text-black/60 leading-relaxed">
                  {project.summary}
                </p>
              </div>
              <div className="flex gap-2 pt-2" suppressHydrationWarning={true}>
                <Link
                  href={withLocale(`/projects/${project.slug}`, locale)}
                  className="inline-flex items-center gap-1 bg-white text-black border border-black/20 text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight className="size-3" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] px-3.5 py-[0.3em] rounded-full hover:bg-black/85 transition-colors duration-200"
                >
                  <Github className="size-3" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer Call-to-Action (Cta) */}
      <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-sm text-center space-y-6" suppressHydrationWarning={true}>
        <h2 className="text-[24px] sm:text-[32px] font-medium text-black tracking-tight">
          {copy.ctaText}
        </h2>
        <div suppressHydrationWarning={true}>
          <Link
            href={withLocale("/contact", locale)}
            className="inline-flex items-center gap-1.5 bg-black text-white text-[14px] px-5 py-[0.4em] rounded-full hover:bg-black/85 transition-colors duration-200 font-medium cursor-pointer"
          >
            {copy.ctaBtn}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioPageContent />
    </Suspense>
  );
}
