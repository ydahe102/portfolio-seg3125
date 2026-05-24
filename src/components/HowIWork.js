
import React from 'react';
function HowIWork() {
  const concepts = [
    { icon: 'bi-palette', name: 'Color Theory' },
    { icon: 'bi-type', name: 'Typography' },
    { icon: 'bi-grid-3x3-gap', name: 'Visual Hierarchy' },
    { icon: 'bi-bezier2', name: 'Scale & Balance' },
    { icon: 'bi-contrast', name: 'Contrast' },
    { icon: 'bi-person-workspace', name: 'User-Centered Design' }
  ];
  return (
    <section id="how-i-work" className="py-5" style={{ backgroundColor: '#FDF5F0' }}>
      <div className="container py-5">
        <div className="row text-center mb-4">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#5C4B3A' }}>
              How I Work
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '500px' }}>
              I'm currently taking <strong>SEG3125 - Analysis and Design of User Interfaces</strong> and learning design elements as part of the course.
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Bootstrap Card */}
            <div className="card border-0 shadow-sm" style={{ borderRadius: '20px' }}>
              <div className="card-body p-4 p-md-5">
                
                {/* Background Section */}
                <div className="mb-4">
                  <h5 className="fw-semibold mb-3" style={{ color: '#5C4B3A' }}>
                    <i className="bi bi-briefcase me-2" style={{ color: '#D4A5A5' }}></i>
                    My Background
                  </h5>
                  <p style={{ color: '#8E7C6A', lineHeight: '1.7' }}>
                    I have experience designing SharePoint pages, where I focused on navigation, layout, 
                    and making sure users could find what they needed. But this is the first time I'm 
                    actually coding a design from scratch.
                  </p>
                  <p style={{ color: '#8E7C6A', lineHeight: '1.7', marginTop: '16px' }}>
                    My workflow starts with understanding the user and what they need to do. Then I sketch 
                    rough layouts and map out the structure. Once I have a structure, I move to visual 
                    design, choosing colors and typography that feel consistent.
                  </p>
                  <p style={{ color: '#8E7C6A', lineHeight: '1.7', marginTop: '16px' }}>
                    As this semester goes on, this section will grow with me. I'll be adding more 
                    context, design decisions, and reflections that show how I'm developing my skills 
                    through SEG3125.
                  </p>
                </div>
                
                <hr className="my-4" style={{ borderColor: '#EADDD2' }} />
                
                {/* Bootstrap flex utilities */}
                <div className="mb-4">
                  <h5 className="fw-semibold mb-3" style={{ color: '#5C4B3A' }}>
                    <i className="bi bi-stars me-2" style={{ color: '#D4A5A5' }}></i>
                    Design Principles I'm Learning & Applying
                  </h5>
                  <div className="d-flex flex-wrap gap-3">
                    {concepts.map((concept, idx) => (
                      <span key={idx} className="concept-chip" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        padding: '8px 16px', 
                        background: 'white', 
                        border: '1px solid #EADDD2', 
                        borderRadius: '40px', 
                        fontSize: '0.85rem', 
                        fontWeight: '500', 
                        color: '#5C4B3A',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.borderColor = '#D4A5A5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#EADDD2';
                      }}>
                        <i className={concept.icon} style={{ color: '#D4A5A5', fontSize: '1rem' }}></i> {concept.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <hr className="my-4" style={{ borderColor: '#EADDD2' }} />
                
                {/* Bootstrap grid */}
                <div className="row mt-4">
                  <div className="col-md-6">
                    <h6 className="fw-semibold mb-3" style={{ color: '#5C4B3A' }}>
                      <i className="bi bi-book-open me-2" style={{ color: '#D4A5A5' }}></i>
                      Tutorials & References
                    </h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>W3Schools HTML <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                      <li className="mb-2"><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>W3Schools CSS <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                      <li className="mb-2"><a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>W3Schools JavaScript <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                      <li className="mb-2"><a href="https://www.w3schools.com/bootstrap5/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>W3Schools Bootstrap 5 <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-semibold mb-3" style={{ color: '#5C4B3A' }}>
                      <i className="bi bi-play-circle me-2" style={{ color: '#D4A5A5' }}></i>
                      Video Tutorials
                    </h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>Net Ninja - Bootstrap 5 <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                      <li className="mb-2"><a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4A5A5' }}>Nielsen Norman Group <i className="bi bi-box-arrow-up-right ms-1 small"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowIWork;
