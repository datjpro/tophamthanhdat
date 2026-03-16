import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe,
  Hammer,
  Layers3,
  Paintbrush2,
  ServerCog,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Wrench,
} from "lucide-react";

import type { Locale } from "@/lib/i18n";

export type SkillCategory = "Frontend" | "Backend" | "Tools";
export type ProjectFilter = "All" | "React.js" | "Flutter" | "Blockchain";
export type TimelineVariant = "high" | "mid" | "low";

export type SkillItem = {
  name: string;
  category: SkillCategory;
  note: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  year: string;
  role: string;
  results: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  impact: string;
};

export type AchievementItem = {
  title: string;
  period: string;
  detail: string;
};

export type AboutCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type NavLink = {
  label: string;
  href: string;
};

export type ProfileInfo = {
  name: string;
  title: string;
  about: string;
  location: string;
  experience: string;
  education: string;
  objective: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  cityLabel: string;
  responseTime: string;
};

export type ProjectFilterOption = {
  value: ProjectFilter;
  label: string;
};

export const SITE_THEME = {
  bg: "#050505",
  surface: "#121212",
  primary: "#e65100",
  accent: "#00f2ff",
  muted: "#a7a6ba",
} as const;

const SITE_THEME_COPY: Record<Locale, { ctaPrimary: string; ctaSecondary: string }> = {
  vi: {
    ctaPrimary: "Xem Du An",
    ctaSecondary: "Lien He Ngay",
  },
  en: {
    ctaPrimary: "Explore Projects",
    ctaSecondary: "Initiate Contact",
  },
};

export const IMAGE_MAP = {
  homeHero: "/portfolio/profile/home-hero.jpg",
  aboutSticky: "/portfolio/profile/about-sticky.jpg",
  resumeProfile: "/portfolio/profile/resume-profile.jpg",
  aboutGallery: ["/portfolio/profile/gallery-1.jpg", "/portfolio/profile/gallery-2.jpg"],
  achievementHero: "/portfolio/awards/hutech-code-war-2024.jpg",
  fallback: "/avatar.svg",
} as const;

export const PROJECT_LAYOUT_META: Record<string, { variant: TimelineVariant; width: string }> = {
  "ecommerce-mobile-app": { variant: "high", width: "w-[390px] md:w-[470px]" },
  viepropchain: { variant: "low", width: "w-[330px] md:w-[380px]" },
  "blockchain-donation-dapp": { variant: "mid", width: "w-[360px] md:w-[420px]" },
};

