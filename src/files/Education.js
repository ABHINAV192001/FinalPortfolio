import React from 'react';
import "./css/Education.css"
import Internship from './Internship';


export default function Education() {
  return (
    <div className="container text-center py-5" id="education">
        <br /><br /><br /><br />
      <h1 className="mb-4 fw-bold text-success">Education</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4 mb-3">
            <h4 className="fw-bold">Bachelor of Technology (B.Tech)</h4>
            <p className="text-muted mb-1">Computer Science with a specialization in Artificial Intelligence and Machine Learning (AIML)</p>
            <p className="text-muted mb-1">Gyan Ganga Institute of Technology and Science</p>
            <p className="text-muted">2020 - 2024</p>
          </div>
          <div className="card shadow-sm p-4 mb-3">
            <h4 className="fw-bold">Higher Secondary Education</h4>
            <p className="text-muted mb-1">12th Govt M L B Girls H S School</p>
            <p className="text-muted">2020 - 2021</p>
          </div>
          <div className="card shadow-sm p-4">
            <h4 className="fw-bold">Secondary Education</h4>
            <p className="text-muted mb-1">10th Grade Samdariya Public School</p>
            <p className="text-muted">Completed in 2017</p>
          </div>
        </div>
      </div>

      <div id='Internship'>
        <Internship/>
      </div>
    </div>
  );
}
