import React from 'react';

function Hero() {
  // The first section gives a short introduction and overview.
  return (
    <section id="about" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
      <div className="hero-decoration hero-decoration-two" aria-hidden="true" />

      <div className="portfolio-container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Computer Science Co-op Student</p>

          <h1 id="hero-title" className="hero-title">
            Hi, I&apos;m <span>Yasmine.</span>
          </h1>

          <p className="hero-lead">
            I enjoy building useful solutions and solving technical problems.
          </p>

          <p className="hero-copy">
            I am a third-year Computer Science Co-op student at the University of Ottawa. Through work and school projects, I have gained experience with Azure automation, testing, Power BI, React, JavaScript, and databases. I am still growing my skills and enjoy learning by building real projects.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="mailto:ydahe102@uottawa.ca">
              Contact me
            </a>
          </div>

        </div>

        <aside className="profile-card" aria-label="Portfolio overview">
          <div className="profile-card-top">
            <div className="profile-monogram" aria-hidden="true">YB</div>
            <span className="availability-badge">
              <span aria-hidden="true" /> Open to opportunities
            </span>
          </div>

          <div className="profile-card-copy">
            <p>About me</p>
            <h2>Interested in software and cloud solutions.</h2>
          </div>

          <dl className="profile-facts">
            <div>
              <dt>At work</dt>
              <dd>Azure automation, testing, reporting, and support</dd>
            </div>
            <div>
              <dt>At school</dt>
              <dd>Web, database, full-stack, and mobile projects</dd>
            </div>
            <div>
              <dt>Learning</dt>
              <dd>Front end, back end, cloud, and databases</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
