import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <Hero
        title="About the Company"
        background="/images/about.jpg"
        description="Breakthrough Resources Ltd. is a forward-thinking junior exploration and development company dedicated to unlocking the full potential of our flagship Sewum Gold Project. Located in the Aowin district of Ghana's Western North Region, the Sewum Gold Project spans approximately 0.63 square kilometers and is situated in one of West Africa's most prolific gold mining areas."
      />
      <About />
    </section>
  );
};

export default AboutPage;
