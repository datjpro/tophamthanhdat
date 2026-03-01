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

export type SkillCategory = "Frontend" | "Backend" | "Tools";
export type ProjectFilter = "All" | "React" | "Next.js" | "Node";

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

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Builder Mindset",
    body: "Toi luon bat dau tu bai toan that, cat nho scope va ship som mot phien ban usable.",
    icon: Hammer,
  },
  {
    title: "Design + Code",
    body: "Toi uu tien bo cuc ro rang, diem nhan manh va motion vua du de tao trai nghiem tot.",
    icon: Paintbrush2,
  },
  {
    title: "Story #1",
    body: "Da tung toi uu query + caching cho mot dashboard, giam thoi gian tai trang gan 70%.",
    icon: Gauge,
  },
  {
    title: "Story #2",
    body: "Refactor codebase cu theo module ro trach nhiem, giup team onboard nhanh hon.",
    icon: Sparkles,
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Next.js", category: "Frontend", note: "App Router", icon: Layers3 },
  { name: "React", category: "Frontend", note: "Component architecture", icon: Blocks },
  { name: "Tailwind CSS", category: "Frontend", note: "Design systems", icon: WandSparkles },
  { name: "TypeScript", category: "Frontend", note: "Type safety", icon: Code2 },
  { name: "Node.js", category: "Backend", note: "API and background jobs", icon: CloudCog },
  { name: "PostgreSQL", category: "Backend", note: "Data modeling", icon: Database },
  { name: "Auth/Security", category: "Backend", note: "JWT + RBAC", icon: ShieldCheck },
  { name: "Server Actions", category: "Backend", note: "Mutation flow", icon: ServerCog },
  { name: "Git/GitHub", category: "Tools", note: "Code review workflow", icon: GitBranch },
  { name: "CI/CD", category: "Tools", note: "Build and release", icon: Wrench },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "pulse-commerce",
    title: "Pulse Commerce",
    summary: "Ecommerce storefront toi uu toc do va conversion.",
    description:
      "Nen tang ecommerce tap trung vao trai nghiem nhanh, don gian va co dashboard theo doi hieu qua theo thoi gian thuc.",
    tech: ["Next.js", "React", "Node"],
    image: "/projects/pulse-commerce.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2025",
    role: "Fullstack Engineer",
    results: [
      "Trang chu LCP duoi 2.0s tren mobile.",
      "Conversion tang 32% sau 6 tuan AB test.",
      "He thong admin theo doi don hang real-time.",
    ],
  },
  {
    slug: "task-orbit",
    title: "Task Orbit",
    summary: "Workspace quan tri sprint cho team phan tan.",
    description:
      "Cong cu quan ly cong viec theo sprint, co timeline truc quan va tu dong hoa quy trinh cap nhat trang thai.",
    tech: ["React", "Node"],
    image: "/projects/task-orbit.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2024",
    role: "Frontend Engineer",
    results: [
      "Giam 40% thao tac lap lai trong quy trinh update task.",
      "Bo sung dashboard team velocity theo sprint.",
      "Khung UI responsive cho desktop + mobile.",
    ],
  },
  {
    slug: "vibe-analytics",
    title: "Vibe Analytics",
    summary: "Dashboard phan tich hanh vi nguoi dung.",
    description:
      "Dashboard tong hop su kien nguoi dung, ho tro loc nhieu dieu kien va canh bao bat thuong theo threshold.",
    tech: ["Next.js", "React"],
    image: "/projects/vibe-analytics.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2023",
    role: "Frontend + Data Viz",
    results: [
      "Thoi gian render bao cao giam tu 6.2s xuong 1.9s.",
      "Them bo loc da chieu cho analyst.",
      "Canh bao anomaly theo khung gio.",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Freelance / Product Studio",
    date: "2025 - Present",
    impact: "Xay dung va toi uu landing pages, tang conversion trung binh 25-40%.",
  },
  {
    role: "Fullstack Developer",
    company: "SaaS Startup",
    date: "2023 - 2025",
    impact: "Phat trien dashboard B2B, cai thien hieu nang va do on dinh cua he thong.",
  },
  {
    role: "Web Developer",
    company: "Agency Team",
    date: "2021 - 2023",
    impact: "Chuan hoa component workflow, rut ngan chu ky release hang tuan.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Top 3 Internal Hackathon",
    period: "2025",
    detail: "Xay prototype AI support cho team CS trong 48h.",
  },
  {
    title: "Mentored 10+ Junior Devs",
    period: "2024 - 2025",
    detail: "Huong dan code review, architecture va production mindset.",
  },
  {
    title: "Released 20+ Production Features",
    period: "2023 - 2025",
    detail: "Bao gom ecommerce, dashboard va workflow automation.",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: BriefcaseBusiness },
  { label: "Website", href: "https://example.com/", icon: Globe },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
