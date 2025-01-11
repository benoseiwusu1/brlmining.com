// src/components/Section.tsx
import React from "react";
import DownloadCard from "./DownloadCard";
import Link from "next/link";

type SectionProps = {
  title: string;
  points: {
    text: string;
    subPoints?: string[];
  }[];
};

const Section: React.FC<SectionProps> = ({}) => {
  return (
    <div className="mb-12 w-full">
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl font-bold text-grey-800">{title}</h2>
        <Link
          href={viewAllLink}
          className="text-primary underline text-xs mt-2"
        >
          SEE ALL {title.toUpperCase()}
        </Link>
      </div>
      <div className="flex gap-6">
        {items.map((item, index) => (
          <DownloadCard
            key={index}
            title={item.title}
            downloadLink={item.downloadLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
