"use client";
import React, { useState } from "react";
import SustainabilityCard from "../../components/SustainabilityCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const sections = [
  {
    imageSrc: "/images/pro1.jpg",
    title: "Our People Commitment",
    description:
      "At Breakthrough, diversity and inclusion are fundamental to our values as we progress with the Sewum Gold Project. We are committed to fostering a workplace that supports the health, safety, and well-being of every team member, ensuring a culture of personal growth, professional development, and job satisfaction.",
    description2:
      "Our diversity and inclusion initiatives aim to achieve measurable targets, including a 30% increase in diverse representation within leadership roles by 2027 and the implementation of quarterly employee engagement surveys to assess satisfaction and inclusivity. We will ensure that our policies are regularly reviewed and updated to reflect evolving best practices in inclusivity.",
    description3:
      "We are dedicated to creating an environment where every team member is empowered to excel and contribute to positive change. This commitment is not only essential for achieving a high-performing organization but also aligns with our long-term vision of sustainability and success. By celebrating individual contributions and prioritizing diversity in every decision and action, we will drive a culture of collective success and foster an environment where inclusion is integral to everything we do.",
    bgColor: "bg-gray-100",
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Health & Safety",
    description:
      "Our objective for the Sewum Gold Project is to eliminate workplace injuries and illnesses, extending the same high standards of health, safety, and well-being to both our employees and contractors. We are committed to adhering to all relevant legislation and maintaining a rigorous approach to these critical aspects.",
    description2:
      "Our dedication is reflected in the oversight provided by our Risk and ESG Board Committee, which meticulously monitors health, safety, and well-being governance and performance throughout the year. We prioritize the welfare of our workforce and partners, ensuring a safe and secure environment for everyone involved in the Sewum Project.",
    bgColor: "bg-white",
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Our community ",
    description:
      "Our commitment to the Sewum Gold Project includes fostering strong, respectful relationships with all stakeholders and the communities we work in. We approach community relations with respect and inclusivity, ensuring transparent, open, and effective engagement to build long-term, sustainable relationships. Our community and stakeholder engagement strategy involves identifying and consulting with all relevant stakeholders. We actively listen to, understand, and respond to community views, concerns, and feedback promptly. We adhere to the principle of free, prior, and informed consent in all interactions with local communities.",
    description2:
      "We are dedicated to respecting cultural heritage values through avoidance strategies and conducting thorough cultural heritage surveys before any ground activities commence. This ensures we identify and protect cultural or heritage sites, allowing us to adjust our activities to avoid these areas. Our focus extends to enriching community lives through partnerships, employment, contracting, and local procurement opportunities. We are committed to sustainable development and upholding fundamental human rights in every aspect of our operations.Our community engagement program aims to mitigate any potential negative impacts while promoting regional sustainable development. We invest in initiatives that address social needs, build capacity, and align with strategic business goals, focusing on three key areas: Education and Youth, Environment, and Community.",
    bgColor: "bg-gray-100",
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Value Creation Connections",
    description:
      "We are working to make mining sustainable by creating value throughout our chain as one of our purposes, and innovation and collaboration are the essential principles to achieve this...",
    bgColor: "bg-gray-100",
  },
];

const Sustainability = () => {
  const [selectedSection, setSelectedSection] = useState<any>(null);

  return (
    <section className="container mx-auto my-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <SustainabilityCard
              key={index}
              section={section}
              onOpen={() => setSelectedSection(section)}
            />
          ))}
        </div>
      </div>

      <Sheet
        open={!!selectedSection}
        onOpenChange={() => setSelectedSection(null)}
      >
        <SheetContent
          style={{
            width: "40vw", // Adjusts width as needed
            maxWidth: "90vw", // Ensures responsiveness
            maxHeight: "100vh", // Limits height to 90% of the viewport
            overflowY: "auto", // Enables vertical scrolling for overflow content
          }}
          className="custom-scrollbar"
        >
          <SheetHeader>
            <SheetTitle className="text-">{selectedSection?.title}</SheetTitle>
            <img
              src={selectedSection?.imageSrc}
              className="h-[300px] rounded object-cover"
            />
            <SheetDescription className="leading-relaxed text-base">
              {selectedSection?.description}
            </SheetDescription>
            <SheetDescription className="leading-relaxed text-base">
              {selectedSection?.description2}
            </SheetDescription>
            <SheetDescription className="leading-relaxed text-base">
              {selectedSection?.description3}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Sustainability;
