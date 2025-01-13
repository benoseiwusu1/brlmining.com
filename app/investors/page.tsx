"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hero from "../../components/Hero";
import InfoCard from "@/components/InfoCard";
import RssFeed from "@/components/RssFeed";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { spawn } from "child_process";

const InvestorCentreOverview: React.FC = () => {
  return (
    <div className="bg-deep mx-auto px-4 py-16 sm:px-6 md:px-24 font-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold">
                121 Mining Investment Frankfurt – 16-17 November 2022
              </h3>
              <p className="text-sm text-gray-500 mb-1">October 31, 2022</p>
            </div>
          </div>
          <Link
            href="/all-events"
            className="text-primary font-semibold underline mt-4 inline-block text-sm"
          >
            ALL EVENTS
          </Link>
        </div>

        {/* Media Section */}
        <div className="md:border-l md:pl-8 border-black">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Media</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Lithoquest – a promising gold explorer in high grade BIFs
              </h3>
              <p className="text-sm text-gray-500 mb-1">February 5, 2022</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Lithoquest Resources bulks up its portfolio by acquiring two
                district-scale gold projects in Ontario
              </h3>
              <p className="text-sm text-gray-500 mb-1">July 23, 2021</p>
            </div>
          </div>
          <Link
            href="/all-media"
            className="text-primary font-semibold underline mt-4 inline-block text-sm"
          >
            ALL MEDIA
          </Link>
        </div>
      </div>
    </div>
  );
};

const Investors: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  console.log(selectedCard);

  const cards = [
    {
      title: "Strategic Location",
      points: [
        {
          text: "The Sewum Gold Project is situated in the Sefwi belt, renowned for its rich gold endowment. This belt is home to several major gold deposits and projects, including:",
          subPoints: [
            "Newmont’s Ahafo: 10 million ounces (Moz)",
            "Newcore Gold’s Enchi: 1.08 Moz",
            "Asante Gold’s Bibiani: 1 Moz (with historic production of 5 Moz)",
            "Asante Gold’s Chirano: 3.5 Moz",
          ],
        },
      ],
      image: "/images/hero3.jpg",
    },
    {
      title: "High-Grade Resource",
      points: [
        {
          text: "The project boasts an inferred gold resource totaling 355,000 ounces, with:",
          subPoints: [
            "Open Pit Resource: 25,000 ounces at 0.68 g/t Au",
            "Underground Resource: 330,000 ounces at 7.1 g/t Au",
          ],
        },
      ],
      image: "/images/bg.jpg",
    },
    {
      title: "Strong Economic Potential",
      points: [
        {
          text: "Our recent Preliminary Economic Assessment (PEA) highlights the project's robust financial metrics:",
          subPoints: [
            "Life of Mine (LOM): 9 years",
            "After-Tax Net Present Value (NPV) at 9.5%: USD 80.6 million",
            "Internal Rate of Return (IRR): 42%",
          ],
        },
      ],
      image: "/images/hero2.jpg",
    },
    {
      title: "Exploration Upside",
      points: [
        {
          text: "The Sewum Gold Project shows considerable potential for growth:",
          subPoints: [
            "Depth Potential: Resource remains open at depth with high-grade shoots offering promising underground targets.",
            "Surface Exploration: Historical surface exploration yielded encouraging drill results, indicating significant mineralization at depth and along strike. Highlights from recent drill holes include: 8 meters at 0.43 g/t Au from 4 to 12 meters (Hole SWRC085), 1m at 0.66 g/t Au from 0 to 1m (Hole SWRC087), 2m at 0.38 g/t Au from 60 to 62m (SWRC089).",
          ],
        },
      ],
      image: "/images/hero1.jpg",
    },
    {
      title: "Proximity to Key Resources",
      points: [
        {
          text: "Located 25 km from Enchi, which provides logistical support and enhances operational efficiency.",
        },
      ],
      image: "/images/bg.jpg",
    },
    {
      title: "Experienced Management Team",
      points: [
        {
          text: "BRL’s leadership team brings extensive experience in advancing mining projects from exploration to production, with a proven track record across Africa.",
        },
      ],
      image: "/images/hero3.jpg",
    },
  ];

  return (
    <div className="">
      <Hero
        title="Investors"
        background="/images/report-bg.jpg"
        description="A Strategic Investment in a Prolific Gold Belt and Emerging Gold Mining District. Breakthrough Resources Limited (BRL) presents a unique investment opportunity through our flagship asset, the Sewum Gold Project. Located in the Aowin district of Ghana’s Western North Region, this advanced-stage exploration project is positioned within one of West Africa’s most prolific gold belts. The Sewum Gold Project not only overlaps the historic high-grade underground mine but also sits in a region celebrated for its substantial gold deposits."
      />
      <h3 className="text-4xl mx-auto max-w-3xl text-center my-16 uppercase">
        Why Invest in Breakthrough Resources Limited?
      </h3>
      <div className="container mx-auto px-4 md:px-20">
        <Carousel>
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem className="md:basis-1/3 lg:basis-1/3" key={index}>
                <div className="relative group overflow-hidden rounded-md">
                  <Card className="relative group overflow-hidden rounded-md">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${card.image})`,
                      }}
                    />

                    {/* Semi-Transparent Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:bg-opacity-85 z-10 transition duration-150" />

                    {/* Card Content */}
                    <CardContent className="relative z-20 flex flex-col items-center justify-between h-64 p-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold text-white text-center w-[300px] uppercase text-bold ">
                          {card.title}
                        </span>
                        {card.points.map(({ text }, index) => (
                          <span
                            className="text-white text-center mt-2"
                            key={index}
                          >
                            {text.slice(0, 150)} ...
                          </span>
                        ))}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="bg-transparent text-white border border-primary px-6 py-2 text-xs font-semibold rounded shadow uppercase"
                            onClick={() => setSelectedCard(card)}
                          >
                            Learn More
                          </button>
                        </DialogTrigger>
                        <DialogContent className="md:max-w-[50vw]">
                          <DialogTitle className="text-xl uppercase mb-4">
                            {selectedCard?.title}
                          </DialogTitle>

                          {/* Iterate through points */}
                          {selectedCard?.points.map(
                            (point: any, index: number) => (
                              <div key={index} className="mb-4">
                                <p className="text-base mb-2 leading-relaxed">
                                  {point.text}
                                </p>
                                {/* Iterate through subPoints */}
                                {point.subPoints && (
                                  <ul className="list-disc pl-5 text-base">
                                    {point.subPoints.map(
                                      (subPoint: string, subIndex: number) => (
                                        <li
                                          key={subIndex}
                                          className="mb-1 leading-relaxed"
                                        >
                                          {subPoint}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            )
                          )}
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <InvestorCentreOverview /> */}
      <div className="bg-primary w-full h-56 mt-12 p-6 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-20 text-white">
          <h3 className="text-2xl text-center">
            Breakthrough Resources Limited is well positioned to leverage the
            Sewum Gold Project's strategic assets and exploration potential to
            deliver substantial returns.
          </h3>
        </div>
      </div>
      <RssFeed />
    </div>
  );
};

export default Investors;
