export default function PortfolioHomePage() {
  return (
    <div data-portfolio-page="home" data-page="home">
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
        <section className="hero reveal">
          <div>
            <p className="eyebrow">Graphic engineering portfolio / 2026</p>
            <h1 className="hero-title">
              <span>TO PHAM</span>
              <span>THANH DAT</span>
            </h1>
            <p className="hero-sub">
              Software developer building practical products across web, mobile, automation, and
              blockchain. Strong focus on clean architecture, readable systems, and scalable
              delivery.
            </p>
            <div className="hero-cta">
              <a className="btn" href="/portfolio/projects">
                Explore projects
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/datjpro"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub profile
              </a>
            </div>
          </div>

          <aside className="poster-stack reveal" aria-label="Portfolio poster card">
            <div className="poster-inner">
              <span className="poster-kicker">Portfolio Direction</span>
              <p className="poster-year">CODE x DESIGN x SYSTEM</p>
              <ul className="poster-list">
                <li>Web Products</li>
                <li>Mobile Experiences</li>
                <li>Automation Pipelines</li>
                <li>Blockchain Integrations</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="stat-strip reveal" aria-label="GitHub stats">
          <article className="stat-card">
            <span className="stat-value" data-stat="repos">
              52
            </span>
            <span className="stat-label">Public repositories</span>
          </article>
          <article className="stat-card">
            <span className="stat-value" data-stat="followers">
              2
            </span>
            <span className="stat-label">Followers</span>
          </article>
          <article className="stat-card">
            <span className="stat-value" data-stat="following">
              6
            </span>
            <span className="stat-label">Following</span>
          </article>
          <article className="stat-card">
            <span className="stat-value" data-stat="since">
              2024
            </span>
            <span className="stat-label">GitHub since</span>
          </article>
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>
              Selected works from GitHub datjpro profile. Each project card links to a focused
              case-study page with problem, solution, and impact.
            </p>
          </div>
          <div id="featured-grid" className="project-grid" />
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Language Footprint</h2>
            <p>
              Language distribution from public repositories, highlighting a practical full-stack
              and cross-domain engineering path.
            </p>
          </div>
          <div id="language-board" className="lang-board" />
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Core Focus</h2>
            <p>
              The portfolio is structured around software outcomes, not only code. Design direction
              follows an editorial and poster-like visual style.
            </p>
          </div>
          <div className="focus-grid">
            <article className="focus-card">
              <h3>Product Thinking</h3>
              <p>Build for real workflows first, then optimize technical depth and scale.</p>
            </article>
            <article className="focus-card">
              <h3>System Clarity</h3>
              <p>
                Prefer modular architecture and explicit boundaries between data, logic, and
                interface.
              </p>
            </article>
            <article className="focus-card">
              <h3>Delivery Rhythm</h3>
              <p>
                Iterate quickly with visible milestones, then harden with testing and cleanup.
              </p>
            </article>
          </div>
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Execution Process</h2>
            <p>
              A simple and repeatable workflow for project delivery from idea to stable release.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-index">01</span>
              <span className="process-label">Define</span>
              <p className="process-text">Frame the user problem and outcome metrics.</p>
            </li>
            <li>
              <span className="process-index">02</span>
              <span className="process-label">Design</span>
              <p className="process-text">Sketch data flow, interfaces, and architecture boundaries.</p>
            </li>
            <li>
              <span className="process-index">03</span>
              <span className="process-label">Build</span>
              <p className="process-text">Implement modularly and keep code paths traceable.</p>
            </li>
            <li>
              <span className="process-index">04</span>
              <span className="process-label">Ship</span>
              <p className="process-text">Document, validate, and prepare future iterations.</p>
            </li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <span id="sync-label">Dataset sync: 2026-03-05</span>
        <span>
          To Pham Thanh Dat / <span className="js-year" />
        </span>
      </footer>
    </div>
  );
}
