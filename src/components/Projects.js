import React from 'react';
import { Link } from 'react-router-dom';

// List of my 4 projects
const projects = [
  {
    path: 'https://styled-by-her.netlify.app',
    image: '/images/service.jpg',
    icon: 'bi-scissors',
    category: 'SERVICE DESIGN',
    title: 'Hair Salon',
    description: 'A simple booking platform designed to make appointments easy and stress-free.',
    isExternal: true,
    buttonText: 'View live site'
  },
  {
    path: '/memoire',
    image: '/images/memory.png',
    icon: 'bi-puzzle',
    category: 'GAME DESIGN',
    title: 'Memory Game',
    description: 'A memory card game that helps improve focus and recall.',
    isExternal: false,
    buttonText: 'Coming soon'
  },
  {
    path: '/ecommerce',
    image: '/images/ecommerce.jpg',
    icon: 'bi-bag',
    category: 'ECOMMERCE',
    title: 'Clothing Store',
    description: 'A shopping experience that feels clear and easy to use.',
    isExternal: false,
    buttonText: 'Coming soon'
  },
  {
    path: '/analytics',
    image: '/images/dashboard.png',
    icon: 'bi-bar-chart',
    category: 'DATA VISUALIZATION',
    title: 'Analytics Dashboard',
    description: 'Clear, actionable insights that helps people understand information at a glance',
    isExternal: false,
    buttonText: 'Coming soon'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        
        {/* Section heading and description */}
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#4A3A2B' }}>
              Featured Projects
            </h2>
            <p className="text-muted">
              Four case studies I am developing throughout the semester.
            </p>
          </div>
        </div>
        
        {/* Bootstrap Grid */}
        <div className="row g-4">
          {projects.map((project, index) => {
            const cardContent = (
              <div className="card h-100 border rounded-4 overflow-hidden shadow-sm" 
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer', borderColor: '#EADDD2' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 20px 25px -12px rgba(212, 165, 165, 0.15)';
                     e.currentTarget.style.borderColor = '#8B4747';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = 'none';
                     e.currentTarget.style.borderColor = '#EADDD2';
                   }}>
                
                {/* Project image at the top of each card */}
                <div className="overflow-hidden" style={{ height: '160px', backgroundColor: '#F8EDED' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Card content */}
                <div className="card-body p-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className={`${project.icon} fs-5`} style={{ color: '#8B4747' }}></i>
                    <span className="small text-uppercase fw-semibold" style={{ color: '#8B4747', letterSpacing: '0.05em' }}>
                      {project.category}
                    </span>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#4A3A2B', fontSize: '1rem' }}>{project.title}</h5>
                  <p className="small mb-3" style={{ color: '#6B5A4A' }}>{project.description}</p>
                  
                  <span className="small fw-semibold" style={{ color: '#8B4747' }}>
                    {project.buttonText} <i className="bi bi-arrow-right ms-1"></i>
                  </span>
                </div>
              </div>
            );

            // If external link, use <a> tag, otherwise use React Router Link
            if (project.isExternal) {
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <a 
                    href={project.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-decoration-none"
                  >
                    {cardContent}
                  </a>
                </div>
              );
            } else {
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <Link to={project.path} className="text-decoration-none">
                    {cardContent}
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;