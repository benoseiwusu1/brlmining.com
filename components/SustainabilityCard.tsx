import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SustainabilityCard = ({
  section,
  onOpen,
}: {
  section: any;
  onOpen: () => void;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between rounded-none">
      <div className="h-36 w-full">
        <img
          src={section.imageSrc}
          alt={section.title}
          className="w-full h-full object-cover rounded-t"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <CardHeader className="p-4">
          <CardTitle className="font-bold">{section.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex flex-col justify-between flex-grow">
          <CardDescription className="mb-4">
            {section.description.slice(0, 80)}...
          </CardDescription>
          <p
            onClick={onOpen}
            className="mt-auto rounded-full bg-transparent text-primary text-xs uppercase text-left cursor-pointer w-max hover:underline transition-all duration-300"
          >
            Read More
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

export default SustainabilityCard;
