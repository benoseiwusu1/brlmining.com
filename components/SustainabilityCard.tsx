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
    <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
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
          <Button
            variant="secondary"
            onClick={onOpen}
            className="mt-auto w-full rounded-full bg-primary text-white hover:bg-primary-dark text-xs uppercase"
          >
            Read More
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default SustainabilityCard;
