import React from 'react';
import { useNavigate } from 'react-router-dom';

function HoldPage({ title, category, icon }) {
  const navigate = useNavigate();

  return (
    <div className="hold-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <div className="hold-icon-wrapper">
              <i className={icon}></i>
            </div>

            <p className="section-kicker mx-auto">{category}</p>
            <h1 className="display-5 fw-bold mb-3">{title}</h1>

            <div className="border rounded-4 p-4 mt-4 bg-light">
              <i className="bi bi-clock-history me-2"></i>
              <span className="fw-medium">In Progress - Coming Soon</span>
            </div>

            <p className="text-muted mt-4">
              This case study is being developed as part of <strong>SEG3125</strong>.
            </p>

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
