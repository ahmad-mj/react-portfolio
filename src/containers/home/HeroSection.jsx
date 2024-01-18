import React from "react";
const HeroSection = () => {
return(
    <div id="heroSection" className="hero_section">
        <div className="content_box">
            <div className="content">
                <p className="title">Hey, I'm Ahmad</p>
                <h1 className="hero_section_title">
                    <span className="hero_section_title_color">Full Stack</span>
                    <br />
                    Developer
                </h1>
            </div>
            <button className="btn btn_primary">Get in Touch</button>
            <button className="btn btn_primary">Download CV</button>
        </div>
        <div className="hero_section_img">
            <img src="./img/hero_img.jpg" alt="Hero Section" />
        </div>
    </div>
    )
}
export default HeroSection;