const NAV_LINKS_BY_LOCALE: Record<Locale, NavLink[]> = {
  vi: [
    { label: "Trang Chu", href: "/" },
    { label: "Gioi Thieu", href: "/about" },
    { label: "Du An", href: "/projects" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Thanh Tuu", href: "/achievements" },
    { label: "Lien He", href: "/contact" },
    { label: "CV", href: "/resume" },
    { label: "Blog", href: "/blog" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "/blog" },
  ],
};

const ABOUT_CARDS_BY_LOCALE: Record<Locale, AboutCard[]> = {
  vi: [
    {
      title: "Tu Duy Xay Dung",
      body: "Bat dau tu bai toan thuc te, uu tien ban chay duoc va cai tien nhanh.",
      icon: Hammer,
    },
    {
      title: "Code + Design",
      body: "Tap trung vao cau truc ro rang, UI responsive va trai nghiem nhat quan.",
      icon: Paintbrush2,
    },
    {
      title: "Blockchain Focus",
      body: "Thuc hanh smart contract voi Truffle, Ganache, Remix va Solidity.",
      icon: Gauge,
    },
    {
      title: "Muc Tieu Dai Han",
      body: "Phat trien len vi tri Solution Architect trong he sinh thai web va blockchain.",
      icon: Sparkles,
    },
  ],
  en: [
    {
      title: "Builder Mindset",
      body: "I start from practical constraints, ship quickly, and iterate based on outcomes.",
      icon: Hammer,
    },
    {
      title: "Code + Design",
      body: "I focus on clear structure, responsive interfaces, and consistent UX details.",
      icon: Paintbrush2,
    },
    {
      title: "Blockchain Focus",
      body: "Hands-on with smart contracts using Truffle, Ganache, Remix, and Solidity.",
      icon: Gauge,
    },
    {
      title: "Long-term Direction",
      body: "Growing toward a Solution Architect role across web and blockchain systems.",
      icon: Sparkles,
    },
  ],
};

const SKILLS_BY_LOCALE: Record<Locale, SkillItem[]> = {
  vi: [
    { name: "React.js", category: "Frontend", note: "Phat trien giao dien component", icon: Layers3 },
    { name: "Flutter (Dart)", category: "Frontend", note: "Mobile app da nen tang", icon: Blocks },
    { name: "Tailwind CSS", category: "Frontend", note: "He thong style nhanh va nhat quan", icon: WandSparkles },
    { name: "TypeScript", category: "Frontend", note: "Kiem soat kieu du lieu an toan", icon: Code2 },
    { name: "ASP.NET Core", category: "Backend", note: "Xay dung API va business logic", icon: ServerCog },
    { name: "Node.js", category: "Backend", note: "API backend va xu ly realtime", icon: CloudCog },
    { name: "Solidity", category: "Backend", note: "Xay dung smart contract", icon: ShieldCheck },
    { name: "SQL Server", category: "Backend", note: "Thiet ke CSDL quan he", icon: Database },
    { name: "MongoDB", category: "Backend", note: "Luu tru du lieu linh hoat", icon: Database },
    { name: "Git/GitHub", category: "Tools", note: "Quan ly source code va review", icon: GitBranch },
    { name: "VS Code", category: "Tools", note: "Moi truong dev chinh", icon: Wrench },
    { name: "Figma", category: "Tools", note: "Phac thao giao dien", icon: Paintbrush2 },
  ],
  en: [
    { name: "React.js", category: "Frontend", note: "Component-based web interfaces", icon: Layers3 },
    { name: "Flutter (Dart)", category: "Frontend", note: "Cross-platform mobile development", icon: Blocks },
    { name: "Tailwind CSS", category: "Frontend", note: "Fast and consistent styling", icon: WandSparkles },
    { name: "TypeScript", category: "Frontend", note: "Safer type contracts", icon: Code2 },
    { name: "ASP.NET Core", category: "Backend", note: "API and business logic services", icon: ServerCog },
    { name: "Node.js", category: "Backend", note: "Backend APIs and realtime handlers", icon: CloudCog },
    { name: "Solidity", category: "Backend", note: "Smart contract development", icon: ShieldCheck },
    { name: "SQL Server", category: "Backend", note: "Relational data modeling", icon: Database },
    { name: "MongoDB", category: "Backend", note: "Flexible document storage", icon: Database },
    { name: "Git/GitHub", category: "Tools", note: "Source control and review workflows", icon: GitBranch },
    { name: "VS Code", category: "Tools", note: "Primary development IDE", icon: Wrench },
    { name: "Figma", category: "Tools", note: "UI wireframing and handoff", icon: Paintbrush2 },
  ],
};

const PROJECTS_BY_LOCALE: Record<Locale, ProjectItem[]> = {
  vi: [
    {
      slug: "ecommerce-mobile-app",
      title: "E-commerce Mobile App",
      summary: "Ung dung ban hang online day du gio hang, thanh toan va quan ly don hang.",
      description:
        "Do an co so tap trung vao trai nghiem mua sam mobile tu dau den cuoi, toi uu luong du lieu va kha nang van hanh.",
      tech: ["Flutter", "Node.js"],
      image: "/projects/pulse-commerce.svg",
      github: "https://github.com/datjpro/ecommerce_flutter",
      demo: "https://github.com/datjpro/ecommerce_flutter",
      year: "2025",
      role: "Mobile Developer",
      results: [
        "Xay dung day du tinh nang gio hang, thanh toan va quan ly don hang.",
        "Toi uu truy van du lieu, cai thien toc do tai trang khoang 40%.",
        "Hoan thien theo huong san pham co the tiep tuc mo rong.",
      ],
    },
    {
      slug: "viepropchain",
      title: "ViePropChain",
      summary: "Nen tang giao dich va cho thue bat dong san tren Blockchain.",
      description:
        "Do an chuyen nganh ket hop web2 va blockchain, tap trung vao smart contract, luong nghiep vu va giao dien responsive.",
      tech: ["React.js", "Flutter", "Blockchain"],
      image: "/projects/vibe-analytics.svg",
      github: "https://github.com/datjpro/viepropchain",
      demo: "https://github.com/datjpro/viepropchain",
      year: "2025",
      role: "Blockchain Developer",
      results: [
        "Thiet ke smart contract cho nghiep vu giao dich va thue.",
        "Phat trien frontend responsive cho ca web va mobile.",
        "Dong bo luong xu ly giua giao dien va contract.",
      ],
    },
    {
      slug: "blockchain-donation-dapp",
      title: "DApp Quyen Gop",
      summary: "Ung dung phi tap trung cho phep quyen gop minh bach qua blockchain.",
      description:
        "Du an ca nhan trien khai smart contract va giao dien tuong tac realtime, huong toi tinh minh bach va de kiem chung.",
      tech: ["React.js", "Blockchain"],
      image: "/projects/task-orbit.svg",
      github: "https://github.com/datjpro",
      demo: "https://github.com/datjpro",
      year: "2025 - Nay",
      role: "DApp Developer",
      results: [
        "Trien khai smart contract cho quy trinh quyen gop.",
        "Xay dung giao dien realtime theo trang thai giao dich.",
        "To chuc source code de mo rong theo nhieu chien dich.",
      ],
    },
  ],
  en: [
    {
      slug: "ecommerce-mobile-app",
      title: "E-commerce Mobile App",
      summary: "A complete online shopping app with cart, checkout, and order management.",
      description:
        "A core course project focused on end-to-end mobile commerce flow, data efficiency, and maintainable delivery.",
      tech: ["Flutter", "Node.js"],
      image: "/projects/pulse-commerce.svg",
      github: "https://github.com/datjpro/ecommerce_flutter",
      demo: "https://github.com/datjpro/ecommerce_flutter",
      year: "2025",
      role: "Mobile Developer",
      results: [
        "Delivered full cart, payment, and order management features.",
        "Optimized query paths and improved page load speed by around 40%.",
        "Structured the codebase for further feature expansion.",
      ],
    },
    {
      slug: "viepropchain",
      title: "ViePropChain",
      summary: "A blockchain-based platform for real estate trading and renting.",
      description:
        "A major project combining web and blockchain layers, with focus on smart contracts, business flow, and responsive UI.",
      tech: ["React.js", "Flutter", "Blockchain"],
      image: "/projects/vibe-analytics.svg",
      github: "https://github.com/datjpro/viepropchain",
      demo: "https://github.com/datjpro/viepropchain",
      year: "2025",
      role: "Blockchain Developer",
      results: [
        "Designed smart contracts for trading and rental workflows.",
        "Built responsive frontend experiences for web and mobile clients.",
        "Aligned UI interactions with contract state changes.",
      ],
    },
    {
      slug: "blockchain-donation-dapp",
      title: "Blockchain Donation DApp",
      summary: "A decentralized app enabling transparent donations through blockchain.",
      description:
        "A personal project shipping smart contracts and a realtime frontend focused on transparency and auditability.",
      tech: ["React.js", "Blockchain"],
      image: "/projects/task-orbit.svg",
      github: "https://github.com/datjpro",
      demo: "https://github.com/datjpro",
      year: "2025 - Present",
      role: "DApp Developer",
      results: [
        "Implemented smart contracts for transparent donation flow.",
        "Built realtime frontend interactions against on-chain states.",
        "Kept the architecture modular for future campaign expansion.",
      ],
    },
  ],
};

const EXPERIENCES_BY_LOCALE: Record<Locale, ExperienceItem[]> = {
  vi: [
    {
      role: "Mobile Developer",
      company: "E-commerce Mobile App (Do an Co so)",
      date: "03/2025 - 06/2025",
      impact: "Xay dung ung dung ban hang online, toi uu du lieu giup toc do load cai thien khoang 40%.",
    },
    {
      role: "Blockchain Developer",
      company: "ViePropChain (Do an Chuyen nganh)",
      date: "10/2025 - 12/2025",
      impact: "Phat trien nen tang bat dong san tren blockchain voi smart contract va giao dien responsive.",
    },
    {
      role: "DApp Developer",
      company: "Blockchain Donation (Du an ca nhan)",
      date: "10/2025 - Nay",
      impact: "Trien khai dApp quyen gop minh bach voi smart contract va frontend realtime.",
    },
  ],
  en: [
    {
      role: "Mobile Developer",
      company: "E-commerce Mobile App (Core Project)",
      date: "03/2025 - 06/2025",
      impact: "Built an online shopping app and improved load speed by about 40% through data query optimization.",
    },
    {
      role: "Blockchain Developer",
      company: "ViePropChain (Major Project)",
      date: "10/2025 - 12/2025",
      impact: "Developed a blockchain real estate platform with smart contracts and responsive user interfaces.",
    },
    {
      role: "DApp Developer",
      company: "Blockchain Donation (Personal Project)",
      date: "10/2025 - Present",
      impact: "Delivered a transparent donation dApp with smart contracts and realtime frontend interactions.",
    },
  ],
};

const ACHIEVEMENTS_BY_LOCALE: Record<Locale, AchievementItem[]> = {
  vi: [
    {
      title: "Giai Ba - HUTECH CODE WAR 2024",
      period: "03/2024 - 05/2024",
      detail: "Dat giai Ba trong cuoc thi lap trinh HUTECH CODE WAR 2024.",
    },
    {
      title: "Giai Khuyen Khich - My First Website",
      period: "2023 & 2024",
      detail: "Nhan giai Khuyen khich lien tiep tai cuoc thi My First Website.",
    },
    {
      title: "Website & AI Innovation Contest 2026",
      period: "2026",
      detail: "Thi sinh bang B (Advanced Track) voi de tai website va AI.",
    },
    {
      title: "Thanh vien doi thi CNTT HUTECH",
      period: "2024 - Nay",
      detail: "Tham gia doi thi sinh vien Khoa CNTT, luyen tap du an va cuoc thi thuc te.",
    },
  ],
  en: [
    {
      title: "Third Prize - HUTECH CODE WAR 2024",
      period: "03/2024 - 05/2024",
      detail: "Won Third Prize in the HUTECH CODE WAR 2024 programming competition.",
    },
    {
      title: "Consolation Prize - My First Website",
      period: "2023 & 2024",
      detail: "Received Consolation Prize in My First Website competition for two consecutive years.",
    },
    {
      title: "Website & AI Innovation Contest 2026",
      period: "2026",
      detail: "Participant in Track B (Advanced) for website and AI innovation.",
    },
    {
      title: "HUTECH IT Faculty Competition Team",
      period: "2024 - Present",
      detail: "Active member of the student competition team in the IT Faculty.",
    },
  ],
};

const PROFILE_BY_LOCALE: Record<Locale, ProfileInfo> = {
  vi: {
    name: "TO PHAM THANH DAT",
    title: "Lap trinh vien / Software Developer",
    about:
      "Sinh vien nam 4 chuyen nganh Cong nghe Phan mem tai HUTECH. Da co kinh nghiem phat trien ung dung web va mobile voi Flutter, React va ASP.NET Core.",
    location: "Phuong Dong Hoa, TP. Thu Duc, TP.HCM",
    experience: "Sinh vien nam 4 - HUTECH",
    education: "Cu nhan Cong nghe Phan mem (2022 - 2026 du kien) - GPA 3.05/4.0",
    objective:
      "Dam me Blockchain va dang huong toi vi tri Solution Architect, mong muon tham gia moi truong de hoc cong nghe moi va dong gop du an thuc te.",
  },
  en: {
    name: "TO PHAM THANH DAT",
    title: "Software Developer",
    about:
      "A fourth-year Software Engineering student at HUTECH with hands-on experience building web and mobile applications using Flutter, React, and ASP.NET Core.",
    location: "Dong Hoa Ward, Thu Duc City, Ho Chi Minh City",
    experience: "Fourth-year Software Engineering Student",
    education: "Bachelor of Software Engineering (2022 - expected 2026) - GPA 3.05/4.0",
    objective:
      "Passionate about Blockchain and progressing toward a Solution Architect role while contributing to real-world projects.",
  },
};

const CONTACT_INFO_BY_LOCALE: Record<Locale, ContactInfo> = {
  vi: {
    phone: "0867 677 441",
    email: "todat2207@gmail.com",
    address: "Phuong Dong Hoa, TP. Thu Duc, TP.HCM",
    cityLabel: "TP. Ho Chi Minh, Viet Nam",
    responseTime: "Thoi gian phan hoi trung binh: trong 24 gio.",
  },
  en: {
    phone: "0867 677 441",
    email: "todat2207@gmail.com",
    address: "Dong Hoa Ward, Thu Duc City, Ho Chi Minh City",
    cityLabel: "Ho Chi Minh City, Vietnam",
    responseTime: "Average response window: within 24 hours.",
  },
};

const PROJECT_FILTERS_BY_LOCALE: Record<Locale, ProjectFilterOption[]> = {
  vi: [
    { value: "All", label: "Tat Ca" },
    { value: "React.js", label: "React.js" },
    { value: "Flutter", label: "Flutter" },
    { value: "Blockchain", label: "Blockchain" },
  ],
  en: [
    { value: "All", label: "All" },
    { value: "React.js", label: "React.js" },
    { value: "Flutter", label: "Flutter" },
    { value: "Blockchain", label: "Blockchain" },
  ],
};

const FOOTER_COPY_BY_LOCALE: Record<
  Locale,
  {
    subtitle: string;
    headline: string;
    connect: string;
    madeWith: string;
    rights: string;
  }
> = {
  vi: {
    subtitle: "Lap trinh vien phat trien Web, Mobile, Blockchain",
    headline: "Thiet ke va hien thuc giai phap tu giao dien den kien truc.",
    connect: "Ket Noi",
    madeWith: "Phat trien bang Next.js",
    rights: "Ban quyen",
  },
  en: {
    subtitle: "Web, Mobile, and Blockchain Developer",
    headline: "Designing and shipping solutions from interface to architecture.",
    connect: "Connect",
    madeWith: "Made with Next.js",
    rights: "Copyright",
  },
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/datjpro", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/in/to-datj-a10619358/", icon: BriefcaseBusiness },
  { label: "Website", href: "https://tophamthanhdat.com/", icon: Globe },
];

