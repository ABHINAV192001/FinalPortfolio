import React from 'react';
import Projects from "./Projects";

export default function Skills() {
  return (
    <div className="container text-center py-5" id="skills">
      <br /><br />
      <h1 className="mb-4 fw-bold text-warning">Skills</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h4 className="fw-bold">Technical Skills</h4>
            <ul className="list-unstyled">
              <li className="fs-5 fw-bold">
                <i className="fas fa-code text-primary me-2"></i> 
                Java (Spring Boot Learning)<span className="fw-normal"></span>
              </li>
              <li className="fs-5 fw-bold">
                <i className="fas fa-database text-success me-2"></i> 
                SQL (MySQL, PostgreSQL)<span className="fw-normal"></span>
              </li>
              <li className="fs-5 fw-bold">
                <i className="fab fa-html5 text-danger me-2"></i> 
                HTML, CSS, Bootstrap
              </li>
              <li className="fs-5 fw-bold">
                <i className="fab fa-js text-warning me-2"></i> 
                JavaScript (React, ES6+)<span className="fw-normal"></span>
              </li>
              <li className="fs-5 fw-bold">
                <i className="fas fa-vials text-info me-2"></i> 
                Testing (Manual Testing, Automation Testing with Java)<span className="fw-normal"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="Projects">
        <Projects />
      </div>
    </div>
  );
}
