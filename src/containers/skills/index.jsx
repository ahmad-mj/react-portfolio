import React from "react";
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

const Skills = () => {
  // Define skill categories with their respective skills and icons
  const skillCategories = [
    {
      category: "Front-End",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
    {
      category: "Back-End",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
    {
      category: "Data-Base",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
    {
      category: "Dev-Ops/deploy",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
    {
      category: "Dev-Tools",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
    {
      category: "Team Management",
      skills: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs },
        { name: "ES6/ES7", icon: faJs },
        { name: "React", icon: faReact },
        { name: "React Hooks/Best Practices", icon: faReact },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="box">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
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