export function getSiteThemeCopy(locale: Locale) {
  return SITE_THEME_COPY[locale];
}

export function getNavLinks(locale: Locale) {
  return NAV_LINKS_BY_LOCALE[locale];
}

export function getAboutCards(locale: Locale) {
  return ABOUT_CARDS_BY_LOCALE[locale];
}

export function getSkills(locale: Locale) {
  return SKILLS_BY_LOCALE[locale];
}

export function getProjects(locale: Locale) {
  return PROJECTS_BY_LOCALE[locale];
}

export function getExperiences(locale: Locale) {
  return EXPERIENCES_BY_LOCALE[locale];
}

export function getAchievements(locale: Locale) {
  return ACHIEVEMENTS_BY_LOCALE[locale];
}

export function getProfile(locale: Locale) {
  return PROFILE_BY_LOCALE[locale];
}

export function getContactInfo(locale: Locale) {
  return CONTACT_INFO_BY_LOCALE[locale];
}

export function getProjectFilters(locale: Locale) {
  return PROJECT_FILTERS_BY_LOCALE[locale];
}

export function getFooterCopy(locale: Locale) {
  return FOOTER_COPY_BY_LOCALE[locale];
}

export function getSocialLinks() {
  return SOCIAL_LINKS;
}

export function getProjectBySlug(slug: string, locale: Locale = "en") {
  const localizedProject = PROJECTS_BY_LOCALE[locale].find((project) => project.slug === slug);
  if (localizedProject) return localizedProject;
  return PROJECTS_BY_LOCALE.en.find((project) => project.slug === slug);
}

export const NAV_LINKS: NavLink[] = NAV_LINKS_BY_LOCALE.en;
export const ABOUT_CARDS: AboutCard[] = ABOUT_CARDS_BY_LOCALE.en;
export const SKILLS: SkillItem[] = SKILLS_BY_LOCALE.en;
export const PROJECTS: ProjectItem[] = PROJECTS_BY_LOCALE.en;
export const EXPERIENCES: ExperienceItem[] = EXPERIENCES_BY_LOCALE.en;
export const ACHIEVEMENTS: AchievementItem[] = ACHIEVEMENTS_BY_LOCALE.en;
