// src/components/About.tsx
import React from "react";
import Hero from "./Hero";
import AboutCard from "./AboutCard";
import RssFeed from "./RssFeed";

const About: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-20 my-12 leading-relaxed">
        <p>
          BRL is committed to ensuring the safe and efficient operation of its
          projects, and has recorded impressive results in its work on this
          project. BRL seeks for projects with the potential to be brought to
          advanced development stage and create value for shareholders. The
          Company’s plan is to build a portfolio of feasible mining prospects in
          Ghana and other African Countries and bring them to their full
          economic potential through JV partnerships. We will approach all our
          objectives in a socially and environmentally responsible manner with
          the aim of replicating best industry practices that the relevant
          parties can be proud of.
        </p>
        <p>
          Our primary focus is on expanding and validating the substantial gold
          resources at Sewum, which feature high-grade mineralization both at
          surface and underground. We are committed to enhancing our resource
          base and optimizing the project's potential through ongoing
          exploration and development activities.
        </p>
        <p className="mt-6">
          Our primary focus is on expanding and validating the substantial gold
          resources at Sewum, which feature high-grade mineralization both at
          surface and underground. We are committed to enhancing our resource
          base and optimizing the project's potential through ongoing
          exploration and development activities.
        </p>
      </div>
      <div className="w-full mx-auto px-4 sm:px-4 md:px-24 py-12 flex flex-col gap-y-20">
        <AboutCard
          title="A Trusted Partner"
          description="Breakthrough Resources Ltd. is dedicated to maximizing shareholder value while adhering to the highest standards of environmental, social, and corporate governance (ESG). We integrate these principles into every aspect of our operations, ensuring that our projects contribute positively to local communities and the environment. Our Board of Directors are vigilant in exploring potential strategic opportunities and will promptly disclose any significant developments. In the meantime, we remain focused on seeking out and evaluating opportunities that align with our growth strategy and offer value to our shareholders. Breakthrough Resources Ltd. is positioned for continued success and growth through its strategic exploration and development efforts. "
          image="/images/pro2.jpg"
          isButton
        />
      </div>
      <RssFeed />
    </section>
  );
};

export default About;
