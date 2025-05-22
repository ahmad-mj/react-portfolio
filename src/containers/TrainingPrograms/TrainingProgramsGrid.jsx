import React, { useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const TrainingProgramsGrid = ({
  lang = "en",
  heading = "Training Programs",
  clickable = false,
  onClick,
  limit
}) => {
  const trainingPrograms = useTranslation(lang).trainingPrograms;

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const programsToDisplay = limit
    ? trainingPrograms.slice(0, limit)
    : trainingPrograms;

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsToDisplay.map((program, index) => {
            const content = (
              <div className="group" data-aos="fade-up">
                <div className="overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title || "Program Image"}
                    className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
                <p className="text-gray-600">{program.category}</p>
                <div className="mt-2">
                  {program.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-block text-sm text-gray-500 mr-2"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );

            if (clickable && onClick) {
              return (
                <div
                  key={index}
                  onClick={() => onClick(program)}
                  className="cursor-pointer"
                >
                  {content}
                </div>
              );
            }

            if (clickable) {
              return (
                <Link to="/training-programs" key={index}>
                  {content}
                </Link>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsGrid;
