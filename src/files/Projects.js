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

            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card border">
                  <img src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-023-43852-x/MediaObjects/41598_2023_43852_Fig1_HTML.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Real-Time Sign Language Interpreter</h5>
                    <p class="card-text">Tech: Python, CNN, OpenCV , Flask, ANN and much more<br /><hr /> Created an AI-based system that interprets sign language gestures into text with 90% accuracy, enhancing accessibility for the hearing impaired.</p>
                    <a href="https://github.com/ABHINAV192001" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">View Project</button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card border">
                  <img src="https://i.ytimg.com/vi/uDzLxos0lNU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBRQqzUGw188Hk1cTs1ROshAo8lSw" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Emotion-Driven Music Recommender</h5>
                    <p class="card-text">Tech: Python, CNN, OpenCV , Flask, ANN and much more<br /><hr /> Engineered a system that detects facial expressions using AI and recommends music based on real-time emotional analysis.</p>
                    <a href="https://github.com/ABHINAV192001" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border">
                  <img src="https://cdn.prod.website-files.com/60c0cec90f57824353f55893/629897cfc77f0da4e04396c7_Task%20Management%20Blog%20(1).png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Smart Task Manager Web App
                    </h5>
                    <p class="card-text">Tech: React, Javascript, HTML, CSS, Bootstrap <br /><hr /> Built a full-stack task management system supporting CRUD operations, priority scheduling, and real-time deadline alerts.</p>

                    <a href="https://todo-app-three-ecru-74.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">View Project</button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card border">
                  <img src="https://learning-sphear.vercel.app/static/media/image%201.21cc78ecfd47bad5950b.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Learning Sphere - AI-Powered EdTech Tool</h5>
                    <p class="card-text">Tech: React, Javascript, HTML, CSS, Bootstrap, Vercel and much more <br /><hr /> Developed an interactive learning assistant integrating NLP-based chatbot capabilities to answer user queries and support educational content delivery.</p>

                    <a href="https://learning-sphear.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="Certification">
        <Certification />
      </div>
    </div>
  );
}
