import RssFeed from "@/components/RssFeed";
import FlexCard from "../../components/FlexCard";
import Hero from "../../components/Hero";
import News from "../../components/News";

const Projects = () => {
  return (
    <section className="">
      <Hero
        title="Projects"
        description="BRL Mining Exploration is exploring for multimillion-ounce gold deposits on four district scale projects in north-western Ontario, Canada. The projects range from grassroots to the early stages of discovery where the presence of high-grade gold has been confirmed by drilling. Exploration programs will focus on expanding the existing zones of gold mineralization and identifying new targets for discovery drilling."
        background="/images/project-bg.jpg"
      />
      <div className="w-full mx-auto px-4 sm:px-6 md:px-24 py-16">
        <div className="flex flex-col gap-y-12">
          <FlexCard
            title="Sewum Gold Project"
            description="Since acquiring the Sewum project in 2010, Morchekrom Gold Limited, in joint venture with Breakthrough Resources Limited and Lorando Mining Company Limited, has carried out a comprehensive exploration program. This includes geological mapping, digital compilation of historical data, auger geochemistry drilling, underground sampling, topographic surveys, and successful drilling campaigns totaling 2,582 meters. The historical development of the Sewum deposit has involved intermittent activity, with over 170,000 tons of ore mined at an average grade of 15g/t. Noteworthy historical drilling results include intersections of 1.4 meters at 14.87g/t and 2 meters at 18.8g/t. In addition, the property was soil sampled by Leo Shield Exploration in the late 1980s and by Redback/Edgewater Exploration in the mid-2000s. Trenching and pitting programs from these earlier campaigns confirmed gold-in-soil anomalies."
            image="/images/pro2.jpg"
            isButton
            path="/projects/sewum-gold-project"
          />
        </div>
      </div>
      <RssFeed />
    </section>
  );
};

export default Projects;
