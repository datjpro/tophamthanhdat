"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getProjects, type ProjectItem } from "@/lib/content-data";

export default function PortfolioProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects: ProjectItem[] = useMemo(() => getProjects("vi"), []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      if (selectedCategory !== "all") {
        const cat = selectedCategory.toLowerCase();
        const matchRole = project.role.toLowerCase().includes(cat);
        const matchTech = project.tech.some((t) => t.toLowerCase().includes(cat));
        if (!matchRole && !matchTech) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchSummary = project.summary.toLowerCase().includes(q);
        const matchTech = project.tech.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchSummary || matchTech;
      }
      return true;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "blockchain", label: "Blockchain" },
  ];

  return (
    <div className="retro-portfolio-theme" data-portfolio-page="projects" data-page="projects">
      <header className="site-header" data-open={menuOpen ? "true" : "false"}>
        <Link className="brand" href="/portfolio">
          DATJPRO
          <small>Software Portfolio</small>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "−" : "+"}
        </button>
        <nav className="nav-links" aria-label="Primary">
          <Link data-page="home" href="/portfolio">
            Home
          </Link>
          <Link data-page="projects" href="/portfolio/projects">
            Projects
          </Link>
          <Link data-page="about" href="/portfolio/about">
            About
          </Link>
          <Link data-page="contact" href="/portfolio/contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="page-shell">
        <section className="section reveal" style={{ marginTop: "0.2rem" }}>
          <p className="eyebrow">Project library</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
            <span>PROJECT</span>
            <span>ARCHIVE</span>
          </h1>
          <p className="hero-sub">
            Filter by category and search by keyword to quickly navigate the portfolio. Every item
            links to a dedicated case study page.
          </p>
        </section>

        <section className="section reveal">
          <div className="filter-row">
            <div id="project-filters" className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-pill ${selectedCategory === cat.id ? "active" : ""}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <input
              id="project-search"
              className="search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, stack, or category"
              aria-label="Search projects"
            />
          </div>
        </section>

        <section className="section reveal">
          <div className="project-list-head">
            <h2
              style={{
                margin: 0,
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              All Projects
            </h2>
            <span id="project-count" className="count-pill">
              {filteredProjects.length} projects shown
            </span>
          </div>
          <div id="project-grid" className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-card-top">
                  <span className="project-year">{project.year || "2024"}</span>
                  <span className="card-badge">{project.role}</span>
                </div>
                <h3 style={{ marginTop: "0.6rem" }}>{project.title}</h3>
                <p className="muted" style={{ fontSize: "0.85rem", margin: "0.4rem 0 0.8rem" }}>
                  {project.summary}
                </p>
                <div className="chip-list" style={{ marginTop: "auto" }}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "0.8rem", paddingTop: "0.6rem", borderTop: "1px dashed var(--line)" }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="action-link"
                    style={{ fontSize: "0.82rem", fontWeight: 700 }}
                  >
                    View Project &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="status-ok">Updated from GitHub dataset</span>
        <span>
          To Pham Thanh Dat / <span>{new Date().getFullYear()}</span>
        </span>
      </footer>
    </div>
  );
}
