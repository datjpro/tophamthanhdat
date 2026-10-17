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
  featureTags?: string[];
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
    featureTags: ["=DOCSO()", "=KHONGDAU()", "=TACHHO()", "=TCVN3_TO_UNICODE()", "100% Rust"],
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
  {
    id: "pdfcraft-vn",
    name: "PdfCraft - Phiên bản Tiếng Việt",
    iconUrl:
      "https://raw.githubusercontent.com/storytold/pdfcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.pdfcraft.png",
    category: "productivity",
    tagline: {
      vi: "Trình biên tập và xem tài liệu PDF mã nguồn mở viết bằng 100% Rust thuần, hỗ trợ tiếng Việt toàn diện",
      en: "Fast, privacy-focused open-source PDF reader and editor built in pure Rust, fully localized for Vietnamese",
    },
    description: {
      vi: "Dự án phần mềm đọc và biên tập tài liệu PDF mã nguồn mở thế hệ mới viết hoàn toàn bằng Rust thuần, siêu nhanh, bảo mật tuyệt đối và không giật lag. Bản Việt hóa v0.8.0-vn dịch thuật hoàn chỉnh hơn 2.600 mục từ giao diện, chuẩn hóa tìm kiếm Unicode tiếng Việt (NFC/NFD), tích hợp phông chữ Inter & JetBrains Mono chống lỗi font, hỗ trợ OCR nhận diện ký tự tiếng Việt và cung cấp bộ cài đặt Windows MSI & Portable.",
      en: "A modern, blazingly fast open-source PDF viewer and editor built from scratch in pure Rust. Release v0.8.0-vn delivers 100% Vietnamese translation (>2,600 strings), smart Unicode search normalization (NFC/NFD), embedded Inter & JetBrains Mono fonts for Vietnamese typography, Vietnamese OCR support, and native Windows MSI & Portable packaging.",
    },
    recommendationReason: {
      vi: "Giải pháp xem và xử lý tệp PDF độc lập, không quảng cáo, mở file siêu tốc và tối ưu hóa trọn vẹn cho người dùng và tài liệu tiếng Việt.",
      en: "A secure, telemetry-free, and lightning-fast PDF suite fully tailored for Vietnamese document processing and typography.",
    },
    platforms: ["Windows", "macOS", "Linux"],
    pricing: "open-source",
    url: "https://github.com/datjpro/pdfcraft-vn/releases/tag/PDFCraft-v0.8.0-vn",
    badge: {
      vi: "Bản Tiếng Việt v0.8.0",
      en: "Vietnamese Release v0.8.0",
    },
    featured: true,
    version: "v0.8.0-vn",
    license: "Mã nguồn mở (MIT / Apache-2.0)",
    githubUrl: "https://github.com/datjpro/pdfcraft-vn",
    upstreamUrl: "https://github.com/storytold/pdfcraft",
    techStack: ["Rust", "PDF Engine", "Unicode NFC/NFD", "OCR (vi)", "WiX MSI"],
    featureTags: ["100% Rust", "Giao diện Tiếng Việt", "Tìm kiếm Unicode", "Font Tiếng Việt", "OCR Tiếng Việt"],
    overview: {
      vi: {
        summary: [
          "PdfCraft là dự án phần mềm đọc, quản lý và biên tập tài liệu PDF mã nguồn mở được phát triển hoàn toàn bằng ngôn ngữ lập trình hệ thống Rust bởi Storytold / ArtCraft.",
          "Phần mềm được thiết kế với triết lý: Khởi động tức thì, giao diện trực quan hiện đại, chiếm dụng tài nguyên bộ nhớ cực thấp và bảo mật dữ liệu cá nhân cục bộ 100% không gửi dữ liệu ra bên ngoài.",
          "Hỗ trợ xem đa tab, chú thích tài liệu (tô sáng highlight, gạch chân, thêm ghi chú, vẽ hình), trích xuất trang, xoay và gộp trang PDF với tốc độ xử lý native cực nhanh.",
          "Tích hợp công nghệ nhận dạng ký tự quang học (OCR) giúp số hóa tài liệu scan dạng hình ảnh thành văn bản có thể tìm kiếm và sao chép.",
          "Bản phát hành v0.8.0-vn được Tô Đạt (datjpro) xây dựng và phát hành nhằm mang đến giải pháp PDF hoàn thiện nhất cho người dùng Việt Nam với giao diện thuần Việt, bộ phông chữ sắc nét và cơ chế tìm kiếm Unicode chuẩn xác.",
        ],
        coreHighlights: [
          {
            title: "100% Rust Thuần - Siêu Nhanh & Nhẹ",
            desc: "Hiệu năng native vượt trội, mở tức thì cả những tệp PDF dung lượng lớn hàng trăm trang mà không gián đoạn.",
          },
          {
            title: "Bảo Mật Quyền Riêng Tư Tuyệt Đối",
            desc: "Xử lý tài liệu 100% ngoại tuyến (offline), không gửi dữ liệu lên đám mây, không chứa quảng cáo hay mã theo dõi.",
          },
          {
            title: "Đầy Đủ Công Cụ Chú Thích & Quản Lý Trang",
            desc: "Hỗ trợ highlight, gạch chân, vẽ hình, thêm ghi chú, xoay trang, tách và ghép tài liệu trực quan.",
          },
          {
            title: "Nhận Dạng Văn Bản Quang Học (OCR Tiếng Việt)",
            desc: "Trích xuất văn bản từ trang scan hoặc ảnh chụp nhanh chóng với mô-đun ngôn ngữ tiếng Việt chuyên dụng.",
          },
        ],
        vnFeaturesTitle: "Tính Năng Nổi Bật Trên Bản Việt Hóa v0.8.0-vn",
        vnFeatures: [
          {
            formula: "Menu ▸ Tùy chọn (Preferences)",
            title: {
              vi: "Giao diện thuần Việt 100%",
              en: "100% Vietnamese localization",
            },
            description: {
              vi: "Dịch thuật toàn diện hơn 2.600 mục từ và nhãn giao diện (menu, thanh công cụ, bảng điều khiển, hộp thoại thuộc tính, thông báo hệ thống). Tự động nhận diện ngôn ngữ máy vi-VN.",
              en: "Comprehensive localization of 2,600+ UI strings across all menus, toolbars, sidebars, and system dialogues. Automatically detects vi-VN locale.",
            },
          },
          {
            formula: "Ctrl + F (Tìm kiếm chuẩn hóa)",
            title: {
              vi: "Tìm kiếm tiếng Việt chuẩn hóa (NFC / NFD)",
              en: "Normalized Vietnamese Unicode search",
            },
            description: {
              vi: "Tự động chuẩn hóa bảng mã Unicode khi tìm kiếm từ khóa tiếng Việt trong tệp PDF, tìm kiếm chính xác mọi nguyên âm có dấu phức tạp.",
              en: "Normalizes Unicode forms (NFC/NFD) automatically during search queries, matching complex accented Vietnamese characters flawlessly.",
            },
          },
          {
            formula: "Inter & JetBrains Mono Fonts",
            title: {
              vi: "Phông chữ tối ưu không lỗi hiển thị",
              en: "Embedded Vietnamese typography fonts",
            },
            description: {
              vi: "Tích hợp sẵn bộ phông chữ Inter và JetBrains Mono hỗ trợ chuẩn xác toàn bộ bộ ký tự tiếng Việt, khắc phục triệt để lỗi hiển thị ô vuông (tofu).",
              en: "Bundled with Inter and JetBrains Mono typography fonts ensuring crisp Vietnamese text rendering without missing character glyphs.",
            },
          },
          {
            formula: 'OCR Language Code: "vi"',
            title: {
              vi: "Nhận diện OCR văn bản tiếng Việt",
              en: "Vietnamese OCR language model",
            },
            description: {
              vi: "Đăng ký mã ngôn ngữ tiếng Việt trong mô-đun OCR, sẵn sàng nhận diện và chuyển đổi tài liệu scan tiếng Việt sang văn bản có thể tìm kiếm.",
              en: "Pre-configured Vietnamese language engine for OCR modules to recognize scanned Vietnamese documents and papers.",
            },
          },
          {
            formula: "WiX v5 Windows Installer",
            title: {
              vi: "Bộ cài đặt Windows MSI & Bản Portable",
              en: "Windows MSI installer & Portable package",
            },
            description: {
              vi: "Đóng gói chuẩn MSI hỗ trợ tạo shortcut Desktop, Start Menu, tích hợp menu chuột phải 'Edit with PdfCraft' cùng bản Portable ZIP chạy ngay.",
              en: "Native WiX v5 MSI package registering Desktop & Start Menu shortcuts, Explorer context menu, alongside a standalone Portable zip.",
            },
          },
        ],
        techSpecs: [
          { label: "Phiên bản hiện tại", value: "v0.8.0-vn (Tháng 10/2026)" },
          { label: "Ngôn ngữ phát triển", value: "100% Pure Rust (Không runtime cồng kềnh)" },
          { label: "Giấy phép bản quyền", value: "Mã nguồn mở hoàn toàn (MIT / Apache-2.0)" },
          { label: "Hệ điều hành hỗ trợ", value: "Windows 10/11 (x64), Linux, macOS" },
          { label: "Dung lượng bộ cài", value: "~43.4 MB (MSI) / ~51.8 MB (Portable)" },
          { label: "Công nghệ OCR", value: "Mô-đun nhận dạng quang học hỗ trợ Tiếng Việt (vi)" },
          { label: "Tác giả bản Việt hóa", value: "Tô Đạt (datjpro)" },
          { label: "Dự án nền tảng gốc", value: "Storytold / ArtCraft (storytold/pdfcraft)" },
        ],
        downloads: [
          {
            name: "pdfcraft-vn-0.8.0-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "43.4 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut Desktop, Start Menu và menu ngữ cảnh chuột phải",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcuts and Explorer context menu",
            },
            url: "https://github.com/datjpro/pdfcraft-vn/releases/download/PDFCraft-v0.8.0-vn/pdfcraft-vn-0.8.0-windows-x64.msi",
          },
          {
            name: "pdfcraft-vn-0.8.0-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "51.8 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay file pdfcraft.exe mà không cần quyền Admin",
              en: "Standalone portable package requiring no installation, ready to run from any folder without admin rights",
            },
            url: "https://github.com/datjpro/pdfcraft-vn/releases/download/PDFCraft-v0.8.0-vn/pdfcraft-vn-0.8.0-windows-x64-portable.zip",
          },
        ],
      },
      en: {
        summary: [
          "PdfCraft is a modern, open-source PDF viewer and editor built from the ground up in pure Rust by Storytold / ArtCraft.",
          "Engineered for performance and confidentiality: launches in milliseconds, consumes minimal memory, and keeps documents 100% private and on-device.",
          "Provides a rich set of tabbed viewing modes, annotations (highlight, underline, text callouts, shapes), page rotation, splitting, and merging.",
          "Includes integrated Optical Character Recognition (OCR) to convert scanned pages and image-based PDFs into selectable, searchable text.",
          "Release v0.8.0-vn is localized and enhanced by Tô Đạt (datjpro) to deliver comprehensive Vietnamese localization, Unicode search normalization, and enhanced font support.",
        ],
        coreHighlights: [
          {
            title: "100% Pure Rust - Lightweight & Fast",
            desc: "Instant file opening, zero latency rendering even for hundreds-of-pages documents without memory bloat.",
          },
          {
            title: "Guaranteed Local Privacy",
            desc: "Zero tracking, zero cloud dependencies, and complete on-device document isolation.",
          },
          {
            title: "Full Annotation & Page Operations",
            desc: "Highlight, underline, annotate, extract, rotate, and combine pages seamlessly.",
          },
          {
            title: "Vietnamese OCR Support",
            desc: "High-accuracy text recognition for scanned Vietnamese paper records and images.",
          },
        ],
        vnFeaturesTitle: "Exclusive Enhancements in Vietnamese Edition (v0.8.0-vn)",
        vnFeatures: [
          {
            formula: "Preferences ▸ Language",
            title: {
              vi: "Giao diện thuần Việt 100%",
              en: "100% Vietnamese localization",
            },
            description: {
              vi: "Dịch thuật toàn diện hơn 2.600 mục từ và nhãn giao diện (menu, thanh công cụ, bảng điều khiển, hộp thoại thuộc tính, thông báo hệ thống). Tự động nhận diện ngôn ngữ máy vi-VN.",
              en: "Comprehensive localization of 2,600+ UI strings across all menus, toolbars, sidebars, and system dialogues. Automatically detects vi-VN locale.",
            },
          },
          {
            formula: "Ctrl + F (Normalized Search)",
            title: {
              vi: "Tìm kiếm tiếng Việt chuẩn hóa (NFC / NFD)",
              en: "Normalized Vietnamese Unicode search",
            },
            description: {
              vi: "Tự động chuẩn hóa bảng mã Unicode khi tìm kiếm từ khóa tiếng Việt trong tệp PDF, tìm kiếm chính xác mọi nguyên âm có dấu phức tạp.",
              en: "Normalizes Unicode forms (NFC/NFD) automatically during search queries, matching complex accented Vietnamese characters flawlessly.",
            },
          },
          {
            formula: "Inter & JetBrains Mono Fonts",
            title: {
              vi: "Phông chữ tối ưu không lỗi hiển thị",
              en: "Embedded Vietnamese typography fonts",
            },
            description: {
              vi: "Tích hợp sẵn bộ phông chữ Inter và JetBrains Mono hỗ trợ chuẩn xác toàn bộ bộ ký tự tiếng Việt, khắc phục triệt để lỗi hiển thị ô vuông (tofu).",
              en: "Bundled with Inter and JetBrains Mono typography fonts ensuring crisp Vietnamese text rendering without missing character glyphs.",
            },
          },
          {
            formula: 'OCR Language Code: "vi"',
            title: {
              vi: "Nhận diện OCR văn bản tiếng Việt",
              en: "Vietnamese OCR language model",
            },
            description: {
              vi: "Đăng ký mã ngôn ngữ tiếng Việt trong mô-đun OCR, sẵn sàng nhận diện và chuyển đổi tài liệu scan tiếng Việt sang văn bản có thể tìm kiếm.",
              en: "Pre-configured Vietnamese language engine for OCR modules to recognize scanned Vietnamese documents and papers.",
            },
          },
          {
            formula: "WiX v5 Windows Installer",
            title: {
              vi: "Bộ cài đặt Windows MSI & Bản Portable",
              en: "Windows MSI installer & Portable package",
            },
            description: {
              vi: "Đóng gói chuẩn MSI hỗ trợ tạo shortcut Desktop, Start Menu, tích hợp menu chuột phải 'Edit with PdfCraft' cùng bản Portable ZIP chạy ngay.",
              en: "Native WiX v5 MSI package registering Desktop & Start Menu shortcuts, Explorer context menu, alongside a standalone Portable zip.",
            },
          },
        ],
        techSpecs: [
          { label: "Current Version", value: "v0.8.0-vn (Oct 2026)" },
          { label: "Core Language", value: "100% Pure Rust (Zero heavy runtimes)" },
          { label: "Open Source License", value: "MIT / Apache-2.0" },
          { label: "Supported Platforms", value: "Windows 10/11 (x64), Linux, macOS" },
          { label: "Package Size", value: "~43.4 MB (MSI) / ~51.8 MB (Portable)" },
          { label: "OCR Technology", value: "OCR engine with pre-registered Vietnamese (vi) model" },
          { label: "Vietnamese Localization", value: "Tô Đạt (datjpro)" },
          { label: "Upstream Project", value: "Storytold / ArtCraft (storytold/pdfcraft)" },
        ],
        downloads: [
          {
            name: "pdfcraft-vn-0.8.0-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "43.4 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut Desktop, Start Menu và menu ngữ cảnh chuột phải",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcuts and Explorer context menu",
            },
            url: "https://github.com/datjpro/pdfcraft-vn/releases/download/PDFCraft-v0.8.0-vn/pdfcraft-vn-0.8.0-windows-x64.msi",
          },
          {
            name: "pdfcraft-vn-0.8.0-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "51.8 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay file pdfcraft.exe mà không cần quyền Admin",
              en: "Standalone portable package requiring no installation, ready to run from any folder without admin rights",
            },
            url: "https://github.com/datjpro/pdfcraft-vn/releases/download/PDFCraft-v0.8.0-vn/pdfcraft-vn-0.8.0-windows-x64-portable.zip",
          },
        ],
      },
    },
  },
  {
    id: "wordcraft-vn",
    name: "WordCraft - Phiên bản Tiếng Việt",
    iconUrl:
      "https://raw.githubusercontent.com/storytold/wordcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.wordcraft.png",
    category: "productivity",
    tagline: {
      vi: "Trình soạn thảo văn bản mã nguồn mở viết bằng 100% Rust thuần với bộ gõ Tiếng Việt tích hợp sẵn",
      en: "High-performance open-source word processor built in pure Rust with built-in Vietnamese IME",
    },
    description: {
      vi: "Dự án phần mềm soạn thảo văn bản mã nguồn mở clean-room viết bằng 100% Rust thuần thay thế Microsoft Word. Khởi chạy tức thì, siêu nhẹ, bảo mật tuyệt đối và tương thích định dạng .docx tiêu chuẩn. Bản Việt hóa v0.7.0-vn tích hợp sẵn bộ gõ tiếng Việt nội tại (Telex & VNI) không độ trễ, không xung đột Unikey/EVKey, kiểm tra ngữ pháp tiếng Việt, phím tắt định dạng và bộ cài đặt Windows MSI tối ưu.",
      en: "A blazingly fast, clean-room reimplementation of modern word processing built from scratch in pure Rust. Release v0.7.0-vn integrates a native zero-latency Vietnamese IME (Telex & VNI), Vietnamese grammar checking, smart diacritics placement, and standalone Windows MSI & Portable installers.",
    },
    recommendationReason: {
      vi: "Giải pháp soạn thảo văn bản độc lập, siêu tốc và bảo mật, tích hợp sẵn bộ gõ tiếng Việt mượt mà không xung đột phần mềm gõ bên ngoài.",
      en: "A lightweight, independent word processor featuring built-in native Vietnamese input methods and spell-check capabilities.",
    },
    platforms: ["Windows", "macOS", "Linux"],
    pricing: "open-source",
    url: "https://github.com/datjpro/wordcraft-vn/releases/tag/WordCraft-v0.7.0-vn",
    badge: {
      vi: "Bản Tiếng Việt v0.7.0",
      en: "Vietnamese Release v0.7.0",
    },
    featured: true,
    version: "v0.7.0-vn",
    license: "Mã nguồn mở (MIT / Apache-2.0)",
    githubUrl: "https://github.com/datjpro/wordcraft-vn",
    upstreamUrl: "https://github.com/storytold/wordcraft",
    techStack: ["Rust", "Native Vietnamese IME", "Telex / VNI", "Docx Engine", "HarfBuzz Typography"],
    featureTags: ["100% Rust", "Bộ gõ Telex & VNI", "Không xung đột Unikey", "Chính tả Tiếng Việt", "Tương thích DOCX"],
    overview: {
      vi: {
        summary: [
          "WordCraft là dự án trình soạn thảo văn bản mã nguồn mở (phong cách Microsoft Word) được phát triển hoàn toàn bằng ngôn ngữ lập trình hệ thống Rust bởi Storytold / ArtCraft.",
          "Được xây dựng với mục tiêu: Tốc độ phản hồi cực nhanh, an toàn bộ nhớ tuyệt đối, khởi chạy tức thì và không phụ thuộc vào các framework nặng nề như Electron hay JVM.",
          "Tương thích sâu với định dạng tài liệu Microsoft Word (.docx), hỗ trợ định dạng văn bản phong phú (Rich Text, bảng biểu, danh sách, hình ảnh, đầu trang và chân trang).",
          "Hệ thống định dạng và dàn trang mượt mà được hỗ trợ bởi HarfBuzz typography engine, hiển thị sắc nét các kiểu chữ và ký tự phức tạp.",
          "Bản phát hành v0.7.0-vn được Tô Đạt (datjpro) xây dựng và phát hành, tạo bước đột phá lớn khi tích hợp trực tiếp bộ gõ Tiếng Việt nội tại (Built-in IME) vào lõi ứng dụng, mang lại trải nghiệm gõ phím mượt mà, chính xác và không bao giờ bị nhảy ký tự.",
        ],
        coreHighlights: [
          {
            title: "100% Rust Thuần - Tốc Độ Cao & Ổn Định",
            desc: "Soạn thảo mượt mà với độ trễ phím gần như bằng 0 (Zero latency), bảo mật dữ liệu tuyệt đối.",
          },
          {
            title: "Tương Thích Hoàn Hảo Định Dạng .docx",
            desc: "Mở, chỉnh sửa và lưu các tài liệu Microsoft Word thông dụng mà vẫn giữ nguyên cấu trúc.",
          },
          {
            title: "Bộ Gõ Tiếng Việt Nội Tại (Built-in IME)",
            desc: "Gõ tiếng Việt trực tiếp ngay trong trình soạn thảo mà không cần cài thêm hoặc mở phần mềm bộ gõ bên ngoài.",
          },
          {
            title: "Kiểm Tra Ngữ Pháp & Chính Tả Tiếng Việt",
            desc: "Tự động phát hiện lỗi từ vựng và chính tả đặc thù trong văn bản tiếng Việt.",
          },
        ],
        vnFeaturesTitle: "Tính Năng Nổi Bật Trên Bản Việt Hóa v0.7.0-vn",
        vnFeatures: [
          {
            formula: "Kiểu gõ Telex & VNI tích hợp",
            title: {
              vi: "Bộ gõ tiếng Việt nội tại không xung đột",
              en: "Built-in Vietnamese IME (Telex & VNI)",
            },
            description: {
              vi: "Hỗ trợ 2 kiểu gõ thông dụng nhất là Telex và VNI ngay trong trình soạn thảo, hoàn toàn không bị xung đột, kẹt chữ hay nhảy dấu khi dùng chung với Unikey hay EVKey.",
              en: "Native in-editor IME supporting both Telex and VNI input styles with zero lag and no external software conflicts.",
            },
          },
          {
            formula: "Tự do đặt dấu thanh",
            title: {
              vi: "Bỏ dấu chuẩn chính tả tiếng Việt thông minh",
              en: "Smart Vietnamese diacritics placement",
            },
            description: {
              vi: "Tự động nhận diện và ghép dấu các nguyên âm đôi/ba (ươ, ưa, òa, oè...), cho phép bỏ dấu thanh tự do ở bất kỳ vị trí nào của từ.",
              en: "Intelligent diacritic logic accurately placing accents on compound vowels with flexible late-accent positioning.",
            },
          },
          {
            formula: "Tùy chọn: Dấu mới (òa) vs Cổ điển (oà)",
            title: {
              vi: "Tùy biến quy tắc bỏ dấu thanh hiện đại / truyền thống",
              en: "Modern vs. traditional tone mark options",
            },
            description: {
              vi: "Linh hoạt lựa chọn kiểu bỏ dấu thanh mới (chuẩn báo chí, khoa học) hoặc kiểu truyền thống theo quy chuẩn của từng cơ quan, trường học.",
              en: "Customizable tone mark conventions matching modern journalistic style or classic academic publishing rules.",
            },
          },
          {
            formula: "Status Bar & Menu File ▸ Options",
            title: {
              vi: "Bật tắt nhanh bộ gõ trên thanh trạng thái",
              en: "Quick toggle via status bar & settings",
            },
            description: {
              vi: "Chuyển đổi tức thì giữa chế độ gõ Tiếng Việt (Telex/VNI) và Tiếng Anh chỉ với một cú nhấp chuột trên thanh trạng thái phía dưới màn hình.",
              en: "Instant one-click switching between Vietnamese (Telex/VNI) and English modes directly from the bottom status bar.",
            },
          },
          {
            formula: "WiX v5 Windows Installer",
            title: {
              vi: "Gói cài đặt Windows MSI & Portable tối ưu",
              en: "Windows MSI installer & Portable package",
            },
            description: {
              vi: "Bộ cài đặt chuẩn .msi tự tạo lối tắt Start Menu, Desktop và liên kết tệp .docx. Nhúng sẵn C-Runtime tĩnh không cần cài Visual C++ Redistributable.",
              en: "Official .msi package associating .docx files with static C-Runtime embedded, plus a standalone Portable ZIP.",
            },
          },
        ],
        techSpecs: [
          { label: "Phiên bản hiện tại", value: "v0.7.0-vn (Tháng 10/2026)" },
          { label: "Ngôn ngữ phát triển", value: "100% Pure Rust (Không runtime cồng kềnh)" },
          { label: "Giấy phép bản quyền", value: "Mã nguồn mở hoàn toàn (MIT / Apache-2.0)" },
          { label: "Hệ điều hành hỗ trợ", value: "Windows 10/11 (x64), Linux, macOS" },
          { label: "Dung lượng bộ cài", value: "~28.9 MB (MSI) / ~36.9 MB (Portable)" },
          { label: "Engine bộ gõ", value: "Vietnamese IME Engine nội tại (Rust)" },
          { label: "Tác giả bản Việt hóa", value: "Tô Đạt (datjpro)" },
          { label: "Dự án nền tảng gốc", value: "Storytold / ArtCraft (storytold/wordcraft)" },
        ],
        downloads: [
          {
            name: "wordcraft-0.7.0-vn-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "28.9 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut Desktop, Start Menu và liên kết tệp .docx",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcuts and .docx file associations",
            },
            url: "https://github.com/datjpro/wordcraft-vn/releases/download/WordCraft-v0.7.0-vn/wordcraft-0.7.0-vn-windows-x64.msi",
          },
          {
            name: "wordcraft-0.7.0-vn-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "36.9 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay file wordcraft.exe mà không cần quyền Admin",
              en: "Standalone portable package requiring no installation, ready to run from any folder without admin rights",
            },
            url: "https://github.com/datjpro/wordcraft-vn/releases/download/WordCraft-v0.7.0-vn/wordcraft-0.7.0-vn-windows-x64-portable.zip",
          },
        ],
      },
      en: {
        summary: [
          "WordCraft is an open-source, clean-room reimplementation of Microsoft Word, written entirely in pure Rust by Storytold / ArtCraft.",
          "Engineered for blazingly fast typing responsiveness, memory safety, and zero garbage collection hitches without relying on Electron or JVM.",
          "Provides native Microsoft Word (.docx) support, rich formatting, tables, lists, images, headers, footers, and complex multi-page layouts.",
          "Powered by HarfBuzz typography rendering engine for crisp layout fidelity and international font features.",
          "Release v0.7.0-vn is localized and enhanced by Tô Đạt (datjpro), featuring a revolutionary built-in Vietnamese IME directly inside the application core.",
        ],
        coreHighlights: [
          {
            title: "100% Pure Rust - High Performance",
            desc: "Zero-latency typing responsiveness with guaranteed memory safety and data privacy.",
          },
          {
            title: "Seamless .docx Compatibility",
            desc: "Open, edit, and save standard Microsoft Word documents while preserving rich formatting.",
          },
          {
            title: "Native Built-in Vietnamese IME",
            desc: "Type Vietnamese directly inside the document without running external IME tools.",
          },
          {
            title: "Vietnamese Grammar & Spell Check",
            desc: "Automatic spelling and grammar analysis tailored for Vietnamese morphology.",
          },
        ],
        vnFeaturesTitle: "Exclusive Enhancements in Vietnamese Edition (v0.7.0-vn)",
        vnFeatures: [
          {
            formula: "Built-in Telex & VNI",
            title: {
              vi: "Bộ gõ tiếng Việt nội tại không xung đột",
              en: "Built-in Vietnamese IME (Telex & VNI)",
            },
            description: {
              vi: "Hỗ trợ 2 kiểu gõ thông dụng nhất là Telex và VNI ngay trong trình soạn thảo, hoàn toàn không bị xung đột, kẹt chữ hay nhảy dấu khi dùng chung với Unikey hay EVKey.",
              en: "Native in-editor IME supporting both Telex and VNI input styles with zero lag and no external software conflicts.",
            },
          },
          {
            formula: "Smart diacritics placement",
            title: {
              vi: "Bỏ dấu chuẩn chính tả tiếng Việt thông minh",
              en: "Smart Vietnamese diacritics placement",
            },
            description: {
              vi: "Tự động nhận diện và ghép dấu các nguyên âm đôi/ba (ươ, ưa, òa, oè...), cho phép bỏ dấu thanh tự do ở bất kỳ vị trí nào của từ.",
              en: "Intelligent diacritic logic accurately placing accents on compound vowels with flexible late-accent positioning.",
            },
          },
          {
            formula: "Modern vs Traditional tone marks",
            title: {
              vi: "Tùy biến quy tắc bỏ dấu thanh hiện đại / truyền thống",
              en: "Modern vs. traditional tone mark options",
            },
            description: {
              vi: "Linh hoạt lựa chọn kiểu bỏ dấu thanh mới (chuẩn báo chí, khoa học) hoặc kiểu truyền thống theo quy chuẩn của từng cơ quan, trường học.",
              en: "Customizable tone mark conventions matching modern journalistic style or classic academic publishing rules.",
            },
          },
          {
            formula: "Status Bar & Menu File ▸ Options",
            title: {
              vi: "Bật tắt nhanh bộ gõ trên thanh trạng thái",
              en: "Quick toggle via status bar & settings",
            },
            description: {
              vi: "Chuyển đổi tức thì giữa chế độ gõ Tiếng Việt (Telex/VNI) và Tiếng Anh chỉ với một cú nhấp chuột trên thanh trạng thái phía dưới màn hình.",
              en: "Instant one-click switching between Vietnamese (Telex/VNI) and English modes directly from the bottom status bar.",
            },
          },
          {
            formula: "WiX v5 Windows Installer",
            title: {
              vi: "Gói cài đặt Windows MSI & Portable tối ưu",
              en: "Windows MSI installer & Portable package",
            },
            description: {
              vi: "Bộ cài đặt chuẩn .msi tự tạo lối tắt Start Menu, Desktop và liên kết tệp .docx. Nhúng sẵn C-Runtime tĩnh không cần cài Visual C++ Redistributable.",
              en: "Official .msi package associating .docx files with static C-Runtime embedded, plus a standalone Portable ZIP.",
            },
          },
        ],
        techSpecs: [
          { label: "Current Version", value: "v0.7.0-vn (Oct 2026)" },
          { label: "Core Language", value: "100% Pure Rust (Zero heavy runtimes)" },
          { label: "Open Source License", value: "MIT / Apache-2.0" },
          { label: "Supported Platforms", value: "Windows 10/11 (x64), Linux, macOS" },
          { label: "Package Size", value: "~28.9 MB (MSI) / ~36.9 MB (Portable)" },
          { label: "IME Engine", value: "Built-in pure Rust Vietnamese IME engine" },
          { label: "Vietnamese Localization", value: "Tô Đạt (datjpro)" },
          { label: "Upstream Project", value: "Storytold / ArtCraft (storytold/wordcraft)" },
        ],
        downloads: [
          {
            name: "wordcraft-0.7.0-vn-windows-x64.msi",
            label: {
              vi: "Bản Cài Đặt Windows (.msi)",
              en: "Windows Installer (.msi)",
            },
            size: "28.9 MB",
            type: "Windows x64 Installer",
            desc: {
              vi: "Gói cài đặt tự động cho Windows 10/11 64-bit, tự tạo shortcut Desktop, Start Menu và liên kết tệp .docx",
              en: "Standard installer for Windows 10/11 64-bit with desktop shortcuts and .docx file associations",
            },
            url: "https://github.com/datjpro/wordcraft-vn/releases/download/WordCraft-v0.7.0-vn/wordcraft-0.7.0-vn-windows-x64.msi",
          },
          {
            name: "wordcraft-0.7.0-vn-windows-x64-portable.zip",
            label: {
              vi: "Bản Portable Chạy Ngay (.zip)",
              en: "Windows Portable (.zip)",
            },
            size: "36.9 MB",
            type: "Windows x64 Portable",
            desc: {
              vi: "Bản di động không cần cài đặt, chỉ cần giải nén và chạy ngay file wordcraft.exe mà không cần quyền Admin",
              en: "Standalone portable package requiring no installation, ready to run from any folder without admin rights",
            },
            url: "https://github.com/datjpro/wordcraft-vn/releases/download/WordCraft-v0.7.0-vn/wordcraft-0.7.0-vn-windows-x64-portable.zip",
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
