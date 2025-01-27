import React from "react";
import Hero from "../../components/Hero";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <section>
      <Hero
        title="Contact"
        background="https://images.unsplash.com/photo-1560408677-b4af8a53052e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
