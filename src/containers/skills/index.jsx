import {React,  useEffect}  from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // Define skill categories with their respective skills and icons
  const skillsData = [
    { name: "HTML", icon: faHtml5, categories: ["Front-End"] },
    { name: "CSS", icon: faCss3Alt, categories: ["Front-End"] },
    { name: "Sass", icon: faSass, categories: ["Front-End", "Dev-Tools"] },
    { name: "Bootstrap", icon: faBootstrap, categories: ["Front-End"] },
    { name: "JavaScript", icon: faJs, categories: ["Front-End", "Back-End"] },
    { name: "React", icon: faReact, categories: ["Front-End", "Back-End"] },
    // Add more and expand categories as needed
  ];
  const skillCategories = [
    {
      category: "Front-End",
      skills: skillsData,
    },
    {
      category: "Back-End",
      skills: skillsData,
    },
    {
      category: "Data-Base",
      skills: skillsData,
    },
    {
      category: "Dev-Ops/deploy",
      skills: skillsData,
    },
    {
      category: "Dev-Tools",
      skills: skillsData,
    },
    {
      category: "Team Management",
      skills: skillsData,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="box">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" data-aos="fade-up">
            <h3>{category.category}</h3>
            <div className="skills">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill">
                  <FontAwesomeIcon icon={skill.icon} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
