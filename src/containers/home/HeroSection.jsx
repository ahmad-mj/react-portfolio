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
                <p className="description">
                     with experience in building responsive and scalable web applications.
                </p>
            </div>
            <button className="btn btn_primary"></button>
        </div>
        <div className="hero_section_img">
            <img src="" alt="Hero Section" />
        </div>
    </div>
    )
}
export default HeroSection;