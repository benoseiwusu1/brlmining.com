// src/pages/Contact.tsx
import React from "react";
import Hero from "../../components/Hero";
import ContactDetails from "@/components/ContactDetails";

interface InputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  required,
  type = "text",
  name,
}) => (
  <div className="mb-4">
    <label className="block text-xs mb-2 uppercase">
      {label}
      {required && <span className="text-red-500 text-xs"> (REQUIRED)</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded p-2 focus:outline-none focus:border-primary text-sm border border-black"
      required={required}
    />
  </div>
);

const Contact: React.FC = () => {
  return (
    <section>
      <Hero title="Contact" background="/images/contact-bg.jpg" />
      <ContactDetails />
      <div className=""></div>
    </section>
  );
};

export default Contact;
