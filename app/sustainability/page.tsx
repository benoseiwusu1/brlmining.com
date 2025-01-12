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
      "At Breakthrough, diversity and inclusion are fundamental to our values as we progress with the Sewum Gold Project. We are committed to fostering a workplace that supports the health, safety, and well-being of every team member...",
    bgColor: "bg-gray-100",
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Health & Safety",
    description:
      "Our objective for the Sewum Gold Project is to eliminate workplace injuries and illnesses, extending the same high standards of health, safety, and well-being to both our employees and contractors...",
    bgColor: "bg-white",
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Value Creation Connections",
    description:
      "We are working to make mining sustainable by creating value throughout our chain as one of our purposes, and innovation and collaboration are the essential principles to achieve this...",
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
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedSection?.title}</SheetTitle>
            <SheetDescription>{selectedSection?.description}</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Sustainability;
