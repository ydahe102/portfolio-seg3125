
import React from 'react';
function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#FDF5F0' }}>
      <div className="container py-5">
        <div className="row text-center mb-4">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#5C4B3A' }}>
              Contact
            </h2>
            <p style={{ color: '#8E7C6A' }}>
              Open to conversations about front-end development, UI/UX opportunities, 
              or just to connect.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {/* Email */}
              <a href="mailto:ydahe102@uottawa.ca" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', backgroundColor: '#F8EDED', borderRadius: '40px', color: '#D4A5A5', fontWeight: '500', textDecoration: 'none', transition: 'all 0.2s ease' }}
                 onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4A5A5'; e.currentTarget.style.color = 'white'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8EDED'; e.currentTarget.style.color = '#D4A5A5'; }}>
                <i className="bi bi-envelope-fill"></i>
                ydahe102@uottawa.ca
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/yasminebachir" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', backgroundColor: '#F8EDED', borderRadius: '40px', color: '#D4A5A5', fontWeight: '500', textDecoration: 'none', transition: 'all 0.2s ease' }}
                 onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4A5A5'; e.currentTarget.style.color = 'white'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8EDED'; e.currentTarget.style.color = '#D4A5A5'; }}>
                <i className="bi bi-github"></i>
                GitHub
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/yasminebachirr" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', backgroundColor: '#F8EDED', borderRadius: '40px', color: '#D4A5A5', fontWeight: '500', textDecoration: 'none', transition: 'all 0.2s ease' }}
                 onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4A5A5'; e.currentTarget.style.color = 'white'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8EDED'; e.currentTarget.style.color = '#D4A5A5'; }}>
                <i className="bi bi-linkedin"></i>
                LinkedIn
              </a>
            </div>
            
            {/* Copyright line */}
            <div className="text-center mt-5 pt-4">
              <p className="small" style={{ color: '#8E7C6A' }}>
                © {currentYear} Yasmine Bachir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;