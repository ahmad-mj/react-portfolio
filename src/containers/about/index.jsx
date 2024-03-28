import React from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hello! I'm Ahmad, a passionate Full Stack Developer with a focus on creating efficient, scalable, and user-friendly web applications. With a background in [Your Field of Study] and [Number of Years] years of professional experience, I've honed my skills in both front-end and back-end development.
        </p>
        <p>
          My journey in web development started with a fascination for crafting interactive and visually appealing websites. Over time, I've expanded my expertise to encompass various technologies and frameworks, including React.js, Node.js, Express.js, and MongoDB, among others.
        </p>
        <p>
          As a Full Stack Developer, I thrive on turning ideas into reality. Whether it's designing elegant user interfaces, architecting robust backend systems, or optimizing database performance, I'm dedicated to delivering high-quality solutions that meet and exceed client expectations.
        </p>
        <p>
          What sets me apart is my commitment to continuous learning and staying updated with the latest trends and best practices in web development. I'm always eager to explore new technologies and methodologies, ensuring that my projects are at the forefront of innovation.
        </p>
        <p>
          Beyond coding, I enjoy collaborating with cross-functional teams, brainstorming creative solutions, and tackling challenges head-on. My goal is not just to write code, but to solve problems and create meaningful experiences that resonate with users.
        </p>
        <p>
          When I'm not coding, you can find me Working with wood and clay, or simply exploring the great outdoors. I believe in maintaining a healthy work-life balance to recharge and stay inspired.
        </p>
        <p>
          Thank you for taking the time to learn more about me. If you're interested in working together or have any questions, feel free to reach out through my <Link to='Contact' >[Contact Page/Email/LinkedIn]</Link>, I'd love to connect!
        </p>
      </div>
    </div>
  );
};

export default About;
