import React from "react";
import HeroSection from "./HeroSection";
import "./styles.scss";
import Skills from "../TrainingPrograms/TrainingPrograms";
import Resume from "../resume";
import Footer from "./Footer";

const Home = () => {
return(
    <>
        <HeroSection/>
        <Skills/>
        <Resume/>
        <Footer/>
    </>
    )
}
export default Home;