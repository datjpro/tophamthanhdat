const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGUAGES = ["en", "vi"];

const UI_COPY = {
  shared: {
    en: {
      brandSubtitle: "Software Portfolio",
      menuLabel: "Toggle menu",
      primaryNavLabel: "Primary",
      switchAria: "Switch language",
      languageNames: { en: "English", vi: "Vietnamese" },
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },
    },
    vi: {
      brandSubtitle: "Hồ sơ phần mềm",
      menuLabel: "Mở menu",
      primaryNavLabel: "Điều hướng chính",
      switchAria: "Chuyển ngôn ngữ",
      languageNames: { en: "Tiếng Anh", vi: "Tiếng Việt" },
      nav: {
        home: "Trang chủ",
        projects: "Dự án",
        about: "Giới thiệu",
        contact: "Liên hệ",
      },
    },
  },
  home: {
    en: {
      metaTitle: "To Pham Thanh Dat | Portfolio",
      metaDescription:
        "Portfolio of To Pham Thanh Dat, software developer focused on web, mobile, automation, and blockchain products.",
      eyebrow: "Graphic engineering portfolio / 2026",
      heroSub:
        "Software developer building practical products across web, mobile, automation, and blockchain. Strong focus on clean architecture, readable systems, and scalable delivery.",
      ctaPrimary: "Explore projects",
      ctaSecondary: "GitHub profile",
      posterKicker: "Portfolio Direction",
      featuredTitle: "Featured Projects",
      featuredText:
        "Selected works from GitHub datjpro profile. Each project card links to a focused case-study page with problem, solution, and impact.",
      languageTitle: "Language Footprint",
      languageText:
        "Language distribution from public repositories, highlighting a practical full-stack and cross-domain engineering path.",
      focusTitle: "Core Focus",
      focusText:
        "The portfolio is structured around software outcomes, not only code. Design direction follows an editorial and poster-like visual style.",
      processTitle: "Execution Process",
      processText:
        "A simple and repeatable workflow for project delivery from idea to stable release.",
      statLabels: ["Public repositories", "Followers", "Following", "GitHub since"],
      focusCards: [
        ["Product Thinking", "Build for real workflows first, then optimize technical depth and scale."],
        ["System Clarity", "Prefer modular architecture and explicit boundaries between data, logic, and interface."],
        ["Delivery Rhythm", "Iterate quickly with visible milestones, then harden with testing and cleanup."],
      ],
      processLabels: ["Define", "Design", "Build", "Ship"],
      processBodies: [
        "Frame the user problem and outcome metrics.",
        "Sketch data flow, interfaces, and architecture boundaries.",
        "Implement modularly and keep code paths traceable.",
        "Document, validate, and prepare future iterations.",
      ],
      syncPrefix: "Dataset sync",
    },
    vi: {
      metaTitle: "To Pham Thanh Dat | Portfolio",
      metaDescription:
        "Portfolio của To Pham Thanh Dat, lập trình viên tập trung vào web, mobile, tự động hóa và blockchain.",
      eyebrow: "Portfolio kỹ thuật đồ họa / 2026",
      heroSub:
        "Lập trình viên xây dựng các sản phẩm thực dụng trên web, mobile, tự động hóa và blockchain. Tập trung vào kiến trúc sạch, hệ thống dễ đọc và khả năng mở rộng khi bàn giao.",
      ctaPrimary: "Xem dự án",
      ctaSecondary: "Hồ sơ GitHub",
      posterKicker: "Định hướng portfolio",
      featuredTitle: "Dự án nổi bật",
      featuredText:
        "Các dự án được chọn từ hồ sơ GitHub datjpro. Mỗi thẻ dự án dẫn tới trang case study tập trung vào bài toán, giải pháp và tác động.",
      languageTitle: "Dấu ấn ngôn ngữ",
      languageText:
        "Phân bố ngôn ngữ từ repository công khai, cho thấy lộ trình kỹ thuật full-stack và đa lĩnh vực khá thực dụng.",
      focusTitle: "Trọng tâm cốt lõi",
      focusText:
        "Portfolio được tổ chức xoay quanh kết quả phần mềm chứ không chỉ là mã nguồn. Hướng thiết kế mang cảm hứng biên tập và poster.",
      processTitle: "Quy trình triển khai",
      processText:
        "Một workflow đơn giản và có thể lặp lại để đưa dự án từ ý tưởng đến bản phát hành ổn định.",
      statLabels: ["Repository công khai", "Người theo dõi", "Đang theo dõi", "GitHub từ"],
      focusCards: [
        ["Tư duy sản phẩm", "Ưu tiên giải quyết quy trình thực trước, rồi mới tối ưu chiều sâu kỹ thuật và khả năng mở rộng."],
        ["Rõ ràng hệ thống", "Ưu tiên kiến trúc module và ranh giới minh bạch giữa dữ liệu, logic và giao diện."],
        ["Nhịp độ bàn giao", "Lặp nhanh với các cột mốc dễ nhìn thấy, rồi siết chất lượng bằng kiểm thử và dọn dẹp."],
      ],
      processLabels: ["Xác định", "Thiết kế", "Xây dựng", "Bàn giao"],
      processBodies: [
        "Đóng khung bài toán người dùng và chỉ số đầu ra cần đạt.",
        "Phác thảo luồng dữ liệu, giao diện và ranh giới kiến trúc.",
        "Triển khai theo module và giữ đường đi mã nguồn dễ truy vết.",
        "Tài liệu hóa, kiểm tra và chuẩn bị cho các vòng lặp tiếp theo.",
      ],
      syncPrefix: "Đồng bộ dữ liệu",
    },
  },
  projects: {
    en: {
      metaTitle: "Projects | To Pham Thanh Dat",
      metaDescription:
        "Project archive for To Pham Thanh Dat: automation, web platform, blockchain, mobile, and desktop software work.",
      eyebrow: "Project library",
      heroTitle: ["PROJECT", "ARCHIVE"],
      heroSub:
        "Filter by category and search by keyword to quickly navigate the portfolio. Every item links to a dedicated case study page.",
      searchPlaceholder: "Search by title, stack, or category",
      searchLabel: "Search projects",
      listTitle: "All Projects",
      countShown: (count) => `${count} projects shown`,
      noMatchTitle: "No match",
      noMatchText: "Try another filter or a shorter keyword.",
      allFilter: "All",
      footerLead: "Updated from GitHub dataset",
    },
    vi: {
      metaTitle: "Dự án | To Pham Thanh Dat",
      metaDescription:
        "Kho dự án của To Pham Thanh Dat: tự động hóa, nền tảng web, blockchain, mobile và desktop.",
      eyebrow: "Thư viện dự án",
      heroTitle: ["KHO", "DỰ ÁN"],
      heroSub:
        "Lọc theo danh mục và tìm theo từ khóa để điều hướng portfolio nhanh hơn. Mỗi mục đều dẫn đến một trang case study riêng.",
      searchPlaceholder: "Tìm theo tên, công nghệ hoặc danh mục",
      searchLabel: "Tìm dự án",
      listTitle: "Tất cả dự án",
      countShown: (count) => `${count} dự án hiển thị`,
      noMatchTitle: "Không tìm thấy",
      noMatchText: "Hãy thử bộ lọc khác hoặc từ khóa ngắn hơn.",
      allFilter: "Tất cả",
      footerLead: "Cập nhật từ dữ liệu GitHub",
    },
  },
  about: {
    en: {
      metaTitle: "About | To Pham Thanh Dat",
      metaDescription:
        "About page of To Pham Thanh Dat with skill map, engineering profile, and project context.",
      eyebrow: "About",
      heroTitle: ["ENGINEER", "PROFILE"],
      badge: "Software Developer",
      portraitText:
        "Building software products with a practical mindset and clear architecture. Career direction: solution architecture in web and blockchain ecosystems.",
      directionTitle: "Professional Direction",
      directionText:
        "Software engineering student (HUTECH) with hands-on work in full-stack development, automation workflows, and blockchain-based products. Focused on building useful systems that can scale beyond classroom prototypes.",
      repoText: (count) => `Public GitHub repositories: ${count}. Work spans web applications, desktop tools, mobile products, and infrastructure experiments.`,
      skillTitle: "Skill Cloud",
      skillText: "Technology tags aggregated from selected project stacks.",
      languageTitle: "Language Distribution",
      languageText: "Repository language count snapshot from March 5, 2026.",
      timelineTitle: "Education and Timeline",
      timelineText: "Milestones that shape current product and engineering focus.",
      timelineLabels: ["2022 - 2026 (expected)", "2025", "2026"],
      timelineBodies: [
        "Software Engineering at HUTECH University.",
        "Expanded into blockchain and cloud/security-flavored system design projects.",
        "Increased focus on portfolio quality, architecture storytelling, and product-grade project presentation.",
      ],
      footerLead: "Design language: editorial + poster-inspired",
    },
    vi: {
      metaTitle: "Giới thiệu | To Pham Thanh Dat",
      metaDescription:
        "Trang giới thiệu của To Pham Thanh Dat với bản đồ kỹ năng, hồ sơ kỹ thuật và ngữ cảnh dự án.",
      eyebrow: "Giới thiệu",
      heroTitle: ["HỒ SƠ", "KỸ SƯ"],
      badge: "Lập trình viên phần mềm",
      portraitText:
        "Xây dựng sản phẩm phần mềm với tư duy thực dụng và kiến trúc rõ ràng. Định hướng nghề nghiệp: solution architecture trong hệ sinh thái web và blockchain.",
      directionTitle: "Định hướng chuyên môn",
      directionText:
        "Sinh viên Kỹ thuật phần mềm (HUTECH) với trải nghiệm thực hành trong phát triển full-stack, quy trình tự động hóa và sản phẩm blockchain. Tập trung xây dựng các hệ thống hữu ích có thể mở rộng vượt ra ngoài prototype trong lớp học.",
      repoText: (count) => `Repository GitHub công khai: ${count}. Công việc trải dài từ ứng dụng web, công cụ desktop, sản phẩm mobile đến các thử nghiệm hạ tầng.`,
      skillTitle: "Đám mây kỹ năng",
      skillText: "Các nhãn công nghệ được tổng hợp từ stack của những dự án đã chọn.",
      languageTitle: "Phân bố ngôn ngữ",
      languageText: "Ảnh chụp số lượng ngôn ngữ của repository tính đến ngày 05/03/2026.",
      timelineTitle: "Học tập và cột mốc",
      timelineText: "Những mốc quan trọng định hình định hướng sản phẩm và kỹ thuật hiện tại.",
      timelineLabels: ["2022 - 2026 (dự kiến)", "2025", "2026"],
      timelineBodies: [
        "Ngành Kỹ thuật phần mềm tại Đại học HUTECH.",
        "Mở rộng sang các dự án thiết kế hệ thống theo hướng blockchain và cloud/security.",
        "Tăng tập trung vào chất lượng portfolio, khả năng kể chuyện kiến trúc và cách trình bày dự án ở mức sản phẩm.",
      ],
      footerLead: "Ngôn ngữ thiết kế: cảm hứng biên tập + poster",
    },
  },
  contact: {
    en: {
      metaTitle: "Contact | To Pham Thanh Dat",
      metaDescription:
        "Contact page for collaboration and project discussions with To Pham Thanh Dat.",
      eyebrow: "Contact",
      heroTitle: ["LET US", "BUILD"],
      heroSub:
        "Open to software collaboration, freelance builds, and learning-focused engineering projects. Strong interest in web platform design, automation, and blockchain product infrastructure.",
      cardTitles: ["GitHub", "Social", "Project Scope"],
      cardBodies: [
        "Explore full project history, repositories, and commit activity in public profile.",
        "Direct message channel for quick discussions and portfolio conversations.",
      ],
      summary: (count) => `${count} public repositories and active multi-domain projects.`,
      projectArchive: "see project archive",
      workingTitle: "Working Style",
      workingText: "Typical collaboration flow for new software projects.",
      processLabels: ["Brief", "Scope", "Build", "Handover"],
      processBodies: [
        "Collect goals, constraints, and user outcomes.",
        "Define architecture and first delivery milestones.",
        "Ship iterative modules and validate core workflows.",
        "Provide documentation and future roadmap options.",
      ],
      footerLead: "Available for collaboration",
    },
    vi: {
      metaTitle: "Liên hệ | To Pham Thanh Dat",
      metaDescription:
        "Trang liên hệ để trao đổi hợp tác và thảo luận dự án với To Pham Thanh Dat.",
      eyebrow: "Liên hệ",
      heroTitle: ["CÙNG", "XÂY DỰNG"],
      heroSub:
        "Sẵn sàng cho hợp tác phần mềm, dự án freelance và các dự án kỹ thuật thiên về học hỏi. Quan tâm mạnh đến thiết kế nền tảng web, tự động hóa và hạ tầng sản phẩm blockchain.",
      cardTitles: ["GitHub", "Mạng xã hội", "Phạm vi dự án"],
      cardBodies: [
        "Xem toàn bộ lịch sử dự án, repository và hoạt động commit trên hồ sơ công khai.",
        "Kênh nhắn tin trực tiếp để trao đổi nhanh về dự án và portfolio.",
      ],
      summary: (count) => `${count} repository công khai cùng nhiều dự án đang hoạt động ở nhiều lĩnh vực.`,
      projectArchive: "xem kho dự án",
      workingTitle: "Cách làm việc",
      workingText: "Luồng cộng tác điển hình cho các dự án phần mềm mới.",
      processLabels: ["Trao đổi", "Phạm vi", "Xây dựng", "Bàn giao"],
      processBodies: [
        "Thu thập mục tiêu, ràng buộc và kết quả người dùng mong muốn.",
        "Xác định kiến trúc và các mốc bàn giao đầu tiên.",
        "Phát hành module theo từng vòng lặp và xác thực workflow cốt lõi.",
        "Cung cấp tài liệu và gợi ý lộ trình phát triển tiếp theo.",
      ],
      footerLead: "Sẵn sàng hợp tác",
    },
  },
  project: {
    en: {
      metaTitle: "Project Detail | To Pham Thanh Dat",
      metaDescription: "Project case study page for To Pham Thanh Dat portfolio.",
      pageEyebrow: "Project case study",
      relatedTitle: "Related Work",
      relatedText: "More projects from the same GitHub portfolio dataset.",
      caseStudyPrefix: "Case Study",
      openRepo: "Open Repository",
      backToProjects: "Back to Projects",
      viewCase: "View case",
      labels: ["Problem", "Solution", "Impact", "Highlights"],
      footerLead: "Case studies generated from public repositories",
    },
    vi: {
      metaTitle: "Chi tiết dự án | To Pham Thanh Dat",
      metaDescription: "Trang case study dự án trong portfolio của To Pham Thanh Dat.",
      pageEyebrow: "Case study dự án",
      relatedTitle: "Dự án liên quan",
      relatedText: "Thêm các dự án khác từ cùng bộ dữ liệu GitHub portfolio.",
      caseStudyPrefix: "Case Study",
      openRepo: "Mở repository",
      backToProjects: "Quay lại dự án",
      viewCase: "Xem case study",
      labels: ["Bài toán", "Giải pháp", "Tác động", "Điểm nổi bật"],
      footerLead: "Case study được tạo từ các repository công khai",
    },
  },
};

