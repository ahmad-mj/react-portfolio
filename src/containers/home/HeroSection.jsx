import React from "react";
import { useTranslation } from '../../hooks/useTranslation';

const HeroSection = ({ lang = 'en'}) => {
const t = useTranslation(lang).hero;


return(
  <section className="hero-section">
  <div className="hero-content">
    <div className="hero-text">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <div className="button-container">
        <button onClick={() => window.location.href = "#contact"}>{t.cta}</button>
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