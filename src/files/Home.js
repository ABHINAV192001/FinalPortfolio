import React from 'react';
import About from "./About";
import image from "./images/Untitled (1).png";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100" id="home">
        <br /><br /><br /><br />
        <div className="hero d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center p-5">
              <h3 className="text-success">Hello I'm</h3>
              <h1 className="fw-bold">Abhinav Sahu</h1>
              <p className="text-muted">Aspirant Web Developer</p>
              <p>
                B.Tech in Computer Science (AIML) with expertise in Java, SQL, and Full-Stack Development. Experienced in building scalable
                applications, debugging, and database management. Seeking a role as a Java Developer to leverage my programming and problem-
                solving skills in a dynamic tech environment.
              </p>
              <a href="mailto:abhinavsahu120@gmail.com">
                <button className="btn btn-success px-4 py-2 mt-3">Hire Me</button>
              </a>

            </div>
            <div className="col-md-6 text-center">
              <img src={image} width="400vh" alt="Abhinav Sahu" className="profile-img" />
            </div>
          </div>
        </div>
      </div>


      {/* <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div> */}


      <div id="about">
        <About />
      </div>
    </div>
  );
}
