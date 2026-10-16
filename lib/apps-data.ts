export type AppCategory = "all" | "dev" | "productivity" | "design" | "ai" | "utilities";

export type Platform = "macOS" | "Windows" | "Linux" | "Web" | "iOS" | "Android";

export type PricingType = "free" | "open-source" | "freemium" | "paid";

export type VnFeature = {
  formula?: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
};

export type DownloadAsset = {
  name: string;
  label: {
    vi: string;
    en: string;
  };
  size: string;
  type: string;
  url: string;
  desc?: {
    vi: string;
    en: string;
  };
};

export type CuratedApp = {
  id: string;
  name: string;
  iconUrl: string;
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
  version?: string;
  license?: string;
  githubUrl?: string;
  upstreamUrl?: string;
  techStack?: string[];
  overview?: {
    vi: {
      summary: string[];
      coreHighlights: { title: string; desc: string }[];
      vnFeaturesTitle: string;
      vnFeatures: VnFeature[];
      techSpecs: { label: string; value: string }[];
      downloads: DownloadAsset[];
    };
    en: {
      summary: string[];
      coreHighlights: { title: string; desc: string }[];
      vnFeaturesTitle: string;
      vnFeatures: VnFeature[];
      techSpecs: { label: string; value: string }[];
      downloads: DownloadAsset[];
    };
  };
};

