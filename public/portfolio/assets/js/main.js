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
      primaryNavLabel: "�i?u hu?ng ch�nh",
      switchAria: "Chuy?n ng�n ng?",
      languageNames: { en: "Ti?ng Anh", vi: "Ti?ng Vi?t" },
      nav: {
        home: "Trang ch?",
        projects: "D? �n",
        about: "Gi?i thi?u",
        contact: "Li�n h?",
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
        "Portfolio c?a To Pham Thanh Dat, l?p tr�nh vi�n t?p trung v�o web, mobile, t? d?ng h�a v� blockchain.",
      eyebrow: "Portfolio k? thu?t d? h?a / 2026",
      heroSub:
        "L?p tr�nh vi�n x�y d?ng c�c s?n ph?m th?c d?ng tr�n web, mobile, t? d?ng h�a v� blockchain. T?p trung v�o ki?n tr�c s?ch, h? th?ng d? d?c v� kh? nang m? r?ng khi b�n giao.",
      ctaPrimary: "Xem d? �n",
      ctaSecondary: "H? so GitHub",
      posterKicker: "�?nh hu?ng portfolio",
      featuredTitle: "D? �n n?i b?t",
      featuredText:
        "C�c d? �n du?c ch?n t? h? so GitHub datjpro. M?i th? d? �n d?n t?i trang case study t?p trung v�o b�i to�n, gi?i ph�p v� t�c d?ng.",
      languageTitle: "D?u ?n ng�n ng?",
      languageText:
        "Ph�n b? ng�n ng? t? repository c�ng khai, cho th?y l? tr�nh k? thu?t full-stack v� da linh v?c kh� th?c d?ng.",
      focusTitle: "Tr?ng t�m c?t l�i",
      focusText:
        "Portfolio du?c t? ch?c xoay quanh k?t qu? ph?n m?m ch? kh�ng ch? l� m� ngu?n. Hu?ng thi?t k? mang c?m h?ng bi�n t?p v� poster.",
      processTitle: "Quy tr�nh tri?n khai",
      processText:
        "M?t workflow don gi?n v� c� th? l?p l?i d? dua d? �n t? � tu?ng d?n b?n ph�t h�nh ?n d?nh.",
      statLabels: ["Repository c�ng khai", "Ngu?i theo d�i", "�ang theo d�i", "GitHub t?"],
      focusCards: [
        ["Tu duy s?n ph?m", "Uu ti�n gi?i quy?t quy tr�nh th?c tru?c, r?i m?i t?i uu chi?u s�u k? thu?t v� kh? nang m? r?ng."],
        ["R� r�ng h? th?ng", "Uu ti�n ki?n tr�c module v� ranh gi?i minh b?ch gi?a d? li?u, logic v� giao di?n."],
        ["Nh?p d? b�n giao", "L?p nhanh v?i c�c c?t m?c d? nh�n th?y, r?i si?t ch?t lu?ng b?ng ki?m th? v� d?n d?p."],
      ],
      processLabels: ["X�c d?nh", "Thi?t k?", "X�y d?ng", "B�n giao"],
      processBodies: [
        "��ng khung b�i to�n ngu?i d�ng v� ch? s? d?u ra c?n d?t.",
        "Ph�c th?o lu?ng d? li?u, giao di?n v� ranh gi?i ki?n tr�c.",
        "Tri?n khai theo module v� gi? du?ng di m� ngu?n d? truy v?t.",
        "T�i li?u h�a, ki?m tra v� chu?n b? cho c�c v�ng l?p ti?p theo.",
      ],
      syncPrefix: "�?ng b? d? li?u",
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
      metaTitle: "D? �n | To Pham Thanh Dat",
      metaDescription:
        "Kho d? �n c?a To Pham Thanh Dat: t? d?ng h�a, n?n t?ng web, blockchain, mobile v� desktop.",
      eyebrow: "Thu vi?n d? �n",
      heroTitle: ["KHO", "D? �N"],
      heroSub:
        "L?c theo danh m?c v� t�m theo t? kh�a d? di?u hu?ng portfolio nhanh hon. M?i m?c d?u d?n d?n m?t trang case study ri�ng.",
      searchPlaceholder: "T�m theo t�n, c�ng ngh? ho?c danh m?c",
      searchLabel: "T�m d? �n",
      listTitle: "T?t c? d? �n",
      countShown: (count) => `${count} d? �n hi?n th?`,
      noMatchTitle: "Kh�ng t�m th?y",
      noMatchText: "H�y th? b? l?c kh�c ho?c t? kh�a ng?n hon.",
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
        "Trang gi?i thi?u c?a To Pham Thanh Dat v?i b?n d? k? nang, h? so k? thu?t v� ng? c?nh d? �n.",
      eyebrow: "Gi?i thi?u",
      heroTitle: ["H? SO", "K? SU"],
      badge: "L?p tr�nh vi�n ph?n m?m",
      portraitText:
        "X�y d?ng s?n ph?m ph?n m?m v?i tu duy th?c d?ng v� ki?n tr�c r� r�ng. �?nh hu?ng ngh? nghi?p: solution architecture trong h? sinh th�i web v� blockchain.",
      directionTitle: "�?nh hu?ng chuy�n m�n",
      directionText:
        "Sinh vi�n K? thu?t ph?n m?m (HUTECH) v?i tr?i nghi?m th?c h�nh trong ph�t tri?n full-stack, quy tr�nh t? d?ng h�a v� s?n ph?m blockchain. T?p trung x�y d?ng c�c h? th?ng h?u �ch c� th? m? r?ng vu?t ra ngo�i prototype trong l?p h?c.",
      repoText: (count) => `Repository GitHub c�ng khai: ${count}. C�ng vi?c tr?i d�i t? ?ng d?ng web, c�ng c? desktop, s?n ph?m mobile d?n c�c th? nghi?m h? t?ng.`,
      skillTitle: "��m m�y k? nang",
      skillText: "C�c nh�n c�ng ngh? du?c t?ng h?p t? stack c?a nh?ng d? �n d� ch?n.",
      languageTitle: "Ph�n b? ng�n ng?",
      languageText: "?nh ch?p s? lu?ng ng�n ng? c?a repository t�nh d?n ng�y 05/03/2026.",
      timelineTitle: "H?c t?p v� c?t m?c",
      timelineText: "Nh?ng m?c quan tr?ng d?nh h�nh d?nh hu?ng s?n ph?m v� k? thu?t hi?n t?i.",
      timelineLabels: ["2022 - 2026 (d? ki?n)", "2025", "2026"],
      timelineBodies: [
        "Ng�nh K? thu?t ph?n m?m t?i �?i h?c HUTECH.",
        "M? r?ng sang c�c d? �n thi?t k? h? th?ng theo hu?ng blockchain v� cloud/security.",
        "Tang t?p trung v�o ch?t lu?ng portfolio, kh? nang k? chuy?n ki?n tr�c v� c�ch tr�nh b�y d? �n ? m?c s?n ph?m.",
      ],
      footerLead: "Ng�n ng? thi?t k?: c?m h?ng bi�n t?p + poster",
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
      metaTitle: "Li�n h? | To Pham Thanh Dat",
      metaDescription:
        "Trang li�n h? d? trao d?i h?p t�c v� th?o lu?n d? �n v?i To Pham Thanh Dat.",
      eyebrow: "Li�n h?",
      heroTitle: ["C�NG", "X�Y D?NG"],
      heroSub:
        "S?n s�ng cho h?p t�c ph?n m?m, d? �n freelance v� c�c d? �n k? thu?t thi�n v? h?c h?i. Quan t�m m?nh d?n thi?t k? n?n t?ng web, t? d?ng h�a v� h? t?ng s?n ph?m blockchain.",
      cardTitles: ["GitHub", "M?ng x� h?i", "Ph?m vi d? �n"],
      cardBodies: [
        "Xem to�n b? l?ch s? d? �n, repository v� ho?t d?ng commit tr�n h? so c�ng khai.",
        "K�nh nh?n tin tr?c ti?p d? trao d?i nhanh v? d? �n v� portfolio.",
      ],
      summary: (count) => `${count} repository c�ng khai c�ng nhi?u d? �n dang ho?t d?ng ? nhi?u linh v?c.`,
      projectArchive: "xem kho d? �n",
      workingTitle: "C�ch l�m vi?c",
      workingText: "Lu?ng c?ng t�c di?n h�nh cho c�c d? �n ph?n m?m m?i.",
      processLabels: ["Trao d?i", "Ph?m vi", "X�y d?ng", "B�n giao"],
      processBodies: [
        "Thu th?p m?c ti�u, r�ng bu?c v� k?t qu? ngu?i d�ng mong mu?n.",
        "X�c d?nh ki?n tr�c v� c�c m?c b�n giao d?u ti�n.",
        "Ph�t h�nh module theo t?ng v�ng l?p v� x�c th?c workflow c?t l�i.",
        "Cung c?p t�i li?u v� g?i � l? tr�nh ph�t tri?n ti?p theo.",
      ],
      footerLead: "S?n s�ng h?p t�c",
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
      metaTitle: "Chi ti?t d? �n | To Pham Thanh Dat",
      metaDescription: "Trang case study d? �n trong portfolio c?a To Pham Thanh Dat.",
      pageEyebrow: "Case study d? �n",
      relatedTitle: "D? �n li�n quan",
      relatedText: "Th�m c�c d? �n kh�c t? c�ng b? d? li?u GitHub portfolio.",
      caseStudyPrefix: "Case Study",
      openRepo: "M? repository",
      backToProjects: "Quay l?i d? �n",
      viewCase: "Xem case study",
      labels: ["B�i to�n", "Gi?i ph�p", "T�c d?ng", "�i?m n?i b?t"],
      footerLead: "Case study du?c t?o t? c�c repository c�ng khai",
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


