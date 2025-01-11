import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type CardProps = {
  title: string;
  points: {
    text: string;
    subPoints?: string[];
  }[];
};

const InfoCard: React.FC<CardProps> = ({ title, points }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 w-full">
      <h3 className="text-primary text-xl mb-4">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index}>
            <span className="text-sm">{point.text}</span>
            {point.subPoints && (
              <ul className="mt-3 text-gray-600 space-y-2">
                {point.subPoints.map((subPoint, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center text-sm gap-x-2"
                  >
                    <Icon
                      icon="material-symbols-light:api-rounded"
                      fontSize={24}
                      color="#79523a"
                    />
                    {subPoint}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
