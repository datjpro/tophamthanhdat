export default function PortfolioProjectPage() {
  return (
    <div data-portfolio-page="project" data-page="project">
      <header className="site-header" data-open="false">
        <a className="brand" href="/portfolio">
          DATJPRO
          <small>Software Portfolio</small>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle menu">
          +
        </button>
        <nav className="nav-links" aria-label="Primary">
          <a data-page="home" href="/portfolio">
            Home
          </a>
          <a data-page="projects" href="/portfolio/projects">
            Projects
          </a>
          <a data-page="about" href="/portfolio/about">
            About
          </a>
          <a data-page="contact" href="/portfolio/contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="page-shell">
        <section className="section" style={{ marginTop: "0.35rem" }}>
          <p className="eyebrow">Project case study</p>
        </section>

        <section id="project-detail-root" className="detail-wrap" />

        <section className="section reveal">
          <div className="section-head">
            <h2>Related Work</h2>
            <p>More projects from the same GitHub portfolio dataset.</p>
          </div>
          <div id="related-grid" className="project-grid" />
        </section>
      </main>

      <footer className="site-footer">
        <span>Case studies generated from public repositories</span>
        <span>
          To Pham Thanh Dat / <span className="js-year" />
        </span>
      </footer>
    </div>
  );
}
