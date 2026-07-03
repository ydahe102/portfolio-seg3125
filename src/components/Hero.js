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
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9 text-center">
            <span className="section-kicker">SEG3125 portfolio</span>
            <h1 className="hero-title">
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Yasmine Bachir</span>
            </h1>
            <p className="hero-lead">
              Computer Science Co-op student focused on front-end development and user interface design.
            </p>
            <p className="hero-copy">
              I build responsive React prototypes that combine usability, accessibility, and clean visual structure.
              My work in SEG3125 focuses on turning interface design concepts into practical, interactive websites.
            </p>
            <div className="hero-actions">
              <button onClick={scrollToProjects} className="btn btn-primary px-4 py-2 rounded-pill">
                View My Projects <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <a href="mailto:ydahe102@uottawa.ca" className="btn btn-outline-secondary px-4 py-2 rounded-pill">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
