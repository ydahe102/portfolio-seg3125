import React from 'react';
import { Link } from 'react-router-dom';

const featuredProject = {
  path: 'https://pet-hub-veterinary.netlify.app',
  image: '/images/pethub-veterinary.jpg',
  icon: 'bi-heart-pulse',
  category: 'SERVICE DESIGN',
  title: 'PetHub Veterinary',
  description: 'A React high-fidelity prototype for a veterinary clinic, focused on service discovery, transparent pricing, and appointment booking.',
  tags: ['React', 'Booking flow', 'Responsive UI'],
  isExternal: true,
};

const upcomingProjects = [
  {
    path: '/memoire',
    image: '/images/memory.png',
    icon: 'bi-puzzle',
    category: 'GAME DESIGN',
    title: 'Memory Game',
    description: 'A memory card game that helps improve focus and recall.',
  },
  {
    path: '/ecommerce',
    image: '/images/ecommerce.jpg',
    icon: 'bi-bag',
    category: 'ECOMMERCE',
    title: 'Clothing Store',
    description: 'A shopping experience that feels clear and easy to use.',
  },
  {
    path: '/analytics',
    image: '/images/dashboard.png',
    icon: 'bi-bar-chart',
    category: 'DATA VISUALIZATION',
    title: 'Analytics Dashboard',
    description: 'Clear, actionable insights that help people understand information at a glance.',
  },
];

function ProjectCard({ project }) {
  return (
    <Link to={project.path} className="project-card compact text-decoration-none">
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
        <span className="project-link">Coming soon <i className="bi bi-arrow-right"></i></span>
      </div>
    </Link>
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
            Course projects developed throughout SEG3125, with the service design prototype as the current completed case study.
          </p>
        </div>

        <a
          href={featuredProject.path}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card featured text-decoration-none"
        >
          <div className="project-thumb featured-thumb">
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>
          <div className="project-body featured-body">
            <div className="project-meta">
              <i className={`bi ${featuredProject.icon}`}></i>
              <span>{featuredProject.category}</span>
            </div>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="project-link">View live site <i className="bi bi-box-arrow-up-right"></i></span>
          </div>
        </a>

        <div className="project-grid">
          {upcomingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
