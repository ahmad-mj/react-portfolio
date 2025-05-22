import React from "react";
import HeroSection from "./HeroSection";
import TrainingProgramsGrid from "../TrainingPrograms/TrainingProgramsGrid";

const Home = () => {
return(
    <>
        <HeroSection/>
        <TrainingProgramsGrid title="Work" clickable={true} limit={7}/>
        {/* <Resume/> */}
    </>
    )
}
export default Home;