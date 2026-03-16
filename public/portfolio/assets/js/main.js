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
      brandSubtitle: "H? so ph?n m?m",
      menuLabel: "M? menu",
      primaryNavLabel: "Ði?u hu?ng chính",
      switchAria: "Chuy?n ngôn ng?",
      languageNames: { en: "Ti?ng Anh", vi: "Ti?ng Vi?t" },
      nav: {
        home: "Trang ch?",
        projects: "D? án",
        about: "Gi?i thi?u",
        contact: "Liên h?",
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
        "Portfolio c?a To Pham Thanh Dat, l?p trình viên t?p trung vào web, mobile, t? d?ng hóa và blockchain.",
      eyebrow: "Portfolio k? thu?t d? h?a / 2026",
      heroSub:
        "L?p trình viên xây d?ng các s?n ph?m th?c d?ng trên web, mobile, t? d?ng hóa và blockchain. T?p trung vào ki?n trúc s?ch, h? th?ng d? d?c và kh? nang m? r?ng khi bàn giao.",
      ctaPrimary: "Xem d? án",
      ctaSecondary: "H? so GitHub",
      posterKicker: "Ð?nh hu?ng portfolio",
      featuredTitle: "D? án n?i b?t",
      featuredText:
        "Các d? án du?c ch?n t? h? so GitHub datjpro. M?i th? d? án d?n t?i trang case study t?p trung vào bài toán, gi?i pháp và tác d?ng.",
      languageTitle: "D?u ?n ngôn ng?",
      languageText:
        "Phân b? ngôn ng? t? repository công khai, cho th?y l? trình k? thu?t full-stack và da linh v?c khá th?c d?ng.",
      focusTitle: "Tr?ng tâm c?t lõi",
      focusText:
        "Portfolio du?c t? ch?c xoay quanh k?t qu? ph?n m?m ch? không ch? là mã ngu?n. Hu?ng thi?t k? mang c?m h?ng biên t?p và poster.",
      processTitle: "Quy trình tri?n khai",
      processText:
        "M?t workflow don gi?n và có th? l?p l?i d? dua d? án t? ý tu?ng d?n b?n phát hành ?n d?nh.",
      statLabels: ["Repository công khai", "Ngu?i theo dõi", "Ðang theo dõi", "GitHub t?"],
      focusCards: [
        ["Tu duy s?n ph?m", "Uu tiên gi?i quy?t quy trình th?c tru?c, r?i m?i t?i uu chi?u sâu k? thu?t và kh? nang m? r?ng."],
        ["Rõ ràng h? th?ng", "Uu tiên ki?n trúc module và ranh gi?i minh b?ch gi?a d? li?u, logic và giao di?n."],
        ["Nh?p d? bàn giao", "L?p nhanh v?i các c?t m?c d? nhìn th?y, r?i si?t ch?t lu?ng b?ng ki?m th? và d?n d?p."],
      ],
      processLabels: ["Xác d?nh", "Thi?t k?", "Xây d?ng", "Bàn giao"],
      processBodies: [
        "Ðóng khung bài toán ngu?i dùng và ch? s? d?u ra c?n d?t.",
        "Phác th?o lu?ng d? li?u, giao di?n và ranh gi?i ki?n trúc.",
        "Tri?n khai theo module và gi? du?ng di mã ngu?n d? truy v?t.",
        "Tài li?u hóa, ki?m tra và chu?n b? cho các vòng l?p ti?p theo.",
      ],
      syncPrefix: "Ð?ng b? d? li?u",
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
      metaTitle: "D? án | To Pham Thanh Dat",
      metaDescription:
        "Kho d? án c?a To Pham Thanh Dat: t? d?ng hóa, n?n t?ng web, blockchain, mobile và desktop.",
      eyebrow: "Thu vi?n d? án",
      heroTitle: ["KHO", "D? ÁN"],
      heroSub:
        "L?c theo danh m?c và tìm theo t? khóa d? di?u hu?ng portfolio nhanh hon. M?i m?c d?u d?n d?n m?t trang case study riêng.",
      searchPlaceholder: "Tìm theo tên, công ngh? ho?c danh m?c",
      searchLabel: "Tìm d? án",
      listTitle: "T?t c? d? án",
      countShown: (count) => `${count} d? án hi?n th?`,
      noMatchTitle: "Không tìm th?y",
      noMatchText: "Hãy th? b? l?c khác ho?c t? khóa ng?n hon.",
      allFilter: "T?t c?",
      footerLead: "C?p nh?t t? d? li?u GitHub",
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
      metaTitle: "Gi?i thi?u | To Pham Thanh Dat",
      metaDescription:
        "Trang gi?i thi?u c?a To Pham Thanh Dat v?i b?n d? k? nang, h? so k? thu?t và ng? c?nh d? án.",
      eyebrow: "Gi?i thi?u",
      heroTitle: ["H? SO", "K? SU"],
      badge: "L?p trình viên ph?n m?m",
      portraitText:
        "Xây d?ng s?n ph?m ph?n m?m v?i tu duy th?c d?ng và ki?n trúc rõ ràng. Ð?nh hu?ng ngh? nghi?p: solution architecture trong h? sinh thái web và blockchain.",
      directionTitle: "Ð?nh hu?ng chuyên môn",
      directionText:
        "Sinh viên K? thu?t ph?n m?m (HUTECH) v?i tr?i nghi?m th?c hành trong phát tri?n full-stack, quy trình t? d?ng hóa và s?n ph?m blockchain. T?p trung xây d?ng các h? th?ng h?u ích có th? m? r?ng vu?t ra ngoài prototype trong l?p h?c.",
      repoText: (count) => `Repository GitHub công khai: ${count}. Công vi?c tr?i dài t? ?ng d?ng web, công c? desktop, s?n ph?m mobile d?n các th? nghi?m h? t?ng.`,
      skillTitle: "Ðám mây k? nang",
      skillText: "Các nhãn công ngh? du?c t?ng h?p t? stack c?a nh?ng d? án dã ch?n.",
      languageTitle: "Phân b? ngôn ng?",
      languageText: "?nh ch?p s? lu?ng ngôn ng? c?a repository tính d?n ngày 05/03/2026.",
      timelineTitle: "H?c t?p và c?t m?c",
      timelineText: "Nh?ng m?c quan tr?ng d?nh hình d?nh hu?ng s?n ph?m và k? thu?t hi?n t?i.",
      timelineLabels: ["2022 - 2026 (d? ki?n)", "2025", "2026"],
      timelineBodies: [
        "Ngành K? thu?t ph?n m?m t?i Ð?i h?c HUTECH.",
        "M? r?ng sang các d? án thi?t k? h? th?ng theo hu?ng blockchain và cloud/security.",
        "Tang t?p trung vào ch?t lu?ng portfolio, kh? nang k? chuy?n ki?n trúc và cách trình bày d? án ? m?c s?n ph?m.",
      ],
      footerLead: "Ngôn ng? thi?t k?: c?m h?ng biên t?p + poster",
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
      metaTitle: "Liên h? | To Pham Thanh Dat",
      metaDescription:
        "Trang liên h? d? trao d?i h?p tác và th?o lu?n d? án v?i To Pham Thanh Dat.",
      eyebrow: "Liên h?",
      heroTitle: ["CÙNG", "XÂY D?NG"],
      heroSub:
        "S?n sàng cho h?p tác ph?n m?m, d? án freelance và các d? án k? thu?t thiên v? h?c h?i. Quan tâm m?nh d?n thi?t k? n?n t?ng web, t? d?ng hóa và h? t?ng s?n ph?m blockchain.",
      cardTitles: ["GitHub", "M?ng xã h?i", "Ph?m vi d? án"],
      cardBodies: [
        "Xem toàn b? l?ch s? d? án, repository và ho?t d?ng commit trên h? so công khai.",
        "Kênh nh?n tin tr?c ti?p d? trao d?i nhanh v? d? án và portfolio.",
      ],
      summary: (count) => `${count} repository công khai cùng nhi?u d? án dang ho?t d?ng ? nhi?u linh v?c.`,
      projectArchive: "xem kho d? án",
      workingTitle: "Cách làm vi?c",
      workingText: "Lu?ng c?ng tác di?n hình cho các d? án ph?n m?m m?i.",
      processLabels: ["Trao d?i", "Ph?m vi", "Xây d?ng", "Bàn giao"],
      processBodies: [
        "Thu th?p m?c tiêu, ràng bu?c và k?t qu? ngu?i dùng mong mu?n.",
        "Xác d?nh ki?n trúc và các m?c bàn giao d?u tiên.",
        "Phát hành module theo t?ng vòng l?p và xác th?c workflow c?t lõi.",
        "Cung c?p tài li?u và g?i ý l? trình phát tri?n ti?p theo.",
      ],
      footerLead: "S?n sàng h?p tác",
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
      metaTitle: "Chi ti?t d? án | To Pham Thanh Dat",
      metaDescription: "Trang case study d? án trong portfolio c?a To Pham Thanh Dat.",
      pageEyebrow: "Case study d? án",
      relatedTitle: "D? án liên quan",
      relatedText: "Thêm các d? án khác t? cùng b? d? li?u GitHub portfolio.",
      caseStudyPrefix: "Case Study",
      openRepo: "M? repository",
      backToProjects: "Quay l?i d? án",
      viewCase: "Xem case study",
      labels: ["Bài toán", "Gi?i pháp", "Tác d?ng", "Ði?m n?i b?t"],
      footerLead: "Case study du?c t?o t? các repository công khai",
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


