import React from "react";
const HeroSection = () => {
return(
    <div className="hero-section">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Welcome to My Website</h1>
        <p>Learn more about me and my work.</p>
        <div className="button-container">
          <button className="btn contact-button">Contact Me</button>
          <button className="btn cv-button">See CV</button>
        </div>
      </div>
    </div>
    <div className="hero-image">
    <img src="./img/hero_img.jpg" alt="Hero Section" />
    </div>
  </div>
    )
}
export default HeroSection;