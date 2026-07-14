import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    path: 'https://pet-hub-veterinary.netlify.app/',
    image: '/images/pethub-veterinary.jpg',
    icon: 'bi-heart-pulse',
    category: 'SERVICE DESIGN',
    title: 'PetHub Veterinary',
    description: 'A React prototype for a veterinary clinic, focused on service discovery, transparent pricing, and appointment booking.',
    tags: ['React', 'Booking flow', 'Responsive UI'],
    isExternal: true,
    status: 'View live site',
  },
  {
    path: 'https://digimemo.netlify.app/',
    image: '/images/memorygame.png',
    icon: 'bi-puzzle',
    category: 'GAME DESIGN',
    title: 'Digimemo',
    description: 'A sequence-memory game with difficulty levels, lives, scoring, keyboard support, and accessible feedback.',
    tags: ['React', 'Memory game', 'Accessibility'],
    isExternal: true,
    status: 'View live game',
  },
  {
    path: 'https://mira-skincare.netlify.app/',
    image: '/images/ecommerce.jpg',
    icon: 'bi-bag',
    category: 'ECOMMERCE',
    title: 'Mira Skincare',
    description: 'A skincare e-commerce prototype with faceted search, product details, cart flow, checkout, and feedback survey.',
    tags: ['React', 'Faceted search', 'Checkout flow'],
    isExternal: true,
    status: 'View live site',
  },
  {
    path: 'https://canadian-minimum-wage-dashboard.netlify.app/',
    image: '/images/dashboard.png',
    icon: 'bi-bar-chart',
    category: 'DATA VISUALIZATION',
    title: 'Canadian Minimum Wage Dashboard',
    description: 'An interactive React dashboard for comparing Canadian minimum wage trends across provinces.',
    tags: ['React', 'Government data', 'Data UI'],
    isExternal: true,
    status: 'View live dashboard',
  },
];

function ProjectCard({ project }) {
  const CardTag = project.isExternal ? 'a' : Link;
  const linkProps = project.isExternal
    ? { href: project.path, target: '_blank', rel: 'noopener noreferrer' }
    : { to: project.path };

  return (
    <CardTag {...linkProps} className="project-card text-decoration-none">
      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <i className={`bi ${project.icon}`}></i>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="project-link">
          {project.status}
          <i className={`bi ${project.isExternal ? 'bi-box-arrow-up-right' : 'bi-arrow-right'}`}></i>
        </span>
      </div>
    </CardTag>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Case studies</span>
          <h2>Featured Projects</h2>
          <p>
            Selected React and UI projects that connect classroom design principles with practical, usable interfaces.
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
