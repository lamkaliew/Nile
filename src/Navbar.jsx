import React, { useState } from "react";
import "./Navbar.css"; // Add your CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and School Name */}
      <div className="navbar-brand">
        <span className="logo">NK</span>
        <span className="school-name">NileKing<br/> Web School</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li className="dropdown">
        <a href="/courses">Courses</a>
          <ul className="dropdown-menu">
            <li><a href="/python">PHP</a></li>
            <li><a href="/javascript">JavaScript</a></li>
            <li><a href="/java">MySQL</a></li>
            <li><a href="/cpp">React js</a></li>
            <li><a href="/html-css">HTML & CSS</a></li>
            <li><a href="/sql">SQL</a></li>
            <li><a href="/react">React JS</a></li>
            <li><a href="/nodejs">Node.js</a></li>
          </ul>
        </li>
        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <button className="cta-button">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;