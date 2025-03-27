import React from 'react';
import Skills from './Skills';

export default function Internship() {
    return (
        <div className="container text-center py-5" id="internship">
            <br /><br /><br />
            <h1 className="mb-4 fw-bold text-success">Internship</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm p-4 mb-3">
                        <h4 className="fw-bold">Java Full Stack Developer</h4>
                        <p className="text-muted mb-1">KodNest</p>
                        <p className="text-muted">October 2024 - March 2025</p>
                        <p> • Developed and optimized backend services using Java and React. <br />
                            • Designed and managed databases using MySQL, ensuring efficient data retrieval.<br />
                            • Built RESTful APIs and integrated front-end components using React.js</p>
                    </div>
                </div>
            </div>
            <div id="Skills">
                <Skills/>
            </div>
        </div>
    );
}
