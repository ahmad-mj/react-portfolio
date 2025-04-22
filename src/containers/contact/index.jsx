import React, { useState } from "react";
import "./styles.scss";
import { sendContactForm } from "../services/contactService";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });

    try {
      const result = await sendContactForm(form);
      setStatus({ success: true, message: result.message });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ success: false, message: error.message });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn_primary">
          Send
        </button>
        {status.message && (
          <p className={status.success ? "success" : "error"}>
            {" "}
            {status.message}{" "}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
