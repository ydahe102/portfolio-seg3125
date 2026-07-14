import React from 'react';

// Project information is kept here so every card uses the same layout.
const projects = [
  {
    number: '01',
    path: 'https://pet-hub-veterinary.netlify.app/',
    image: '/images/pethub-veterinary.jpg',
    category: 'Service site',
    title: 'PetHub Veterinary',
    description: 'A veterinary clinic prototype designed to make service discovery, pricing, and appointment booking feel simple and trustworthy.',
    focus: 'React components, routing, booking logic, and responsive development.',
    tags: ['JavaScript', 'CSS', 'React'],
    linkLabel: 'View live site',
  },
  {
    number: '02',
    path: 'https://digimemo.netlify.app/',
    image: '/images/memorygame.png',
    category: 'Game design site',
    title: 'Digimemo',
    description: 'A sequence-memory game with difficulty levels, lives, scoring, keyboard support, and clear feedback after every action.',
    focus: 'State management, game logic, keyboard controls, and scoring.',
    tags: ['JavaScript', 'CSS', 'React'],
    linkLabel: 'View live game',
  },
  {
    number: '03',
    path: 'https://mira-skincare.netlify.app/',
    image: '/images/ecommerce.jpg',
    category: 'E-commerce site',
    title: 'Mira Skincare',
    description: 'A skincare shopping experience with product discovery, faceted filters, product details, cart, checkout, and a feedback survey.',
    focus: 'Product data, filtering, cart state, checkout, and reusable components.',
    tags: ['JavaScript', 'CSS', 'React'],
    linkLabel: 'View live site',
  },
  {
    number: '04',
    path: 'https://canadian-minimum-wage-dashboard.netlify.app/',
    image: '/images/dashboard.png',
    category: 'Data visualization',
    title: 'Canadian Provincial Minimum Wage Dashboard',
    description: 'A bilingual dashboard for comparing provincial minimum wage values and growth across Canada from 2016 to 2026.',
    focus: 'Data processing, interactive charts, filtering, and localization.',
    tags: ['JavaScript', 'CSS', 'React'],
    linkLabel: 'View live dashboard',
  },
];

function ProjectCard({ project }) {
  // One reusable card is used for all four projects.
  return (
    <article className="project-card">
      <a
        className="project-image-link"
        href={project.path}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} in a new tab`}
      >
        <div className="project-image">
          <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
          <span className="project-number" aria-hidden="true">{project.number}</span>
        </div>
      </a>

      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-focus">
          <span>Development focus</span>
          <p>{project.focus}</p>
        </div>

        <div className="project-footer">
          <div className="project-tags" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            className="project-link"
            href={project.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="portfolio-container">
        <div className="section-intro">
          <p className="eyebrow">My projects</p>
          <h2 id="projects-title">Projects I&apos;ve built.</h2>
          <p>
            Web applications built with JavaScript, CSS, and React.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
