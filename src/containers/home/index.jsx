import React from "react";
import HeroSection from "./HeroSection";
import Skills from "../TrainingPrograms/TrainingPrograms";
import Resume from "../resume";
import TrainingPrograms from "../TrainingPrograms/TrainingPrograms";

const Home = () => {
return(
    <>
        <HeroSection/>
        <TrainingPrograms title="Work" clickable={true} limit={7}/>
        {/* <Resume/> */}
    </>
    )
}
export default Home;