(function () {
  const data = window.portfolioData;
  if (!data) return;

  const pageRoot =
    document.querySelector("[data-portfolio-page]") || document.querySelector("[data-page]");
  const pageValue =
    (pageRoot && (pageRoot.dataset.portfolioPage || pageRoot.dataset.page)) ||
    document.body.dataset.page ||
    "home";

  const state = {
    page: pageValue,
    lang: getInitialLanguage(),
  };

  setCurrentYear();
  initMenuToggle();
  initLanguageToggle(state, data);
  setActiveNav(state.page);
  applyLanguage(state, data);
})();

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch (error) {
    void error;
  }

  const browserLanguage = (navigator.language || "").toLowerCase();
  return browserLanguage.startsWith("vi") ? "vi" : DEFAULT_LANGUAGE;
}

function persistLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    void error;
  }
}

function getSharedCopy(lang) {
  return UI_COPY.shared[lang] || UI_COPY.shared[DEFAULT_LANGUAGE];
}

function getPageCopy(page, lang) {
  const pageCopy = UI_COPY[page] || UI_COPY.home;
  return pageCopy[lang] || pageCopy[DEFAULT_LANGUAGE];
}

function initLanguageToggle(state, data) {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!header || header.querySelector(".lang-switch")) return;

  const switcher = document.createElement("div");
  switcher.className = "lang-switch";
  switcher.setAttribute("role", "group");
  switcher.innerHTML = `
    <button type="button" data-lang="en">EN</button>
    <button type="button" data-lang="vi">VI</button>
  `;

  header.insertBefore(switcher, menuToggle || null);

  switcher.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;

    const nextLang = target.dataset.lang || DEFAULT_LANGUAGE;
    if (!SUPPORTED_LANGUAGES.includes(nextLang) || nextLang === state.lang) return;

    state.lang = nextLang;
    persistLanguage(nextLang);
    applyLanguage(state, data);
  });
}

