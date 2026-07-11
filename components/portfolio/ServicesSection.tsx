"use client";

import { FadeIn } from "./FadeIn";

export function ServicesSection() {
  const services = [
    {
      number: "01",
      name: "Web Development",
      description:
        "Creation of responsive, high-performance web applications using React, TypeScript, and modern state management tools.",
    },
    {
      number: "02",
      name: "Mobile Development",
      description:
        "Building native-like, cross-platform mobile experiences for iOS and Android using Flutter and Dart.",
    },
    {
      number: "03",
      name: "Backend Systems",
      description:
        "Designing clean, scalable APIs, microservices, and database structures using ASP.NET Core and SQL Server.",
    },
    {
      number: "04",
      name: "Blockchain & DApps",
      description:
        "Writing secure, audited smart contracts in Solidity and building decentralized web applications with Web3 integration.",
    },
    {
      number: "05",
      name: "Clean Architecture",
      description:
        "Structuring maintainable codebases with clear separations, optimizing queries, and engineering deployment pipelines.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 w-full"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 0.95 }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="border-t border-[#0C0C0C]/15 flex flex-col w-full">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              as="div"
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 md:gap-16 w-full text-left"
            >
              {/* Number on the left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none min-w-[80px] md:min-w-[160px]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </div>

              {/* Name & Description stacked vertically on the right */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
