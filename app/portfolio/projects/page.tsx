export default function PortfolioProjectsPage() {
  return (
    <div data-portfolio-page="projects" data-page="projects">
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
            <div id="project-filters" className="filter-pills" />
            <input
              id="project-search"
              className="search-input"
              type="search"
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
              0 projects shown
            </span>
          </div>
          <div id="project-grid" className="project-grid" />
        </section>
      </main>

      <footer className="site-footer">
        <span className="status-ok">Updated from GitHub dataset</span>
        <span>
          To Pham Thanh Dat / <span className="js-year" />
        </span>
      </footer>
    </div>
  );
}
