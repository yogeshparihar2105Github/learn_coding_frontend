import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-logo">Learn Coding</a>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://github.com/yogeshparihar2105Github" target="_blank" rel="noopener noreferrer">👩‍💻 Github</a>
          <a href="https://x.com/Yogeshp25207476" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          <a href="https://www.linkedin.com/in/yogesh-parihar-56a30816b/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Learn Coding. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
