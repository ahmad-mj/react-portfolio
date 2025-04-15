import { React, useEffect } from "react";
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
import { useTranslation } from "../../hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

const iconMap = {
  faHandPeace,
  faPause,
  faArrowRightToBracket,
  faPersonWalking,
  faVolumeMute,
  faBan,
};

const TrainingPrograms = ({ lang = "en" }) => {
  const trainingPrograms = useTranslation(lang).trainingPrograms;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="training" className="skills-section">
      <h2>Training Programs</h2>
      <div className="box">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="skill-category" data-aos="fade-up">
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
