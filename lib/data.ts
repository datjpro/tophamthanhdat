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

export const SITE_THEME = {
  bg: "#050505",
  surface: "#121212",
  primary: "#e65100",
  accent: "#00f2ff",
  muted: "#a7a6ba",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "Initiate Contact",
} as const;

export const IMAGE_MAP = {
  homeHero: "/portfolio/profile/home-hero.jpg",
  aboutSticky: "/portfolio/profile/about-sticky.jpg",
  resumeProfile: "/portfolio/profile/resume-profile.jpg",
  aboutGallery: ["/portfolio/profile/gallery-1.jpg", "/portfolio/profile/gallery-2.jpg"],
  achievementHero: "/portfolio/awards/achievement-hero.jpg",
  fallback: "/avatar.svg",
} as const;

export const PROJECT_LAYOUT_META: Record<string, { variant: TimelineVariant; width: string }> = {
  "pulse-commerce": { variant: "high", width: "w-[390px] md:w-[470px]" },
  "task-orbit": { variant: "low", width: "w-[320px] md:w-[360px]" },
  "vibe-analytics": { variant: "mid", width: "w-[360px] md:w-[420px]" },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Builder Mindset",
    body: "I start from concrete business constraints, then ship thin and iterate fast.",
    icon: Hammer,
  },
  {
    title: "Design + Code",
    body: "I focus on structural clarity, strong typography and meaningful motion.",
    icon: Paintbrush2,
  },
  {
    title: "Story #1",
    body: "I reduced dashboard latency by nearly 70% by reworking query and cache layers.",
    icon: Gauge,
  },
  {
    title: "Story #2",
    body: "I turned a legacy monolith into modular components for faster onboarding.",
    icon: Sparkles,
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Next.js", category: "Frontend", note: "App Router architecture", icon: Layers3 },
  { name: "React", category: "Frontend", note: "Component systems", icon: Blocks },
  { name: "Tailwind CSS", category: "Frontend", note: "Design tokens", icon: WandSparkles },
  { name: "TypeScript", category: "Frontend", note: "Strong contracts", icon: Code2 },
  { name: "Node.js", category: "Backend", note: "API and workers", icon: CloudCog },
  { name: "PostgreSQL", category: "Backend", note: "Data modeling", icon: Database },
  { name: "Auth/Security", category: "Backend", note: "JWT and RBAC", icon: ShieldCheck },
  { name: "Server Actions", category: "Backend", note: "Mutation flow", icon: ServerCog },
  { name: "Git/GitHub", category: "Tools", note: "Review workflows", icon: GitBranch },
  { name: "CI/CD", category: "Tools", note: "Build and release pipelines", icon: Wrench },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "pulse-commerce",
    title: "Pulse Commerce",
    summary: "A conversion-first storefront with strict performance constraints.",
    description:
      "Pulse Commerce is built for rapid browsing, low checkout friction and clean operator workflows with real-time order visibility.",
    tech: ["Next.js", "React", "Node"],
    image: "/projects/pulse-commerce.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2025",
    role: "Fullstack Engineer",
    results: [
      "Homepage mobile LCP under 2.0s.",
      "Conversion rate increased 32% after six-week experimentation.",
      "Real-time order panel reduced support handling time.",
    ],
  },
  {
    slug: "task-orbit",
    title: "Task Orbit",
    summary: "Sprint workspace for distributed teams and async delivery.",
    description:
      "Task Orbit combines timeline planning, state automation and sprint visibility to reduce repetitive updates across teams.",
    tech: ["React", "Node"],
    image: "/projects/task-orbit.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2024",
    role: "Frontend Engineer",
    results: [
      "Reduced repetitive task updates by 40%.",
      "Introduced team velocity dashboard for sprint planning.",
      "Delivered consistent responsive behavior on mobile and desktop.",
    ],
  },
  {
    slug: "vibe-analytics",
    title: "Vibe Analytics",
    summary: "Behavior analytics dashboard with anomaly alerts.",
    description:
      "Vibe Analytics gives product and data teams flexible filtering, event insights and threshold-based anomaly notifications.",
    tech: ["Next.js", "React"],
    image: "/projects/vibe-analytics.svg",
    github: "https://github.com/",
    demo: "https://example.com/",
    year: "2023",
    role: "Frontend + Data Visualization",
    results: [
      "Report render time reduced from 6.2s to 1.9s.",
      "Added multi-dimension filter controls for analysts.",
      "Launched hour-window anomaly signal workflow.",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Freelance / Product Studio",
    date: "2025 - Present",
    impact: "Built and optimized landing systems, improving conversion by 25-40%.",
  },
  {
    role: "Fullstack Developer",
    company: "SaaS Startup",
    date: "2023 - 2025",
    impact: "Delivered B2B dashboards with measurable gains in speed and reliability.",
  },
  {
    role: "Web Developer",
    company: "Agency Team",
    date: "2021 - 2023",
    impact: "Standardized component workflows and shortened release cycles.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Top 3 Internal Hackathon",
    period: "2025",
    detail: "Built a practical AI support prototype for the customer success team in 48 hours.",
  },
  {
    title: "Mentored 10+ Junior Developers",
    period: "2024 - 2025",
    detail: "Coached review habits, architecture thinking and production readiness.",
  },
  {
    title: "Released 20+ Production Features",
    period: "2023 - 2025",
    detail: "Across ecommerce, analytics dashboards and workflow automation.",
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
