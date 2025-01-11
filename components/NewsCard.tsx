import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

type NewsCardProps = {
  categories?: string[];
  date: string;
  title: string;
  imageUrl?: string;
  link?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  categories,
  date,
  title,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden md:w-[370px] h-[380px]">
      <div className="flex justify-center h-[210px] relative mb-4 bg-primary">
        <img src={(imageUrl && imageUrl) || ""} alt="" className="w-full" />
        <span className="text-xs font-semibold uppercase text-grey-500 bg-grey-200 py-2 absolute bottom-0 left-4 bg-grey px-3">
          {categories && categories[0]}
        </span>
      </div>

      {/* Content Section */}
      <div className="px-4 flex flex-col gap-y-4 justify-between">
        <p className="text-xs text-grey-500 mt-1">{date}</p>
        <h3 className="text-sm font-bold mt-1">{title}</h3>
        <a
          target="blank"
          href={link}
          className="text-sm font-bold text-primary hover:text-black mt-6 hover:underline transition-all duration-150 w-max"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
