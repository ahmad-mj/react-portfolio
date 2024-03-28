import React from "react";
import "./styles.scss";
const Resume = () => {
  const webAppServices = [
    {
      title: "Planning",
      description:
        "I specialize in analyzing, sketching, and building a roadmap for your application. By thoroughly understanding your requirements and goals, I create a comprehensive plan to guide the development process.",
      image: "https://via.placeholder.com/300x200?text=Planning",
    },
    {
      title: "Architecting",
      description:
        "I excel in architecting web applications by defining their main sectors, areas, services, and user interfaces. With a focus on scalability and maintainability, I ensure that the architecture meets your project's needs.",
      image: "https://via.placeholder.com/300x200?text=Architecting",
    },
    {
      title: "Coding",
      description:
        "I write testable, maintainable, and scalable code to bring your application to life. Leveraging best practices and modern technologies, I implement robust solutions that adhere to industry standards.",
      image: "https://via.placeholder.com/300x200?text=Coding",
    },
    {
      title: "Testing",
      description:
        "I conduct thorough testing throughout the development process, including functional, integration, and automated tests. By ensuring the reliability and stability of your application, I guarantee a seamless user experience.",
      image: "https://via.placeholder.com/300x200?text=Testing",
    },
    {
      title: "Deploying",
      description:
        "I specialize in continuous integration and delivery, ensuring a smooth transition from development to deployment. By automating the deployment process, I facilitate rapid delivery of your application to end customers.",
      image: "https://via.placeholder.com/300x200?text=Deploying",
    },
  ];

  return (
    <section id="web-apps" className="web-apps-section">
      <h2>Building Web Apps</h2>
      <div className="web-apps-container">
        {webAppServices.map((service, index) => (
          <div key={index} className="web-app-service">
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="text-wrapper">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
