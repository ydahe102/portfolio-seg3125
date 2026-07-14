import React from 'react';

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <span className="section-kicker">Computer Science Co-op</span>
            <h1 className="hero-title">
              Yasmine Bachir
            </h1>
            <p className="hero-lead">
              Front-end developer and Computer Science student building clean, usable React experiences.
            </p>
            <p className="hero-copy">
              I am a bilingual third-year Computer Science Co-op student at the University of Ottawa with experience in web development, QA testing, automation, dashboards, and cloud-based workflow solutions.
            </p>
            <div className="hero-actions">
              <button onClick={scrollToProjects} className="btn btn-primary px-4 py-2 rounded-pill">
                View Projects <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <a href="mailto:ydahe102@uottawa.ca" className="btn btn-outline-secondary px-4 py-2 rounded-pill">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Portfolio highlights">
            <div>
              <span className="hero-card-label">Current focus</span>
              <strong>React, UI design, automation, and software quality</strong>
            </div>
            <div className="hero-card-grid">
              <span>Third-year CS</span>
              <span>Bilingual EN/FR</span>
              <span>Government co-op</span>
              <span>Enhanced reliability</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
