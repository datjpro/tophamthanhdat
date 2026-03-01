import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Flame,
  Folders,
  Gauge,
  GitBranch,
  Globe,
  Hammer,
  Layers3,
  Paintbrush2,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  WandSparkles,
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
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  impact: string;
};

export type BlogPreview = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  readingTime: string;
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_CARDS = [
  {
    title: "Builder Mindset",
    body: "Mình thích bắt đầu từ bài toán thật, cắt nhỏ scope và ship phiên bản usable càng sớm càng tốt.",
    icon: Hammer,
  },
  {
    title: "Design + Code",
    body: "Tập trung vào trải nghiệm mượt: bố cục rõ ràng, điểm nhấn đủ mạnh và micro-interactions đúng chỗ.",
    icon: Paintbrush2,
  },
  {
    title: "Story #1",
    body: "Dự án đầu tiên mình deploy bị timeout liên tục. Sau khi tối ưu query và caching, tốc độ tải giảm gần 70%.",
    icon: Gauge,
  },
  {
    title: "Story #2",
    body: "Từng refactor một codebase cũ từ spaghetti thành module rõ trách nhiệm, giúp team onboard nhanh hơn hẳn.",
    icon: Sparkles,
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Next.js", category: "Frontend", note: "App Router", icon: Layers3 },
  { name: "React", category: "Frontend", note: "UI architecture", icon: Blocks },
  { name: "Tailwind CSS", category: "Frontend", note: "Design systems", icon: WandSparkles },
  { name: "TypeScript", category: "Frontend", note: "Type safety", icon: Code2 },
  { name: "Node.js", category: "Backend", note: "APIs & jobs", icon: CloudCog },
  { name: "PostgreSQL", category: "Backend", note: "Data modeling", icon: Database },
  { name: "Auth & Security", category: "Backend", note: "JWT + RBAC", icon: ShieldCheck },
  { name: "Server Actions", category: "Backend", note: "Mutation flow", icon: ServerCog },
  { name: "Git/GitHub", category: "Tools", note: "Flow + review", icon: GitBranch },
  { name: "CI/CD", category: "Tools", note: "Automated deploy", icon: Flame },
  { name: "Figma", category: "Tools", note: "Wireframes", icon: Folders },
  { name: "Monitoring", category: "Tools", note: "Logs + alerts", icon: Settings2 },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Pulse Commerce",
    description:
      "Nền tảng storefront tối ưu tốc độ với tìm kiếm tức thì, checkout mượt và dashboard theo thời gian thực.",
    tech: ["Next.js", "React", "Node"],
    image: "/projects/pulse-commerce.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Task Orbit",
    description:
      "Workspace quản trị dự án theo sprint, hỗ trợ timeline trực quan và automation cho team phân tán.",
    tech: ["React", "Node"],
    image: "/projects/task-orbit.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Vibe Analytics",
    description:
      "Dashboard phân tích hành vi người dùng với biểu đồ động, lọc dữ liệu sâu và cảnh báo bất thường.",
    tech: ["Next.js", "React"],
    image: "/projects/vibe-analytics.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Freelance / Product Studio",
    date: "2025 - Present",
    impact: "Xây và tối ưu 10+ landing pages, tăng conversion trung bình 25-40%.",
  },
  {
    role: "Fullstack Developer",
    company: "Startup SaaS",
    date: "2023 - 2025",
    impact: "Phát triển dashboard B2B, giảm thời gian render báo cáo từ 6.2s xuống 1.9s.",
  },
  {
    role: "Web Developer",
    company: "Agency Team",
    date: "2021 - 2023",
    impact: "Thiết kế quy trình component-driven giúp rút ngắn chu kỳ release hằng tuần.",
  },
];

export const BLOG_PREVIEWS: BlogPreview[] = [
  {
    title: "Kinetic Typography Trên Web Không Nặng Máy",
    slug: "kinetic-typography-web",
    summary: "Cách dùng motion có kiểm soát để tạo cảm giác sống động mà vẫn giữ performance ổn định.",
    date: "2026-02-19",
    readingTime: "6 phút",
  },
  {
    title: "Thiết Kế Bento Grid Thực Dụng Cho Portfolio",
    slug: "practical-bento-grid-portfolio",
    summary: "Bento không chỉ để đẹp: cách sắp xếp ưu tiên nội dung và điều hướng hành vi người xem.",
    date: "2026-01-28",
    readingTime: "5 phút",
  },
  {
    title: "Shadcn/ui + Tailwind: Build Nhanh Nhưng Vẫn Có Cá Tính",
    slug: "shadcn-tailwind-identity",
    summary: "Giữ tốc độ triển khai của component library mà không bị giao diện na ná nhau.",
    date: "2025-12-22",
    readingTime: "8 phút",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: BriefcaseBusiness },
  { label: "Website", href: "https://example.com/", icon: Globe },
];