function syncLanguageToggle(lang) {
  const switcher = document.querySelector(".lang-switch");
  if (!switcher) return;

  const copy = getSharedCopy(lang);
  switcher.setAttribute("aria-label", copy.switchAria);

  switcher.querySelectorAll("button[data-lang]").forEach((button) => {
    const buttonLang = button.getAttribute("data-lang") || DEFAULT_LANGUAGE;
    const active = buttonLang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.setAttribute("title", copy.languageNames[buttonLang] || buttonLang.toUpperCase());
  });
}

function applyLanguage(state, data) {
  document.documentElement.lang = state.lang;
  document.body.dataset.lang = state.lang;
  syncLanguageToggle(state.lang);
  applySharedTranslations(state.lang);
  renderByPage(state.page, data, state.lang);
}

function setCurrentYear() {
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initMenuToggle() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const open = header.getAttribute("data-open") === "true";
    header.setAttribute("data-open", open ? "false" : "true");
  });
}

function setActiveNav(page) {
  document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

function applySharedTranslations(lang) {
  const copy = getSharedCopy(lang);
  setText(".brand small", copy.brandSubtitle);
  setAttribute(".menu-toggle", "aria-label", copy.menuLabel);
  setAttribute(".nav-links", "aria-label", copy.primaryNavLabel);
  setText('.nav-links a[data-page="home"]', copy.nav.home);
  setText('.nav-links a[data-page="projects"]', copy.nav.projects);
  setText('.nav-links a[data-page="about"]', copy.nav.about);
  setText('.nav-links a[data-page="contact"]', copy.nav.contact);
}
function revealElements() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function renderByPage(page, data, lang) {
  switch (page) {
    case "home":
      renderHome(data, lang);
      break;
    case "projects":
      renderProjects(data, lang);
      break;
    case "project":
      renderProjectDetail(data, lang);
      break;
    case "about":
      renderAbout(data, lang);
      break;
    case "contact":
      renderContact(data, lang);
      break;
    default:
      break;
  }
}

function renderHome(data, lang) {
  const copy = getPageCopy("home", lang);
  const { profile, projects, featuredSlugs } = data;

  setPageMeta(copy.metaTitle, copy.metaDescription);
  setText(".hero .eyebrow", copy.eyebrow);
  setText(".hero-sub", copy.heroSub);
  setText(".poster-kicker", copy.posterKicker);
  setNodeListText(".stat-label", copy.statLabels);

  const heroButtons = document.querySelectorAll(".hero .hero-cta a");
  if (heroButtons[0]) heroButtons[0].textContent = copy.ctaPrimary;
  if (heroButtons[1]) heroButtons[1].textContent = copy.ctaSecondary;

  const sections = document.querySelectorAll(".page-shell > .section");
  setSectionHead(sections[0], copy.featuredTitle, copy.featuredText);
  setSectionHead(sections[1], copy.languageTitle, copy.languageText);
  setSectionHead(sections[2], copy.focusTitle, copy.focusText);
  setSectionHead(sections[3], copy.processTitle, copy.processText);

  document.querySelectorAll(".focus-card").forEach((card, index) => {
    const values = copy.focusCards[index];
    if (!values) return;
    const title = card.querySelector("h3");
    const body = card.querySelector("p");
    if (title) title.textContent = values[0];
    if (body) body.textContent = values[1];
  });

  setNodeListText(".process-list .process-label", copy.processLabels);
  setNodeListText(".process-list .process-text", copy.processBodies);

  const statMap = {
    repos: profile.stats.publicRepos,
    followers: profile.stats.followers,
    following: profile.stats.following,
    since: profile.stats.accountSince,
  };

  document.querySelectorAll("[data-stat]").forEach((el) => {
    const key = el.dataset.stat;
    if (key in statMap) {
      el.textContent = String(statMap[key]);
    }
  });

  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  const grid = document.getElementById("featured-grid");
  if (grid) {
    grid.innerHTML = featured.map((item) => projectCard(item, lang)).join("");
  }

  const languageBoard = document.getElementById("language-board");
  if (languageBoard) {
    languageBoard.innerHTML = profile.languageStats
      .slice(0, 6)
      .map(
        (language) =>
          `<article class="lang-item reveal"><strong>${escapeHtml(
            String(language.count)
          )}</strong><span>${escapeHtml(language.name)}</span></article>`
      )
      .join("");
  }

  const syncLabel = document.getElementById("sync-label");
  if (syncLabel) {
    syncLabel.textContent = `${copy.syncPrefix}: ${data.generatedAt}`;
  }

  revealElements();
}

function renderProjects(data, lang) {
  const copy = getPageCopy("projects", lang);
  const projects = data.projects;
  const filtersRoot = document.getElementById("project-filters");
  const grid = document.getElementById("project-grid");
  const count = document.getElementById("project-count");
  const input = document.getElementById("project-search");

  setPageMeta(copy.metaTitle, copy.metaDescription);
  setText(".page-shell > .section:first-child .eyebrow", copy.eyebrow);
  setNodeListText(".page-shell > .section:first-child .hero-title span", copy.heroTitle);
  setText(".page-shell > .section:first-child .hero-sub", copy.heroSub);
  setText(".project-list-head h2", copy.listTitle);
  setText(".site-footer .status-ok", copy.footerLead);

  if (!filtersRoot || !grid || !count || !input) return;

  input.placeholder = copy.searchPlaceholder;
  input.setAttribute("aria-label", copy.searchLabel);

  const categories = [copy.allFilter, ...new Set(projects.map((project) => project.category))];
  const state = {
    filter: copy.allFilter,
    query: input.value || "",
  };

  function applyFilters() {
    const query = state.query.trim().toLowerCase();
    const list = projects.filter((project) => {
      const byCategory = state.filter === copy.allFilter || project.category === state.filter;
      const text = [
        project.title,
        project.summary,
        project.language,
        project.category,
        ...(project.stack || []),
      ]
        .join(" ")
        .toLowerCase();
      const byQuery = !query || text.includes(query);
      return byCategory && byQuery;
    });

    count.textContent = copy.countShown(list.length);
    grid.innerHTML = list.length
      ? list.map((item) => projectCard(item, lang)).join("")
      : `<article class="panel reveal"><h3>${escapeHtml(copy.noMatchTitle)}</h3><p>${escapeHtml(copy.noMatchText)}</p></article>`;

    renderFilterPills();
    revealElements();
  }

  function renderFilterPills() {
    filtersRoot.innerHTML = categories
      .map((category) => {
        const active = category === state.filter ? "active" : "";
        return `<button class="chip ${active}" type="button" data-filter="${escapeAttr(category)}">${escapeHtml(category)}</button>`;
      })
      .join("");

    filtersRoot.querySelectorAll("button[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter || copy.allFilter;
        applyFilters();
      });
    });
  }

  input.oninput = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    state.query = target.value;
    applyFilters();
  };

  applyFilters();
}

