import React from "react";
const HeroSection = () => {
return(
  <section className="hero-section">
  <div className="hero-content">
    <div className="hero-text">
      <h1>Welcome to My Website</h1>
      <p>Learn more about me and my work.</p>
      <div className="button-container">
        <button onClick={() => window.location.href = "#contact"}>Contact Me</button>
        <button onClick={() => window.open("/resume.pdf", "_blank")}>See CV</button>
      </div>
    </div>
  </div>
  <div className="hero-image">
    <img src="img/hero_img.jpg" alt="Ahmad" />
  </div>
</section>
    )
}
export default HeroSection;