import React from 'react';
import ReactPlayer from 'react-player';
import Education from './Education';

export default function About() {
  return (
    <div className="container text-center py-5" id="about">
      <br /><br />
      <h1 className="mb-4 fw-bold text-success">Here is My Short Intro</h1>
      <div className="d-flex justify-content-center">
        <ReactPlayer 
          url="https://youtu.be/QZPVr2HacQA" 
          width="70%" 
          height="400px" 
          controls
        />
      </div>


      <div id="Education">
              <Education />
            </div>
    </div>
  );
}