function renderProjectDetail(data, lang) {
  const copy = getPageCopy("project", lang);
  const projects = data.projects;
  const root = document.getElementById("project-detail-root");
  const related = document.getElementById("related-grid");
  if (!root || !related || !projects.length) return;

  setPageMeta(copy.metaTitle, copy.metaDescription);
  setText(".page-shell > .section:first-child .eyebrow", copy.pageEyebrow);
  setSectionHead(document.querySelectorAll(".page-shell > .section")[1], copy.relatedTitle, copy.relatedText);
  setText(".site-footer > span:first-child", copy.footerLead);

  const url = new URL(window.location.href);
  const slug = url.searchParams.get("slug") || data.featuredSlugs[0] || projects[0].slug;
  const project = projects.find((item) => item.slug === slug) || projects[0];

  root.innerHTML = `
    <section class="detail-hero reveal">
      <div class="detail-head">
        <div>
          <p class="eyebrow">${escapeHtml(copy.caseStudyPrefix)} / ${escapeHtml(project.category)}</p>
          <h1 class="detail-title">${escapeHtml(project.title)}</h1>
          <p class="detail-sub">${escapeHtml(project.summary)}</p>
        </div>
        <span class="project-year">${escapeHtml(project.year)}</span>
      </div>
      <div class="project-tags" style="margin-top: 0.9rem;">
        ${(project.stack || []).map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="hero-cta" style="margin-top: 0.95rem;">
        <a class="btn" href="${escapeAttr(project.repo)}" target="_blank" rel="noreferrer noopener">${escapeHtml(copy.openRepo)}</a>
        <a class="btn btn-ghost" href="projects.html">${escapeHtml(copy.backToProjects)}</a>
      </div>
    </section>

    <section class="detail-grid">
      <article class="panel reveal">
        <h3>${escapeHtml(copy.labels[0])}</h3>
        <p>${escapeHtml(project.problem)}</p>
      </article>
      <article class="panel reveal">
        <h3>${escapeHtml(copy.labels[1])}</h3>
        <p>${escapeHtml(project.solution)}</p>
      </article>
      <article class="panel reveal">
        <h3>${escapeHtml(copy.labels[2])}</h3>
        <p>${escapeHtml(project.impact)}</p>
      </article>
      <article class="panel reveal">
        <h3>${escapeHtml(copy.labels[3])}</h3>
        <ul>
          ${(project.highlights || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </section>
  `;

  const relatedItems = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  related.innerHTML = relatedItems.map((item) => projectCard(item, lang)).join("");

  revealElements();
}
function renderAbout(data, lang) {
  const copy = getPageCopy("about", lang);
  const skillsRoot = document.getElementById("skill-cloud");
  const langRoot = document.getElementById("about-language-board");

  setPageMeta(copy.metaTitle, copy.metaDescription);
  setText(".page-shell > .section:first-child .eyebrow", copy.eyebrow);
  setNodeListText(".page-shell > .section:first-child .hero-title span", copy.heroTitle);
  setText(".portrait-badge", copy.badge);
  setText(".about-grid .portrait .muted", copy.portraitText);
  setText(".about-grid .panel h3", copy.directionTitle);
  setText(".about-grid .panel p:nth-of-type(1)", copy.directionText);
  setText(".about-grid .panel p:nth-of-type(2)", copy.repoText(data.profile.stats.publicRepos));

  const sections = document.querySelectorAll(".page-shell > .section");
  setSectionHead(sections[2], copy.skillTitle, copy.skillText);
  setSectionHead(sections[3], copy.languageTitle, copy.languageText);
  setSectionHead(sections[4], copy.timelineTitle, copy.timelineText);
  setNodeListText(".timeline strong", copy.timelineLabels);
  setNodeListText(".timeline p", copy.timelineBodies);
  setText(".site-footer > span:first-child", copy.footerLead);

  const allSkills = Array.from(new Set(data.projects.flatMap((project) => project.stack || []))).slice(0, 20);

  if (skillsRoot) {
    skillsRoot.innerHTML = allSkills
      .map((skill) => `<span class="skill-chip reveal">${escapeHtml(skill)}</span>`)
      .join("");
  }

  if (langRoot) {
    langRoot.innerHTML = data.profile.languageStats
      .map(
        (item) =>
          `<article class="lang-item reveal"><strong>${escapeHtml(String(item.count))}</strong><span>${escapeHtml(item.name)}</span></article>`
      )
      .join("");
  }

  revealElements();
}

