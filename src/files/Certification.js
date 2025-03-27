import React from 'react';


export default function Certification() {
  return (
    <div className="container text-center py-5" id="certification">
        <br /><br />
      <h1 className="mb-4 fw-bold text-success">Certifications</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm p-4 text-center">
                <h4 className="fw-bold">Java Full Stack Development</h4>
                <p className="text-muted">KodNest <br />October 2024 - March 2025</p>
                <a href="https://your-certificate-link" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Not Yet Generated</button>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4 text-center">
                <h4 className="fw-bold">Machine Learning</h4>
                <p className="text-muted">AWS Academy Graduate <br /> January 2023</p>
                <a href="https://drive.google.com/file/d/1dMomz_eTIElQ5hkVhBYkSlJmuVCsrL-N/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Certificate</button>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4 text-center">
                <h4 className="fw-bold">Java Programming</h4>
                <p className="text-muted">Great Learning <br /> November 2024</p>
                <a href="https://drive.google.com/file/d/1GNt7paO34pFliMEJQ2LaL9FNGkUQIssN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Certificate</button>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4 text-center">
                <h4 className="fw-bold">Natural Language Processing</h4>
                <p className="text-muted">AWS Academy Graduate <br /> January 2023</p>
                <a href="https://drive.google.com/file/d/1CfMUCUjrhLC5SAF25uIrwFImd0VEXOYW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Certificate</button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
