export default function PortfolioContactPage() {
  return (
    <div data-portfolio-page="contact" data-page="contact">
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
        <section className="section reveal" style={{ marginTop: "0.25rem" }}>
          <p className="eyebrow">Contact</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 8vw, 6rem)" }}>
            <span>LET US</span>
            <span>BUILD</span>
          </h1>
          <p className="hero-sub">
            Open to software collaboration, freelance builds, and learning-focused engineering
            projects. Strong interest in web platform design, automation, and blockchain product
            infrastructure.
          </p>
        </section>

        <section className="section reveal">
          <div className="contact-grid">
            <article className="contact-card">
              <h3>GitHub</h3>
              <p>
                Explore full project history, repositories, and commit activity in public profile.
              </p>
              <a href="https://github.com/datjpro" target="_blank" rel="noreferrer noopener">
                github.com/datjpro
              </a>
            </article>

            <article className="contact-card">
              <h3>Social</h3>
              <p>
                Direct message channel for quick discussions and portfolio conversations.
              </p>
              <a href="https://x.com/T626859858" target="_blank" rel="noreferrer noopener">
                x.com/T626859858
              </a>
            </article>

            <article className="contact-card">
              <h3>Project Scope</h3>
              <p id="contact-summary">52 public repositories and active multi-domain projects.</p>
              <a href="/portfolio/projects">see project archive</a>
            </article>
          </div>
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Working Style</h2>
            <p>Typical collaboration flow for new software projects.</p>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-index">01</span>
              <span className="process-label">Brief</span>
              <p className="process-text">Collect goals, constraints, and user outcomes.</p>
            </li>
            <li>
              <span className="process-index">02</span>
              <span className="process-label">Scope</span>
              <p className="process-text">Define architecture and first delivery milestones.</p>
            </li>
            <li>
              <span className="process-index">03</span>
              <span className="process-label">Build</span>
              <p className="process-text">Ship iterative modules and validate core workflows.</p>
            </li>
            <li>
              <span className="process-index">04</span>
              <span className="process-label">Handover</span>
              <p className="process-text">Provide documentation and future roadmap options.</p>
            </li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <span>Available for collaboration</span>
        <span>
          To Pham Thanh Dat / <span className="js-year" />
        </span>
      </footer>
    </div>
  );
}