function renderContact(data, lang) {
  const copy = getPageCopy("contact", lang);

  setPageMeta(copy.metaTitle, copy.metaDescription);
  setText(".page-shell > .section:first-child .eyebrow", copy.eyebrow);
  setNodeListText(".page-shell > .section:first-child .hero-title span", copy.heroTitle);
  setText(".page-shell > .section:first-child .hero-sub", copy.heroSub);
  setText(".contact-grid .contact-card:nth-child(1) h3", copy.cardTitles[0]);
  setText(".contact-grid .contact-card:nth-child(2) h3", copy.cardTitles[1]);
  setText(".contact-grid .contact-card:nth-child(3) h3", copy.cardTitles[2]);
  setText(".contact-grid .contact-card:nth-child(1) p", copy.cardBodies[0]);
  setText(".contact-grid .contact-card:nth-child(2) p", copy.cardBodies[1]);
  setText(".contact-grid .contact-card:nth-child(3) a", copy.projectArchive);
  setSectionHead(document.querySelectorAll(".page-shell > .section")[2], copy.workingTitle, copy.workingText);
  setNodeListText(".process-list .process-label", copy.processLabels);
  setNodeListText(".process-list .process-text", copy.processBodies);
  setText(".site-footer > span:first-child", copy.footerLead);

  const root = document.getElementById("contact-summary");
  if (root) {
    root.textContent = copy.summary(data.profile.stats.publicRepos);
  }

  revealElements();
}

