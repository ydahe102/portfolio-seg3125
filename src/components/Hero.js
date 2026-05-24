
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
          
          {/* Left column: my photo */}
          <div className="col-md-6 text-center text-md-start">
            <div className="rounded-4 overflow-hidden shadow-sm" 
                 style={{ maxWidth: '320px', margin: '0 auto', 
                          border: `4px solid var(--primary-light)` }}>
              <img 
                src="/images/yasmine-photo.jpg"
                alt="Yasmine Bachir"
                className="img-fluid w-100"
                style={{ display: 'block' }}
              />
            </div>
          </div>
          {/* Right column: about me text */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Yasmine Bachir</span>
            </h1>
            <p className="lead mb-3" style={{ color: 'var(--text-muted)' }}>
              Third-year Computer Science Co-op student at the University of Ottawa
            </p>
            <p style={{ color: 'var(--text-dark)' }}>
              I have hands-on experience in software development, automation, and DevOps across federal government environments. 
              I'm also passionate about UI design and front-end development, creating interfaces that feel intuitive, clean, and 
              visually balanced while combining technical skills with design thinking. 
            </p>
            <p style={{ color: 'var(--text-dark)' }}>
              Outside of coding, I enjoy working out, eating sushi, and finding the best matcha in Ottawa cafés.
            </p>
            <button onClick={scrollToProjects} className="btn btn-primary px-4 py-2 rounded-pill mt-2">
              View My Projects <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;