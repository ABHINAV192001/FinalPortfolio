import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active-tab" : "");

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
              <a className={`nav-link ${isActive("/")}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Internship">Internship</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Certification">Certification</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
