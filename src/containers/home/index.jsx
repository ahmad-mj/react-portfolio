import React from "react";
import HeroSection from "./HeroSection";
import "./styles.scss";
import Skills from "../skills";
import Resume from "../resume";

const Home = () => {
return(
    <>
        <HeroSection/>
        <Skills/>
        <Resume/>
    </>
    )
}
export default Home;