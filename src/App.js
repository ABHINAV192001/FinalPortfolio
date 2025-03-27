import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./files/Header_files";
import Home from "./files/Home";
// import About from "./files/About";
// import Education from "./files/Education";
import Footer from "./files/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./files/css/social_icons.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header title1="ABOUT" title2="PROJECT" title3="RESUME" title4="GITHUB" title5="LINKDIN" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} /> */}
        </Routes>


        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abhinav-sahu-790646296" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://leetcode.com/u/abhinavsahu120/" className="leetcode" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" width="40vh" alt="LeetCode" className="leetcode-icon" />
          </a>

          <a href="https://github.com/ABHINAV192001" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://drive.google.com/file/d/1tGb8tzcgc6DuI-IFxRcpJBXbPt1xZTbI/view?usp=drive_link" className="resume" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
        <div id="footer">
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
