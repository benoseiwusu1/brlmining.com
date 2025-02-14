import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const explore = [
  {
    title: "Underground Development",
    description:
      "Progressing with shaft sinking and lateral expansion at the Sewum mine to unlock further high-grade gold resources with minimal capital investment. This development leverages the existing infrastructure of the historic underground mine",
    icon: "game-icons:underground-cave",
  },
  {
    title: "Exploration",
    description:
      "Targeting areas with significant exploration potential, especially the West Block. This region has shown promise through auger anomalies and surface geochemistry, and we are advancing these prospects with drill programs aimed at expanding and upgrading resources",
    icon: "material-symbols-light:explore-rounded",
  },
  {
    title: "Resource Upgrading",
    description:
      "Launching an extensive drilling campaign to upgrade the underground resource over the next two years. With an estimated budget of US$ 4.5 million, this phase will include drilling, geotechnical studies, and orebody characterization, ultimately leading to an updated Mineral Resource Estimate (MRE) in H1 2025",
    icon: "carbon:group-resource",
  },
  {
    title: "Feasibility Study (FS)",
    description:
      "Following the updated MRE, we will begin a Feasibility Study (FS) to assess the long-term viability of the project. The FS, anticipated to be completed in H2 2025, will provide essential insights into the project's future potential",
    icon: "arcticons:kanji-study",
  },
  {
    title: "Additional Drilling",
    description:
      "Expanding our drilling efforts into other high-priority zones, particularly the Oteng Block, which shows promise for resource expansion. This area will be a key focus for ongoing exploration and resource growth",
    icon: "carbon:drill-down",
  },
  {
    title: "Funding and Financial Strategy",
    description:
      "Securing continued funding to maintain project momentum and progress through the Pre-Feasibility Study (PFS) and beyond. We are committed to pursuing funding opportunities that will support Sewum’s growth and its potential as a scalable, high-margin gold production asset",
    icon: "mingcute:refund-dollar-line",
  },
];

const ProjectCard: React.FC = () => {
  const [openSection1, setOpenSection1] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (openSection1 && section1Ref.current) {
      setSectionHeight(section1Ref.current.scrollHeight);
    } else {
      setSectionHeight(0);
    }
  }, [openSection1]);

  return (
    <section className="py-12 bg-grey">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl max-w-lg mx-auto">
            Current Development and Exploration Strategy
          </h3>
          <p className="text-center max-w-3xl mx-auto leading-relaxed my-6">
            Breakthrough Resources Ltd. is advancing exploration and development
            efforts at the Sewum Gold Project, a high-potential asset located in
            Ghana’s Western North Region, specifically the Aowin District. Our
            immediate focus is on expanding the defined mineral resource at the
            historic Sewum underground mine, while simultaneously exploring new
            high-priority targets. Key elements of our current strategy include:
          </p>
        </div>
        <button
          className="flex items-center justify-between w-max bg-primary text-white px-8 py-3 rounded-full mb-4 mx-auto"
          onClick={() => setOpenSection1(!openSection1)}
        >
          <span>{openSection1 ? "Hide strategies" : "See strategies"}</span>
          <Icon
            icon={openSection1 ? "mdi:chevron-up" : "mdi:chevron-down"}
            fontSize={24}
          />
        </button>
        <div
          ref={section1Ref}
          className="overflow-hidden transition-all duration-500"
          style={{
            height: `${sectionHeight}px`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-9 gap-x-6 my-12 ">
            {explore.map(({ title, description, icon }, index) => (
              <div
                className="bg-white rounded shadow-lg md:w-[370px] h-[380px] relative"
                key={index}
              >
                <div className="bg-primary w-max p-4 rounded-full mx-auto z-10 absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <Icon icon={icon} fontSize={26} color="white" />
                </div>
                <div className="px-7 flex flex-col gap-y-4 pt-12 text-center">
                  <h3 className="text-lg mb-3">{title}</h3>
                  <p className="text-base leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
