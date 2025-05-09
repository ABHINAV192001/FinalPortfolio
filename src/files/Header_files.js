
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active-tab" : "");
  function setcolor(color) {
    if (color === "h") {

      const color = document.getElementById("h");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);


    } else if (color === "a") {

      const color = document.getElementById("a");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);


    } else if (color === "e") {

      const color = document.getElementById("e");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);
    } else if (color === "s") {

      const color = document.getElementById("s");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);
    } else if (color === "p") {

      const color = document.getElementById("p");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);
    } else if (color === "c") {

      const color = document.getElementById("c");
      color.style.color = "black";
      setTimeout(() => {
        color.style.color = "gray";
      }, 3000);
    }
  }
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 shadow-sm fixed-top">
        <Link className="navbar-brand fw-bold" href="#">Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${isActive("/")}`} id="h" onClick={() => setcolor("h")} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a" onClick={() => setcolor("a")} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="e" onClick={() => setcolor("e")} href="#Education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="i" onClick={() => setcolor("i")} href="#Internship">Internship</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="s" onClick={() => setcolor("s")} href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="p" onClick={() => setcolor("p")} href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="c" onClick={() => setcolor("c")} href="#Certification">Certification</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
