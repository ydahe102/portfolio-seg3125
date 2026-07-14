import React from 'react';

// These are the main steps I normally follow when working on a project.
const processSteps = [
  {
    number: '01',
    title: 'Understand',
    text: 'I clarify the requirements, data, and expected result before I start building.',
  },
  {
    number: '02',
    title: 'Plan',
    text: 'I break the solution into practical technical steps and choose the right tools.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'I develop web projects, cloud workflows, integrations, reports, and database-backed applications.',
  },
  {
    number: '04',
    title: 'Test',
    text: 'I debug issues, validate data and outputs, test edge cases, and document the result.',
  },
];

// Skills are separated by category to make the list easier to scan.
const skillGroups = [
  {
    title: 'Programming & scripting',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'Kotlin', 'C', 'C++', 'Go', 'Bash', 'PowerShell', 'R'],
  },
  {
    title: 'Web development',
    skills: ['React', 'HTML', 'CSS', 'REST APIs', 'Firebase', 'Databases'],
  },
  {
    title: 'Tools & platforms',
    skills: ['Git & GitHub', 'Azure', 'Azure DevOps', 'Azure Functions', 'Logic Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Docker', 'Linux', 'Jira'],
  },
];

function ResumeSnapshot() {
  return (
    <section id="process" className="process-section" aria-labelledby="process-title">
      <div className="portfolio-container">
        <div className="section-intro section-intro-left">
          <p className="eyebrow">How I work</p>
          <h2 id="process-title">How I approach development.</h2>
          <p>
            My experience spans cloud automation, web development, databases, reporting, testing, and technical support.
          </p>
        </div>

        <div className="process-layout">
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-number" aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <aside className="toolkit-card" aria-label="Technical toolkit">
            <p className="toolkit-label">Technical toolkit</p>
            <h3>Development toolkit</h3>
            <p>
              I combine professional experience with Azure, automation, Power BI, and testing with project experience in React, APIs, SQL, Firebase, and full-stack development.
            </p>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
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
