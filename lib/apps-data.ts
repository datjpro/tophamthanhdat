export type AppCategory = "all" | "dev" | "productivity" | "design" | "ai" | "utilities";

export type Platform = "macOS" | "Windows" | "Linux" | "Web" | "iOS" | "Android";

export type PricingType = "free" | "open-source" | "freemium" | "paid";

export type CuratedApp = {
  id: string;
  name: string;
  category: "dev" | "productivity" | "design" | "ai" | "utilities";
  tagline: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  recommendationReason: {
    vi: string;
    en: string;
  };
  platforms: Platform[];
  pricing: PricingType;
  url: string;
  badge?: {
    vi: string;
    en: string;
  };
  featured?: boolean;
};

export const CURATED_APPS: CuratedApp[] = [
  {
    id: "cursor",
    name: "Cursor",
    category: "dev",
    tagline: {
      vi: "Code editor tích hợp AI mạnh mẽ thế hệ mới",
      en: "The AI-first Code Editor built for software craft",
    },
    description: {
      vi: "Trình soạn thảo mã nguồn fork từ VS Code với khả năng lập trình cùng AI (Composer, Agent) vượt trội, hiểu toàn bộ codebase.",
      en: "A fork of VS Code supercharged with deep codebase indexing, multi-file edits, and agentic coding workflows.",
    },
    recommendationReason: {
      vi: "Tăng tốc độ phát triển dự án lên gấp 2-3 lần nhờ tính năng Composer và hiểu ngữ cảnh sâu.",
      en: "Dramatically speeds up feature delivery thanks to Composer and deep semantic context indexing.",
    },
    platforms: ["macOS", "Windows", "Linux"],
    pricing: "freemium",
    url: "https://www.cursor.com",
    badge: { vi: "Khuyên dùng hàng ngày", en: "Daily Driver" },
    featured: true,
  },
  {
    id: "raycast",
    name: "Raycast",
    category: "productivity",
    tagline: {
      vi: "Spotlight launcher nhanh như chớp với hệ sinh thái extension",
      en: "Blazingly fast, extendable launcher replacing Spotlight",
    },
    description: {
      vi: "Công cụ khởi chạy ứng dụng, clipboard history, quản lý phím tắt, snippet và tích hợp hàng nghìn extension công việc.",
      en: "Supercharged launcher with clipboard history, snippets, window management, and thousands of community extensions.",
    },
    recommendationReason: {
      vi: "Tiết kiệm hàng giờ mỗi tuần cho các thao tác lặp lại và tra cứu nhanh.",
      en: "Saves hours every week on routine searches, clipboard lookups, and window tiling.",
    },
    platforms: ["macOS", "Windows"],
    pricing: "freemium",
    url: "https://www.raycast.com",
    badge: { vi: "Cực kỳ thiết yếu", en: "Must Have" },
    featured: true,
  },
  {
    id: "warp",
    name: "Warp Terminal",
    category: "dev",
    tagline: {
      vi: "Terminal hiện đại với giao diện text block và AI tích hợp",
      en: "The modern terminal with blocks, IDE-style editing, and AI",
    },
    description: {
      vi: "Terminal thế hệ mới biến các câu lệnh thành các block riêng biệt, hỗ trợ command palette, phím tắt và tìm kiếm thông minh.",
      en: "Terminal redesigned with block-based outputs, intuitive keyboard navigation, command workflows, and embedded AI.",
    },
    recommendationReason: {
      vi: "Quên đi nỗi sợ gõ sai lệnh terminal hay tìm kiếm lại log dài dằng dặc.",
      en: "Organizes command outputs into clean blocks and makes terminal navigation effortless.",
    },
    platforms: ["macOS", "Linux", "Windows"],
    pricing: "freemium",
    url: "https://www.warp.dev",
    badge: { vi: "Terminal tốt nhất", en: "Top Terminal" },
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    tagline: {
      vi: "Nền tảng thiết kế giao diện UI/UX cộng tác hàng đầu",
      en: "The industry standard collaborative interface design tool",
    },
    description: {
      vi: "Công cụ thiết kế UI/UX trên nền web số một thế giới, hỗ trợ prototype, design system và tính năng dev mode tiện lợi.",
      en: "The premier collaborative tool for UI/UX design, design system tokens, interactive prototypes, and dev handoff.",
    },
    recommendationReason: {
      vi: "Chuẩn mực chung giữa Designer và Developer, biến ý tưởng thành visual system chuẩn xác.",
      en: "The universal bridge between design and engineering with seamless token and component handoffs.",
    },
    platforms: ["macOS", "Windows", "Web"],
    pricing: "freemium",
    url: "https://www.figma.com",
    featured: true,
  },
  {
    id: "claude",
    name: "Claude by Anthropic",
    category: "ai",
    tagline: {
      vi: "Mô hình ngôn ngữ sắc sảo nhất cho tư duy và viết mã",
      en: "The most nuanced and capable AI for deep thinking & code",
    },
    description: {
      vi: "Trợ lý AI với khả năng phân tích logic sâu sắc, viết văn tự nhiên và review kiến trúc phần mềm với độ chuẩn xác cao.",
      en: "Conversational and coding AI assistant with large context reasoning, articulate explanations, and high code quality.",
    },
    recommendationReason: {
      vi: "Khả năng suy luận ngữ cảnh lớn và tư duy kỹ thuật xuất sắc bậc nhất hiện nay.",
      en: "Exceptional contextual reasoning and nuanced code generation with minimal hallucinations.",
    },
    platforms: ["Web", "macOS", "iOS", "Android"],
    pricing: "freemium",
    url: "https://claude.ai",
    badge: { vi: "AI tư duy đỉnh cao", en: "Top Reasoning AI" },
    featured: true,
  },
  {
    id: "screen-studio",
    name: "Screen Studio",
    category: "design",
    tagline: {
      vi: "Quay video màn hình đẹp mắt tự động zoom mượt mà",
      en: "Create beautiful screen recordings with automatic smooth zooms",
    },
    description: {
      vi: "Phần mềm quay màn hình tự động bám theo con trỏ chuột, tạo hiệu ứng chuyển động camera mượt như trailer sản phẩm.",
      en: "Screen recording software that automatically zooms and pans on your cursor to make studio-quality product demos.",
    },
    recommendationReason: {
      vi: "Làm video demo sản phẩm và chia sẻ tính năng trông cực kỳ chuyên nghiệp trong vài phút.",
      en: "Turn simple feature walkthroughs into polished studio-grade launch videos without manual editing.",
    },
    platforms: ["macOS"],
    pricing: "paid",
    url: "https://screen.studio",
    badge: { vi: "Đỉnh cao quay màn hình", en: "Showcase King" },
  },
  {
    id: "obsidian",
    name: "Obsidian",
    category: "productivity",
    tagline: {
      vi: "Bộ não thứ hai lưu trữ ghi chú Markdown trên máy cục bộ",
      en: "Sharpen your thinking with local-first, linked Markdown notes",
    },
    description: {
      vi: "Ứng dụng ghi chú kiến thức cá nhân (PKM) dạng graph liên kết, dữ liệu 100% nằm trên máy bạn, bảo mật tuyệt đối.",
      en: "A powerful knowledge base that works on local Markdown files, featuring graph views, backlinks, and infinite plugins.",
    },
    recommendationReason: {
      vi: "Dữ liệu thuộc về bạn hoàn toàn, không sợ bị khóa dịch vụ và liên kết kiến thức rất trực quan.",
      en: "Full data sovereignty with zero vendor lock-in and a stellar graph view for connected insights.",
    },
    platforms: ["macOS", "Windows", "Linux", "iOS", "Android"],
    pricing: "free",
    url: "https://obsidian.md",
    badge: { vi: "Local-first", en: "Local-first" },
  },
  {
    id: "orbstack",
    name: "OrbStack",
    category: "dev",
    tagline: {
      vi: "Giải pháp chạy Docker & Linux siêu nhẹ, nhanh gấp nhiều lần",
      en: "Fast, light, and easy way to run Docker containers & Linux machines",
    },
    description: {
      vi: "Thay thế Docker Desktop cực kỳ mượt mà, khởi động chỉ 2 giây, tiêu tốn rất ít CPU và RAM của máy tính.",
      en: "A drop-in Docker Desktop replacement that boots in 2 seconds, with 2x battery efficiency and virtually zero idle CPU.",
    },
    recommendationReason: {
      vi: "Máy tính mát hơn rõ rệt khi dev các ứng dụng backend, microservices hay database.",
      en: "Keeps your machine cool and responsive even when running heavy local multi-container stacks.",
    },
    platforms: ["macOS"],
    pricing: "freemium",
    url: "https://orbstack.dev",
  },
  {
    id: "cleanshot",
    name: "CleanShot X",
    category: "utilities",
    tagline: {
      vi: "Công cụ chụp và chú thích ảnh màn hình tốt nhất",
      en: "The ultimate screen capture and annotation tool",
    },
    description: {
      vi: "Chụp ảnh cuộn trang dài, quay GIF/video, làm mờ dữ liệu nhạy cảm, OCR copy chữ từ hình ảnh cực nhanh.",
      en: "All-in-one screen capture utility with scrolling capture, pin-to-screen, OCR text extraction, and quick annotations.",
    },
    recommendationReason: {
      vi: "Dụng cụ không thể thiếu khi viết tài liệu, báo cáo bug hoặc ghi chú trực quan.",
      en: "Essential tool for bug reporting, clean documentation, and instant visual communication.",
    },
    platforms: ["macOS"],
    pricing: "paid",
    url: "https://cleanshot.com",
    featured: true,
  },
  {
    id: "tableplus",
    name: "TablePlus",
    category: "dev",
    tagline: {
      vi: "GUI quản trị cơ sở dữ liệu hiện đại, giao diện native nhanh gọn",
      en: "Modern, native, and friendly GUI for relational & NoSQL databases",
    },
    description: {
      vi: "Hỗ trợ kết nối Postgres, MySQL, SQLite, Redis, MongoDB,... với giao diện native siêu tốc và hỗ trợ inline edit dữ liệu an toàn.",
      en: "Native database management client supporting PostgreSQL, MySQL, SQLite, Redis, and more with inline editing and inline diffs.",
    },
    recommendationReason: {
      vi: "Tốc độ phản hồi tức thì, không bị nặng nề như các công cụ viết bằng Electron hay Java cũ kỹ.",
      en: "Blazing fast native performance without the memory footprint of bloated legacy DB clients.",
    },
    platforms: ["macOS", "Windows", "Linux", "iOS"],
    pricing: "freemium",
    url: "https://tableplus.com",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    category: "utilities",
    tagline: {
      vi: "Quản lý và chia cửa sổ thông minh bằng phím tắt",
      en: "Move and resize windows in macOS using keyboard shortcuts",
    },
    description: {
      vi: "Tiện ích chia cửa sổ màn hình theo tỉ lệ nửa, 1/3, 1/4 với các tổ hợp phím tắt nhanh, hoàn toàn miễn phí và mã nguồn mở.",
      en: "An elegant, lightweight open-source window manager with intuitive keyboard shortcuts and snap areas.",
    },
    recommendationReason: {
      vi: "Giữ không gian làm việc luôn gọn gàng và khoa học mà không tốn tài nguyên hệ thống.",
      en: "Keeps your multi-window desktop organized and clean with zero setup friction.",
    },
    platforms: ["macOS"],
    pricing: "open-source",
    url: "https://rectangleapp.com",
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    category: "ai",
    tagline: {
      vi: "AI sinh giao diện React & Tailwind CSS tương tác",
      en: "Generative UI system powered by AI to build React interfaces",
    },
    description: {
      vi: "Công cụ sinh component UI từ mô tả tự nhiên bằng React, Tailwind CSS và Radix UI, có thể copy mã nguồn trực tiếp vào dự án.",
      en: "AI-driven UI generator that crafts production-ready Next.js, React, and Tailwind components from plain text prompts.",
    },
    recommendationReason: {
      vi: "Tạo mẫu (prototype) giao diện nhanh chóng để kiểm chứng ý tưởng trước khi code chi tiết.",
      en: "Incredible for rapid wireframing and interactive UI mockups ready to paste into production codebases.",
    },
    platforms: ["Web"],
    pricing: "freemium",
    url: "https://v0.dev",
  },
];
