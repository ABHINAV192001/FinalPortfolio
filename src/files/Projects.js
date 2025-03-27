import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/project.css";
import Certification from "./Certification";

export default function Projects() {
  return (
    <div className="container text-center py-5" id="projects">
      <br /><br />
      <h1 className="mb-4 fw-bold text-danger">Projects</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="project-card p-4 text-center">
                <h4 className="fw-bold">Sign Language Recognition</h4>
                <p className="text-muted">Tech: Python, CNN, OpenCV</p>
                <p className="project-description">Developed an AI-powered Sign Language Recognition system, converting gestures into text with 90% accuracy, making communication easier for people with hearing disabilities.</p>
                <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Project</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card p-4 text-center">
                <h4 className="fw-bold">Facial-Based Music Recommendation</h4>
                <p className="text-muted">Tech: Python, OpenCV, AI</p>
                <p className="project-description">Built a system using facial recognition and AI to recommend music based on user emotions in real-time.</p>
                <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Project</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card p-4 text-center">
                <h4 className="fw-bold">Task Management Application</h4>
                <p className="text-muted">Tech: Java, Sql, React</p>
                <p className="project-description">Developed a full-stack web app for task management with priority-based scheduling and real-time notifications.</p>
                <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Project</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card p-4 text-center">
                <h4 className="fw-bold">Learning Sphear</h4>
                <p className="text-muted">Tech: Java, React, SQL</p>
                <p className="project-description">Designed an AI chatbot that uses NLP to process and respond to user queries with high accuracy.</p>
                <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Project</button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div id="Certification">
        <Certification/>
      </div>
    </div>
  );
}
