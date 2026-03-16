window.portfolioData = {
  generatedAt: "2026-03-05",
  profile: {
    name: "To Pham Thanh Dat",
    handle: "datjpro",
    role: "Software Developer",
    tagline:
      "Software engineering student building web, mobile, and blockchain products with clear architecture.",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/datjpro",
    twitter: "https://x.com/T626859858",
    stats: {
      publicRepos: 52,
      followers: 2,
      following: 6,
      accountSince: "2024",
    },
    languageStats: [
      { name: "JavaScript", count: 15 },
      { name: "HTML", count: 5 },
      { name: "Python", count: 5 },
      { name: "TypeScript", count: 4 },
      { name: "Java", count: 4 },
      { name: "Dart", count: 3 },
    ],
  },
  featuredSlugs: [
    "kiem-tra-phat-nguoi",
    "talent-os-monorepo",
    "cloud-security-auditor",
    "vieshare-p2p",
    "viepropchain",
    "website-selling-accounts",
  ],
  projects: [
    {
      slug: "kiem-tra-phat-nguoi",
      title: "Kiem Tra Phat Nguoi Telegram Bot",
      year: "2026",
      category: "Automation",
      language: "Python",
      role: "Bot Backend",
      summary:
        "Telegram bot for checking and tracking traffic fines with scheduled alerts and command-based workflow.",
      problem:
        "Manual fine checking is repetitive, and users can miss updates after the first lookup.",
      solution:
        "Implemented /check, /track, /untrack, and /list commands, then automated periodic monitoring and notifications.",
      impact:
        "Turns one-time checks into a continuous alert system and reduces user effort.",
      highlights: [
        "Command driven UX in Telegram",
        "Scheduled monitoring flow",
        "Environment based configuration",
      ],
      stack: ["Python", "Telegram Bot API", "Task Scheduler", "dotenv"],
      repo: "https://github.com/datjpro/Kiem_tra_phat_nguoi",
    },
    {
      slug: "tophamthanhdat-site",
      title: "Tophamthanhdat Personal Site",
      year: "2026",
      category: "Portfolio",
      language: "TypeScript",
      role: "Frontend + Content",
      summary:
        "Personal website focused on web, mobile, and blockchain positioning for future solution architect path.",
      problem:
        "Need a clear online identity showing technical direction and selected work in one place.",
      solution:
        "Built a portfolio site with compact storytelling around focus areas, skills, and practical projects.",
      impact:
        "Provides a stronger first impression for recruiters and collaborators.",
      highlights: [
        "Clear technical narrative",
        "Structured project highlights",
        "Single source of profile information",
      ],
      stack: ["TypeScript", "React", "Tailwind CSS"],
      repo: "https://github.com/datjpro/tophamthanhdat",
    },
    {
      slug: "talent-os-monorepo",
      title: "Talent OS Monorepo",
      year: "2026",
      category: "Web Platform",
      language: "JavaScript",
      role: "Full-stack Contributor",
      summary:
        "Student talent investment platform concept developed as a monorepo for multi-service product direction.",
      problem:
        "Education projects often lack scalable architecture when features start growing.",
      solution:
        "Organized work in monorepo style to align features, shared logic, and future service split.",
      impact:
        "Creates a foundation for scaling from classroom prototype to product-grade structure.",
      highlights: [
        "Monorepo organization",
        "Product-centric scope",
        "Collaboration-friendly structure",
      ],
      stack: ["JavaScript", "Node.js", "Web App"],
      repo: "https://github.com/datjpro/talent-os-monorepo",
    },
    {
      slug: "cloud-security-auditor",
      title: "Cloud Security Auditor & Auto Remediation",
      year: "2025",
      category: "Cloud Security",
      language: "Multi-language",
      role: "System Designer",
      summary:
        "Concept system for cloud security auditing with automatic remediation actions.",
      problem:
        "Cloud misconfigurations are frequent, while manual review cycles are slow.",
      solution:
        "Designed a flow for audit checks, policy detection, and remediation triggers.",
      impact:
        "Supports faster security response and more consistent baseline hardening.",
      highlights: [
        "Audit + remediation model",
        "Security-first architecture",
        "Practical ops perspective",
      ],
      stack: ["Cloud Security", "Policy Checks", "Automation"],
      repo:
        "https://github.com/datjpro/Cloud-Security-Auditor-Auto-Remediation-",
    },
    {
      slug: "vieshare-p2p",
      title: "VieShare P2P File Sharing",
      year: "2025",
      category: "Desktop App",
      language: "Java",
      role: "Desktop + Networking",
      summary:
        "JavaFX desktop app for peer-to-peer chat and file transfer with tracker-based peer discovery and RSA/AES encryption.",
      problem:
        "Centralized file transfer can become a bottleneck and weak point for privacy.",
      solution:
        "Used tracker server for peer discovery, then direct P2P transfer with end-to-end encryption.",
      impact:
        "Improves transfer resilience and security for direct client-to-client communication.",
      highlights: [
        "Tracker + P2P architecture",
        "RSA/AES encryption usage",
        "Desktop UX with JavaFX",
      ],
      stack: ["Java", "JavaFX", "Socket Networking", "RSA/AES"],
      repo: "https://github.com/datjpro/VieShare-P2P-File-Sharing",
    },
    {
      slug: "viepropchain",
      title: "ViePropChain",
      year: "2025",
      category: "Blockchain",
      language: "JavaScript",
      role: "Web3 Builder",
      summary:
        "Blockchain-enabled real estate infrastructure platform with smart contracts and future AI-ready data direction.",
      problem:
        "Real estate systems often struggle with trust, traceability, and fragmented data.",
      solution:
        "Combined blockchain validation, smart contract layers, and product modules for transparent asset handling.",
      impact:
        "Sets a basis for transparent, secure real estate workflows in a digital ecosystem.",
      highlights: [
        "Smart contract integration",
        "Real estate domain model",
        "Bilingual project documentation",
      ],
      stack: ["JavaScript", "Solidity", "Truffle", "React", "Web3"],
      repo: "https://github.com/datjpro/viepropchain",
    },
    {
      slug: "website-selling-accounts",
      title: "Website Selling Accounts",
      year: "2025",
      category: "E-commerce",
      language: "TypeScript",
      role: "Full-stack Developer",
      summary:
        "Full-stack application for digital account selling with React/Vite frontend and Node/Express + PostgreSQL backend.",
      problem:
        "Need a clear, practical commerce flow for managing and selling digital account inventory.",
      solution:
        "Implemented frontend-backend split with TypeScript and database-backed operations.",
      impact:
        "Demonstrates production-style architecture for practical online selling scenarios.",
      highlights: [
        "TypeScript full-stack setup",
        "Docker-ready structure",
        "PostgreSQL integration",
      ],
      stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL"],
      repo: "https://github.com/datjpro/website_selling_accounts",
    },
    {
      slug: "cohang-flutter",
      title: "CoHang Tutoring Manager",
      year: "2025",
      category: "Mobile/Desktop",
      language: "Dart",
      role: "Flutter Developer",
      summary:
        "Flutter application for tutoring operations: student management, scheduling, tuition tracking, and reporting.",
      problem:
        "Private tutoring operations often rely on scattered spreadsheets and manual tracking.",
      solution:
        "Built offline-first management features and SQLite storage with easy action flows.",
      impact:
        "Helps tutors and small centers operate with cleaner data and less administrative overhead.",
      highlights: [
        "Offline data storage",
        "Operational dashboard flow",
        "Education-focused feature set",
      ],
      stack: ["Flutter", "Dart", "SQLite"],
      repo: "https://github.com/datjpro/CoHang",
    },
    {
      slug: "learn-rust",
      title: "Learn Rust",
      year: "2025",
      category: "Learning Track",
      language: "Rust",
      role: "Self-study",
      summary:
        "Hands-on repository for Rust learning and systems-level programming practice.",
      problem:
        "Transitioning from web stacks to systems-level concepts requires disciplined practice.",
      solution:
        "Created a dedicated repository for iterative language experiments and syntax mastery.",
      impact:
        "Expands technical range beyond web-only development.",
      highlights: [
        "Language foundations",
        "Incremental practice approach",
        "Cross-domain growth",
      ],
      stack: ["Rust"],
      repo: "https://github.com/datjpro/Learn_Rust",
    },
    {
      slug: "database-viepropchain",
      title: "ViePropChain Database Microservice",
      year: "2025",
      category: "Backend",
      language: "JavaScript",
      role: "Backend/Data",
      summary:
        "Database-focused service layer for the ViePropChain ecosystem with MongoDB orientation.",
      problem:
        "Blockchain products still need practical, query-friendly off-chain data services.",
      solution:
        "Separated database concerns into a dedicated service module for maintainability.",
      impact:
        "Improves product architecture by isolating persistence responsibilities.",
      highlights: [
        "Microservice separation",
        "MongoDB-ready schema direction",
        "Alignment with larger Web3 product",
      ],
      stack: ["JavaScript", "Node.js", "MongoDB"],
      repo: "https://github.com/datjpro/database_viepropchain_microservice",
    },
  ],
};
