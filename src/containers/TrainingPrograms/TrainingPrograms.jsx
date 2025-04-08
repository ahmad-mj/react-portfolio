import React from "react";
import content from "../../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPeace,
  faPause,
  faArrowRightToBracket,
  faPersonWalking,
  faVolumeMute,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const iconMap = {
  faHandPeace,
  faPause,
  faArrowRightToBracket,
  faPersonWalking,
  faVolumeMute,
  faBan,
};

const TrainingPrograms = () => {
  const trainingPrograms = content.trainingPrograms;

  return (
    <section id="training" className="skills-section">
      <h2>Training Programs</h2>
      <div className="box">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="skill-category">
            <h3>{program.category}</h3>
            <div className="skills">
              {program.skills.map((skill, i) => (
                <div key={i} className="skill">
                  <FontAwesomeIcon icon={iconMap[skill.icon]} />
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

export default TrainingPrograms;
