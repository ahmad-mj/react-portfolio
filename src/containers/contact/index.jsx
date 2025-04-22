import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./styles.scss";
import emailConfig from "../../utils/emailConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        form.current,
        {
          publicKey: emailConfig.PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  // const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const sendEmail = (e) => {
  //   e.prevefault();

  //   emailjs
  //     .send(
  //       emailConfig.SERVICE_ID,
  //       emailConfig.TEMPLATE_ID,
  //       formData.current,
  //       emailConfig.PUBLIC_KEY,

  //     )
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS!", result.text);
  //         setSubmitted(true);
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  // };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn_primary">
          Send
        </button>
        {sendEmail && (
          <p className="success-msg">Thanks! I’ll get back to you soon.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
