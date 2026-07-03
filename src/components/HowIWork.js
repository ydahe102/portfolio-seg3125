import React from 'react';

function HowIWork() {
  const steps = [
    {
      icon: 'bi-search',
      title: 'Understand the user',
      text: 'I start by identifying the main task, the user goal, and what information needs to be easy to find.',
    },
    {
      icon: 'bi-grid-1x2',
      title: 'Structure the interface',
      text: 'I organize content with clear navigation, readable layouts, consistent spacing, and predictable interaction patterns.',
    },
    {
      icon: 'bi-code-slash',
      title: 'Build and test',
      text: 'I turn the design into responsive code, then check alignment, accessibility, and behavior across screen sizes.',
    },
  ];

  const skills = ['React', 'JavaScript', 'Responsive UI', 'Accessibility', 'Usability testing', 'Visual hierarchy'];

  return (
    <section id="how-i-work" className="work-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Process</span>
          <h2>How I Work</h2>
          <p>
            I design and build interfaces by focusing on clarity, usability, and clean front-end implementation.
          </p>
        </div>

        <div className="work-grid">
          {steps.map((step) => (
            <article className="work-card" key={step.title}>
              <div className="work-icon">
                <i className={`bi ${step.icon}`}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="work-tools" aria-label="Skills and tools">
          {skills.map((skill) => (
            <span key={skill} className="tool-chip">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
