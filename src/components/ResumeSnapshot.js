import React from 'react';

function ResumeSnapshot() {
  const highlights = [
    {
      icon: 'bi-mortarboard',
      title: 'Education',
      text: 'Honours BSc in Computer Science (Co-op), University of Ottawa. Expected graduation: December 2027.',
    },
    {
      icon: 'bi-briefcase',
      title: 'Experience',
      text: 'Government co-op experience across PSPC, ESDC, and SSC, with work in automation, workflow testing, reporting, and technical support.',
    },
    {
      icon: 'bi-window-sidebar',
      title: 'SEG3125 learning',
      text: 'Learning how to apply usability, accessibility, visual hierarchy, and interaction design principles to real React prototypes.',
    },
  ];

  const skillGroups = [
    ['React', 'JavaScript', 'HTML/CSS', 'Responsive UI'],
    ['Python', 'Java', 'SQL', 'Kotlin'],
    ['Git/GitHub', 'Azure DevOps', 'Power Automate', 'Power BI'],
    ['QA testing', 'Debugging', 'Data validation', 'Documentation'],
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Resume snapshot</span>
          <h2>Relevant Background</h2>
          <p>
            A short view of the skills and experience that shape how I design, build, and test digital products.
          </p>
        </div>

        <div className="resume-layout">
          <div className="resume-main">
            {highlights.map((item) => (
              <article className="resume-card" key={item.title}>
                <div className="resume-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="resume-panel" aria-label="Technical skills">
            <span className="resume-panel-label">Technical toolkit</span>
            <h3>Skills I use most</h3>
            <div className="skill-clusters">
              {skillGroups.map((group) => (
                <div className="skill-row" key={group.join('-')}>
                  {group.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ResumeSnapshot;