export const CURATED_APPS: CuratedApp[] = [
  {
    id: "gridcraft-vn",
    name: "GridCraft - Phiên bản Tiếng Việt",
    iconUrl:
      "https://raw.githubusercontent.com/storytold/gridcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.gridcraft.png",
    category: "productivity",
    tagline: {
      vi: "Bảng tính mã nguồn mở thế hệ mới viết bằng 100% Rust thuần, tối ưu hóa cho người dùng Việt",
      en: "Clean-room open-source spreadsheet built in pure Rust, supercharged with Vietnamese localization",
    },
    description: {
      vi: "Dự án bảng tính mã nguồn mở clean-room viết bằng 100% Rust thuần thay thế Microsoft Excel. Khởi chạy tức thì, siêu nhẹ, bảo mật dữ liệu cục bộ và tương thích hoàn toàn file .xlsx. Bản Việt hoá v0.7.0-vn bổ sung các hàm đọc số tiền thành chữ, loại bỏ dấu, tách họ tên, chuyển mã font TCVN3 sang Unicode, sắp xếp chuẩn tiếng Việt và biểu mẫu kế toán Việt Nam.",
      en: "A blazingly fast, memory-safe clean-room Excel reimplementation built from scratch in pure Rust with native .xlsx compatibility. Release v0.7.0-vn introduces dedicated Vietnamese functions: text-to-speech currency (=DOCSO), accent removal, name splitting, TCVN3-to-Unicode conversion, alphabetical collation, and business templates.",
    },
    recommendationReason: {
      vi: "Giải pháp bảng tính mã nguồn mở độc lập, siêu nhẹ và bảo mật tuyệt đối, trang bị đầy đủ công cụ đặc thù cho kế toán, văn phòng và người dùng Việt Nam.",
      en: "A lightweight, secure, and independent open-source spreadsheet suite packed with dedicated Vietnamese accounting and administrative utilities.",
    },
    platforms: ["Windows", "macOS", "Linux", "Web"],
    pricing: "open-source",
    url: "https://github.com/datjpro/gridcraft-vn/releases/tag/gridcraft-0.7.0-vn",
    badge: {
      vi: "Bản Tiếng Việt v0.7.0",
      en: "Vietnamese Release v0.7.0",
    },
    featured: true,
    version: "v0.7.0-vn",
    license: "Mã nguồn mở (MIT / Apache-2.0)",
    githubUrl: "https://github.com/datjpro/gridcraft-vn",
    upstreamUrl: "https://github.com/storytold/gridcraft",
    techStack: ["Rust", "WebAssembly", "MCP (Model Context Protocol)", "XLSX Engine"],
    overview: {
      vi: {
        summary: [
          "GridCraft là dự án phần mềm bảng tính mã nguồn mở (clean-room reimplementation phong cách Microsoft Excel) được phát triển hoàn toàn bằng ngôn ngữ lập trình hệ thống Rust bởi ArtCraft.",
          "Phần mềm được thiết kế với triết lý: Khởi động tức thì trong chớp mắt, tiêu thụ bộ nhớ cực thấp (chỉ vài chục MB thay vì hàng trăm MB như các phần mềm truyền thống), an toàn bộ nhớ tuyệt đối và không phụ thuộc vào runtime cồng kềnh như Electron hay Java.",
          "Tương thích sâu với định dạng tệp .xlsx tiêu chuẩn, hỗ trợ hơn 500+ hàm công thức (bao gồm dynamic arrays, LAMBDA, LET, XLOOKUP), hệ thống PivotTable linh hoạt, 17 loại biểu đồ dữ liệu và giao diện Dark Mode thanh lịch.",
          "Đặc biệt, GridCraft hỗ trợ điều khiển thông minh qua giao thức Agent MCP (Model Context Protocol), cho phép trợ lý AI tương tác và tự động hóa bảng tính.",
          "Bản phát hành v0.7.0-vn được Tô Đạt (datjpro) xây dựng và phát hành nhằm giải quyết trọn vẹn các yêu cầu nghiệp vụ thực tế của người dùng Việt Nam trong công tác kế toán, hành chính và giáo dục.",
        ],
        coreHighlights: [
          {
            title: "100% Rust Thuần - Siêu Nhanh & Nhẹ",
            desc: "Hiệu năng native đỉnh cao, tính toán hàng triệu ô dữ liệu mượt mà, không gặp hiện tượng giật lag do Garbage Collection.",
          },
          {
            title: "Tương Thích Hoàn Hảo Định Dạng .xlsx",
            desc: "Mở, chỉnh sửa và lưu các file bảng tính Excel quen thuộc mà vẫn bảo toàn đầy đủ công thức, kiểu ô và cấu trúc bảng.",
          },
          {
            title: "PivotTable & 17 Loại Biểu Đồ Trực Quan",
            desc: "Phân tích số liệu nhiều chiều với PivotTable gom nhóm ngày tháng, kết hợp biểu đồ cột, đường, tròn, sparklines trực tiếp.",
          },
          {
            title: "Sẵn Sàng Tích Hợp AI Qua Giao Thức MCP",
            desc: "Giao thức Model Context Protocol cho phép các AI coding assistant và agent tự động đọc hiểu, xử lý và tạo lập bảng tính.",
          },
        ],
        vnFeaturesTitle: "Tính Năng Nâng Cao Trên Bản Việt Hóa v0.7.0-vn",
        vnFeatures: [
          {
            formula: '=DOCSO(số, "đồng", "xu")',
            title: {
              vi: "Đọc số tiền thành chữ tự động",
              en: "Number to Vietnamese words",
            },
            description: {
              vi: "Tự động dịch số tiền thành chữ viết chuẩn quy tắc kế toán tài chính Việt Nam (hỗ trợ đơn vị tiền tệ tùy biến: đồng, xu, nghìn, triệu...).",
              en: "Converts numerical money values into proper Vietnamese words according to national accounting standards.",
            },
          },
          {
            formula: "=KHONGDAU(văn_bản)",
            title: {
              vi: "Loại bỏ dấu tiếng Việt chuẩn xác",
              en: "Remove Vietnamese diacritics",
            },
            description: {
              vi: "Chuyển chuỗi tiếng Việt có dấu thành không dấu nhanh chóng, hỗ trợ chuẩn hóa dữ liệu, tạo mã định danh (slug) hoặc mã nhân viên.",
              en: "Strips all accents and diacritics from Vietnamese strings for slug generation, indexing, or database normalization.",
            },
          },
          {
            formula: "=TACHHO(họ_và_tên) & =TACHTEN(họ_và_tên)",
            title: {
              vi: "Tách họ và tên nhân viên / học sinh",
              en: "Split Vietnamese first & last names",
            },
            description: {
              vi: "Tự động bóc tách phần Họ (kèm họ đệm) và phần Tên chính từ một cột họ tên duy nhất chỉ với một công thức.",
              en: "Intelligently extracts last names, middle names, and first names from a combined full name column.",
            },
          },
          {
            formula: "=PROPER_VN(văn_bản)",
            title: {
              vi: "Viết hoa chuẩn chính tả tiếng Việt",
              en: "Proper capitalization for Vietnamese",
            },
            description: {
              vi: "Viết hoa chữ cái đầu mỗi từ chuẩn xác, xử lý hoàn hảo các ký tự nguyên âm có dấu tiếng Việt mà hàm PROPER thông thường hay lỗi.",
              en: "Capitalizes the first letter of each word accurately handling Vietnamese compound accented vowels.",
            },
          },
          {
            formula: "=TCVN3_TO_UNICODE(văn_bản)",
            title: {
              vi: "Chuyển mã font TCVN3 sang Unicode",
              en: "Convert TCVN3 (ABC) to Unicode",
            },
            description: {
              vi: "Chuyển đổi ngay lập tức văn bản gõ bằng bảng mã TCVN3 (font .VNTime, .VNArial cổ điển) sang chuẩn Unicode UTF-8 hiện đại.",
              en: "Instant in-cell transcoding of legacy Vietnamese TCVN3/ABC documents into clean modern Unicode.",
            },
          },
          {
            formula: "Tiêu chuẩn bảng chữ cái Việt Nam",
            title: {
              vi: "Sắp xếp tiếng Việt chuẩn (Đ sau D)",
              en: "Standard Vietnamese alphabetical sorting",
            },
            description: {
              vi: "Bộ sắp xếp chuẩn xác bảng chữ cái tiếng Việt: Chữ 'Đ' được xếp chuẩn sau chữ 'D' cùng thứ tự thanh điệu khoa học.",
              en: "Correct alphabetical sorting order placing 'Đ' strictly after 'D' with accurate tone mark collation.",
            },
          },
          {
            formula: "Phím tắt 1 chạm trên Ribbon",
            title: {
              vi: "Định dạng tiền tệ Việt Nam Đồng (₫)",
              en: "VND currency format shortcut",
            },
            description: {
              vi: "Thêm biểu tượng và định dạng tiền tệ Việt Nam Đồng (₫) trực tiếp trên thanh công cụ Ribbon thao tác nhanh.",
              en: "Direct one-click VND currency button right on the top Ribbon formatting toolbar.",
            },
          },
          {
            formula: "File → Mẫu mới",
            title: {
              vi: "Mẫu báo cáo kế toán thuần Việt",
              en: "Pre-designed Vietnamese templates",
            },
            description: {
              vi: "Tích hợp sẵn các mẫu biểu bảng biểu thông dụng tại Việt Nam: Phiếu thu, Phiếu chi và Bảng điểm theo quy chế.",
              en: "Built-in document templates tailored for Vietnam: cash receipt vouchers, payment vouchers, and gradebooks.",
            },
          },
        ],
        techSpecs: [
          { label: "Phiên bản hiện tại", value: "v0.7.0-vn (Tháng 10/2026)" },
          { label: "Ngôn ngữ phát triển", value: "100% Pure Rust (Không runtime cồng kềnh)" },
          { label: "Giấy phép bản quyền", value: "Mã nguồn mở hoàn toàn (MIT / Apache-2.0)" },
          { label: "Hệ điều hành hỗ trợ", value: "Windows 10/11 (x64), Linux, macOS, Web (Wasm)" },
          { label: "Dung lượng bộ cài", value: "~14 MB (MSI) / ~17.8 MB (Portable)" },
          { label: "Giao thức AI", value: "Model Context Protocol (MCP) & CLI channel" },
          { label: "Tác giả bản Việt hóa", value: "Tô Đạt (datjpro)" },
          { label: "Dự án nền tảng gốc", value: "ArtCraft / storytold" },
        ],
        downloads: [
          {
            name: "gridcraft-0.7.0-vn-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "14 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut và liên kết tệp .xlsx",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcut and .xlsx file associations",
            },
            url: "https://github.com/datjpro/gridcraft-vn/releases/download/gridcraft-0.7.0-vn/gridcraft-0.7.0-vn-windows-x64.msi",
          },
          {
            name: "gridcraft-0.7.0-vn-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "17.8 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay trên máy tính hoặc USB",
              en: "Standalone portable package requiring no installation, ready to run from any folder or USB drive",
            },
            url: "https://github.com/datjpro/gridcraft-vn/releases/download/gridcraft-0.7.0-vn/gridcraft-0.7.0-vn-windows-x64-portable.zip",
          },
        ],
      },
      en: {
        summary: [
          "GridCraft is an open-source, clean-room reimplementation of Microsoft Excel, written entirely in pure Rust by the ArtCraft team.",
          "It delivers instant startup, minimal RAM consumption (dozens of megabytes instead of hundreds), and rock-solid memory safety without depending on heavy runtimes such as Electron, Java, or .NET.",
          "Features comprehensive .xlsx format compatibility, 500+ formulas (dynamic arrays, LAMBDA, LET, XLOOKUP), responsive PivotTables with date grouping, 17 chart types, and sleek dark mode.",
          "Built AI-ready: provides a Model Context Protocol (MCP) server allowing AI agents to inspect, manipulate, and generate complex spreadsheets automatically.",
          "Release v0.7.0-vn is localized and enhanced by Tô Đạt (datjpro) to cater directly to Vietnamese accountants, administrative staff, teachers, and students.",
        ],
        coreHighlights: [
          {
            title: "100% Pure Rust - Blazingly Fast",
            desc: "Exceptional native performance handling massive datasets with zero garbage collection lag.",
          },
          {
            title: "Seamless .xlsx Compatibility",
            desc: "Open, edit, and export native Microsoft Excel spreadsheets preserving cell styles and formula integrity.",
          },
          {
            title: "PivotTables & 17 Chart Types",
            desc: "Deep multidimensional analytics with PivotTable grouping, sparklines, and diverse chart visualizations.",
          },
          {
            title: "AI-Ready via MCP Protocol",
            desc: "Integrate with AI agents over the standardized Model Context Protocol for automated data workflows.",
          },
        ],
        vnFeaturesTitle: "Exclusive Enhancements in Vietnamese Edition (v0.7.0-vn)",
        vnFeatures: [
          {
            formula: '=DOCSO(số, "đồng", "xu")',
            title: {
              vi: "Đọc số tiền thành chữ tự động",
              en: "Number to Vietnamese words",
            },
            description: {
              vi: "Tự động dịch số tiền thành chữ viết chuẩn quy tắc kế toán tài chính Việt Nam (hỗ trợ đơn vị tiền tệ tùy biến: đồng, xu, nghìn, triệu...).",
              en: "Converts numerical money values into proper Vietnamese words according to national accounting standards.",
            },
          },
          {
            formula: "=KHONGDAU(văn_bản)",
            title: {
              vi: "Loại bỏ dấu tiếng Việt chuẩn xác",
              en: "Remove Vietnamese diacritics",
            },
            description: {
              vi: "Chuyển chuỗi tiếng Việt có dấu thành không dấu nhanh chóng, hỗ trợ chuẩn hóa dữ liệu, tạo mã định danh (slug) hoặc mã nhân viên.",
              en: "Strips all accents and diacritics from Vietnamese strings for slug generation, indexing, or database normalization.",
            },
          },
          {
            formula: "=TACHHO(họ_và_tên) & =TACHTEN(họ_và_tên)",
            title: {
              vi: "Tách họ và tên nhân viên / học sinh",
              en: "Split Vietnamese first & last names",
            },
            description: {
              vi: "Tự động bóc tách phần Họ (kèm họ đệm) và phần Tên chính từ một cột họ tên duy nhất chỉ với một công thức.",
              en: "Intelligently extracts last names, middle names, and first names from a combined full name column.",
            },
          },
          {
            formula: "=PROPER_VN(văn_bản)",
            title: {
              vi: "Viết hoa chuẩn chính tả tiếng Việt",
              en: "Proper capitalization for Vietnamese",
            },
            description: {
              vi: "Viết hoa chữ cái đầu mỗi từ chuẩn xác, xử lý hoàn hảo các ký tự nguyên âm có dấu tiếng Việt mà hàm PROPER thông thường hay lỗi.",
              en: "Capitalizes the first letter of each word accurately handling Vietnamese compound accented vowels.",
            },
          },
          {
            formula: "=TCVN3_TO_UNICODE(văn_bản)",
            title: {
              vi: "Chuyển mã font TCVN3 sang Unicode",
              en: "Convert TCVN3 (ABC) to Unicode",
            },
            description: {
              vi: "Chuyển đổi ngay lập tức văn bản gõ bằng bảng mã TCVN3 (font .VNTime, .VNArial cổ điển) sang chuẩn Unicode UTF-8 hiện đại.",
              en: "Instant in-cell transcoding of legacy Vietnamese TCVN3/ABC documents into clean modern Unicode.",
            },
          },
          {
            formula: "Vietnamese Alphabet Collation",
            title: {
              vi: "Sắp xếp tiếng Việt chuẩn (Đ sau D)",
              en: "Standard Vietnamese alphabetical sorting",
            },
            description: {
              vi: "Bộ sắp xếp chuẩn xác bảng chữ cái tiếng Việt: Chữ 'Đ' được xếp chuẩn sau chữ 'D' cùng thứ tự thanh điệu khoa học.",
              en: "Correct alphabetical sorting order placing 'Đ' strictly after 'D' with accurate tone mark collation.",
            },
          },
          {
            formula: "One-click Ribbon formatting",
            title: {
              vi: "Định dạng tiền tệ Việt Nam Đồng (₫)",
              en: "VND currency format shortcut",
            },
            description: {
              vi: "Thêm biểu tượng và định dạng tiền tệ Việt Nam Đồng (₫) trực tiếp trên thanh công cụ Ribbon thao tác nhanh.",
              en: "Direct one-click VND currency button right on the top Ribbon formatting toolbar.",
            },
          },
          {
            formula: "File → New Sample",
            title: {
              vi: "Mẫu báo cáo kế toán thuần Việt",
              en: "Pre-designed Vietnamese templates",
            },
            description: {
              vi: "Tích hợp sẵn các mẫu biểu bảng biểu thông dụng tại Việt Nam: Phiếu thu, Phiếu chi và Bảng điểm theo quy chế.",
              en: "Built-in document templates tailored for Vietnam: cash receipt vouchers, payment vouchers, and gradebooks.",
            },
          },
        ],
        techSpecs: [
          { label: "Current Version", value: "v0.7.0-vn (Oct 2026)" },
          { label: "Core Language", value: "100% Pure Rust (Zero heavy runtimes)" },
          { label: "Open Source License", value: "MIT / Apache-2.0" },
          { label: "Supported Platforms", value: "Windows 10/11 (x64), Linux, macOS, Web (Wasm)" },
          { label: "Package Size", value: "~14 MB (MSI) / ~17.8 MB (Portable)" },
          { label: "AI Protocol", value: "Model Context Protocol (MCP) & CLI channel" },
          { label: "Vietnamese Localization", value: "Tô Đạt (datjpro)" },
          { label: "Upstream Project", value: "ArtCraft / storytold" },
        ],
        downloads: [
          {
            name: "gridcraft-0.7.0-vn-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "14 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut và liên kết tệp .xlsx",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcut and .xlsx file associations",
            },
            url: "https://github.com/datjpro/gridcraft-vn/releases/download/gridcraft-0.7.0-vn/gridcraft-0.7.0-vn-windows-x64.msi",
          },
          {
            name: "gridcraft-0.7.0-vn-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "17.8 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay trên máy tính hoặc USB",
              en: "Standalone portable package requiring no installation, ready to run from any folder or USB drive",
            },
            url: "https://github.com/datjpro/gridcraft-vn/releases/download/gridcraft-0.7.0-vn/gridcraft-0.7.0-vn-windows-x64-portable.zip",
          },
        ],
      },
    },
  },
];

export function getAppById(id: string): CuratedApp | undefined {
  return CURATED_APPS.find((app) => app.id === id);
}

export function getAllApps(): CuratedApp[] {
  return CURATED_APPS;
}
