export default function PortfolioAboutPage() {
  return (
    <div data-portfolio-page="about" data-page="about">
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
          <p className="eyebrow">About</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 8vw, 6rem)" }}>
            <span>ENGINEER</span>
            <span>PROFILE</span>
          </h1>
        </section>

        <section className="section reveal">
          <div className="about-grid">
            <article className="portrait">
              <span className="portrait-badge">Software Developer</span>
              <h2 className="portrait-name">
                <span>TO PHAM</span>
                <span>THANH DAT</span>
              </h2>
              <p className="muted">
                Building software products with a practical mindset and clear architecture. Career
                direction: solution architecture in web and blockchain ecosystems.
              </p>
            </article>

            <article className="panel">
              <h3>Professional Direction</h3>
              <p>
                Software engineering student (HUTECH) with hands-on work in full-stack development,
                automation workflows, and blockchain-based products. Focused on building useful
                systems that can scale beyond classroom prototypes.
              </p>
              <p>
                Public GitHub repositories: <strong id="about-repo-count">52</strong>. Work spans
                web applications, desktop tools, mobile products, and infrastructure experiments.
              </p>
            </article>
          </div>
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Skill Cloud</h2>
            <p>Technology tags aggregated from selected project stacks.</p>
          </div>
          <div id="skill-cloud" className="skill-cloud" />
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Language Distribution</h2>
            <p>Repository language count snapshot from March 5, 2026.</p>
          </div>
          <div id="about-language-board" className="lang-board" />
        </section>

        <section className="section reveal">
          <div className="section-head">
            <h2>Education and Timeline</h2>
            <p>Milestones that shape current product and engineering focus.</p>
          </div>
          <ul className="timeline">
            <li>
              <strong>2022 - 2026 (expected)</strong>
              <p>Software Engineering at HUTECH University.</p>
            </li>
            <li>
              <strong>2025</strong>
              <p>
                Expanded into blockchain and cloud/security-flavored system design projects.
              </p>
            </li>
            <li>
              <strong>2026</strong>
              <p>
                Increased focus on portfolio quality, architecture storytelling, and product-grade
                project presentation.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <span>Design language: editorial + poster-inspired</span>
        <span>
          To Pham Thanh Dat / <span className="js-year" />
        </span>
      </footer>
    </div>
  );
}
