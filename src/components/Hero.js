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
        <div className="row align-items-center g-5">
          <div className="col-lg-5 text-center text-lg-start">
            <div className="hero-photo-frame">
              <img
                src="/images/yasmine-photo.jpg"
                alt="Yasmine Bachir"
                className="img-fluid w-100 hero-photo"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <span className="section-kicker">SEG3125 portfolio</span>
            <h1 className="hero-title">
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Yasmine Bachir</span>
            </h1>
            <p className="hero-lead">
              Third-year Computer Science Co-op student at the University of Ottawa
            </p>
            <p className="hero-copy">
              I have hands-on experience in software development, automation, and DevOps across federal government environments.
              I am also passionate about UI design and front-end development, creating interfaces that feel intuitive, clean, and visually balanced.
            </p>
            <p className="hero-copy">
              Outside of coding, I enjoy working out, eating sushi, and finding the best matcha in Ottawa cafes.
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
