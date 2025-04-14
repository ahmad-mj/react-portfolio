import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Contact = ({ lang = 'en'}) => {
  const { title, email, phone, address } = useTranslation(lang).contact;

  return (
    <section className="contact">
      <h2>{title}</h2>
      <ul>
        <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
        <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
        <li>Address: {address}</li>
      </ul>
    </section>
  );
};

export default Contact;
