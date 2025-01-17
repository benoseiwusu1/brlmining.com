import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <Hero
        title="About the Company"
        background="https://images.pexels.com/photos/8487333/pexels-photo-8487333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        description="Breakthrough Resources Ltd. is a forward-thinking junior exploration and development company dedicated to unlocking the full potential of our flagship Sewum Gold Project. Located in the Aowin district of Ghana's Western North Region, the Sewum Gold Project spans approximately 0.63 square kilometers and is situated in one of West Africa's most prolific gold mining areas."
      />
      <About />
    </section>
  );
};

export default AboutPage;
