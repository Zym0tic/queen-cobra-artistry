import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <div className="text-center mt-10">
    <h1 className="text-4xl">Contact Us</h1>
    <p className="mt-4">We would love to hear from you. Please fill out the form below.</p>
    <div className="mt-6">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
