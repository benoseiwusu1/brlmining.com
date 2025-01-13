"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Hero from "../../components/Hero";
import InfoCard from "@/components/InfoCard";
import RssFeed from "@/components/RssFeed";

const InvestorCentreOverview: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    },
    {
      title: "Exploration Upside",
      points: [
        {
          text: "The Sewum Gold Project shows considerable potential for growth:",
          subPoints: [
            "Depth Potential: Resource remains open at depth with high-grade shoots offering promising underground targets.",
            "Surface Exploration: Historical surface exploration yielded encouraging drill results, indicating significant mineralization at depth and along strike.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-deep">
      <Hero
        title="Investors"
        background="/images/report-bg.jpg"
        description="A Strategic Investment in a Prolific Gold Belt and Emerging Gold Mining District. Breakthrough Resources Limited (BRL) presents a unique investment opportunity through our flagship asset, the Sewum Gold Project. Located in the Aowin district of Ghana’s Western North Region, this advanced-stage exploration project is positioned within one of West Africa’s most prolific gold belts. The Sewum Gold Project not only overlaps the historic high-grade underground mine but also sits in a region celebrated for its substantial gold deposits."
      />
      <h3 className="text-4xl mx-auto max-w-xl text-center my-12">
        Why Invest in Breakthrough Resources Limited?
      </h3>
      <div className="flex flex-col md:flex-row gap-x-4 container mx-auto px-4 sm:px-4 md:px-20 md:py-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <InfoCard key={index} title={card.title} points={card.points} />
          ))}
        </div>
      </div>
      <InvestorCentreOverview />
      <RssFeed />
    </div>
  );
};

export default Investors;
