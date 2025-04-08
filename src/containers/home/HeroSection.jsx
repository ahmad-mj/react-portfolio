import React from "react";
import content from '../../content.json';

const HeroSection = () => {
const { title, subtitle, cta } = content.hero;

return(
  <section className="hero-section">
  <div className="hero-content">
    <div className="hero-text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="button-container">
        <button onClick={() => window.location.href = "#contact"}>{cta}</button>
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