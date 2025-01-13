// src/pages/Contact.tsx
import React from "react";
import Hero from "../../components/Hero";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <section>
      <Hero title="Contact" background="/images/contact-bg.jpg" />
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
