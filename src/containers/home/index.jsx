import React from "react";
import HeroSection from "./HeroSection";
import "./styles.scss";
import Skills from "../skills";
import Resume from "../resume";
import Footer from "./Fotter";

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