import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable component for all 4 "coming soon" project pages
// Receives: designNumber, title, category, and icon name as props
function HoldPage({ designNumber, title, category, icon }) {
  const navigate = useNavigate(); // Allows navigating back to homepage

  return (
    <div className="hold-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            
            {/* Large centered icon representing the project type */}
            <div className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-4" 
                 style={{ width: '80px', height: '80px', backgroundColor: '#F8EDED' }}>
              <i className={`${icon} fs-1`} style={{ color: '#8B4747' }}></i>
            </div>
            
            {/* Category label */}
            <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#8B4747', letterSpacing: '0.1em' }}>
              {category}
            </p>
            
            {/* Project title */}
            <h1 className="display-5 fw-bold mb-3" style={{ color: '#4A3A2B' }}>{title}</h1>
            
            {/* Status box showing this is a work in progress */}
            <div className="border rounded-4 p-4 mt-4" style={{ backgroundColor: '#FDF5F0' }}>
              <i className="bi bi-clock-history me-2" style={{ color: '#8B4747' }}></i>
              <span className="fw-medium" style={{ color: '#4A3A2B' }}>In Progress · Coming Soon</span>
            </div>
            
            {/* Explanation that this is for the course */}
            <p className="text-muted mt-4">
              This case study is being developed as part of <strong>SEG3125</strong>.
              <br />
            </p>
            
            {/* Button to return to the main portfolio page */}
            <button onClick={() => navigate('/')} className="btn btn-outline-secondary mt-3">
              <i className="bi bi-arrow-left me-2"></i> Back to Portfolio
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoldPage;