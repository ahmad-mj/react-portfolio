import React from 'react';
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ahmad-al-mujawer/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ahmad-mj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
     <p>© 2024 Ahmad Al Mujawer. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