function projectCard(project, lang) {
  const copy = getPageCopy("project", lang);
  const tags = (project.stack || []).slice(0, 3);

  return `
    <article class="project-card reveal">
      <div class="project-card-top">
        <div>
          <h3>${escapeHtml(project.title)}</h3>
          <div class="project-meta">${escapeHtml(project.category)} / ${escapeHtml(project.language)}</div>
        </div>
        <span class="project-year">${escapeHtml(project.year)}</span>
      </div>
      <p class="project-summary">${escapeHtml(trim(project.summary, 152))}</p>
      <div class="project-tags">
        ${tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="hero-cta" style="margin-top: 0.75rem;">
        <a class="btn btn-ghost" href="/portfolio/project?slug=${encodeURIComponent(project.slug)}">${escapeHtml(copy.viewCase)}</a>
      </div>
    </article>
  `;
}

function setSectionHead(section, title, text) {
  if (!section) return;
  const heading = section.querySelector(".section-head h2");
  const body = section.querySelector(".section-head p");
  if (heading) heading.textContent = title;
  if (body) body.textContent = text;
}

function setPageMeta(title, description) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", description);
  }
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setAttribute(selector, name, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(name, value);
  }
}

function setNodeListText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] == null) return;
    element.textContent = values[index];
  });
}

function trim(text, max) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}...`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}
