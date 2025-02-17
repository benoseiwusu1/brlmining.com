"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./ProjectDetails.css";
import Info from "./Info";
import ProjectCard from "./ProjectCard";

type Section = {
  title: string;
  content: string;
  image?: string;
};

type ProjectDetailsProps = {
  title: string;
  location: string;
  sections: Section[];
  prevProject: { name: string; path: string };
  nextProject: { name: string; path: string };
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  location,
  sections,
  // prevProject,
  // nextProject,
}) => {
  const [openSection, setOpenSection] = useState<string>(sections[0].title);

  const handleToggle = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? "" : sectionTitle);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-full mx-auto font-primary bg-white md:w-4/6 pb-4 mb-5 border border-gray-600">
        <div className="bg-white mb-8 py-8 px-8 pt-16 pb-6">
          <Link href="/projects" className="text-primary text-sm">
            &lt;<span className="ml-2">ALL PROJECTS</span>
          </Link>
          <h1 className="text-4xl font-semibold mt-2 uppercase">{title}</h1>
          <p className="text-lg mt-4">{location}</p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="my-4">
            <button
              onClick={() => handleToggle(section.title)}
              className={`w-full flex justify-between items-center px-6 rounded text-xl font-semibold ${
                section.title === "Prime Location" ||
                section.title === "Exploration Upside" ||
                section.title === "Infrastructure and Proximity"
                  ? "bg-[#e1ddd4] py-8"
                  : "bg-none py-4"
              }`}
            >
              {section.title}
              {openSection === section.title ? (
                <Icon icon="mdi:chevron-down" className="text-xl" />
              ) : (
                <Icon icon="mdi:chevron-right" className="text-xl" />
              )}
            </button>
            {openSection === section.title && (
              <div
                className={`p-6 ${
                  section.title === "Prime Location" ||
                  section.title === "Exploration Upside" ||
                  section.title === "Infrastructure and Proximity"
                    ? "bg-[#e1ddd4]"
                    : "bg-white"
                }`}
              >
                <p className="leading-loose">{section.content}</p>
                {section.image && (
                  <img src={section.image} className="h-[700px] mx-auto" />
                )}
              </div>
            )}
          </div>
        ))}

        {/* Navigation */}
        {/* <div className="flex justify-between mt-16 px-6 text-sm uppercase">
          <Link href={prevProject.path} className="text-primary">
            &lt; PREV: {prevProject.name}
          </Link>
          <Link href={nextProject.path} className="text-primary">
            NEXT: {nextProject.name} &gt;
          </Link>
        </div> */}
      </div>
      {/* <News /> */}
      <ProjectCard />
      {/* <Info /> */}
    </div>
  );
};

export default ProjectDetails;
