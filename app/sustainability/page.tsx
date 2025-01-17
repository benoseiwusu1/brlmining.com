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
import Hero from "@/components/Hero";
import RssFeed from "@/components/RssFeed";

const sections = [
  {
    imageSrc:
      "https://images.pexels.com/photos/28906307/pexels-photo-28906307/free-photo-of-construction-workers-in-orange-safety-vests-in-moscow.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    imageSrc:
      "https://images.pexels.com/photos/162540/career-firefighter-relaxing-job-162540.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Health & Safety",
    description:
      "Our objective for the Sewum Gold Project is to eliminate workplace injuries and illnesses, extending the same high standards of health, safety, and well-being to both our employees and contractors. We are committed to adhering to all relevant legislation and maintaining a rigorous approach to these critical aspects.",
    description2:
      "Our dedication is reflected in the oversight provided by our Risk and ESG Board Committee, which meticulously monitors health, safety, and well-being governance and performance throughout the year. We prioritize the welfare of our workforce and partners, ensuring a safe and secure environment for everyone involved in the Sewum Project.",
    bgColor: "bg-white",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Our community ",
    description:
      "Our commitment to the Sewum Gold Project includes fostering strong, respectful relationships with all stakeholders and the communities we work in. We approach community relations with respect and inclusivity, ensuring transparent, open, and effective engagement to build long-term, sustainable relationships. Our community and stakeholder engagement strategy involves identifying and consulting with all relevant stakeholders. We actively listen to, understand, and respond to community views, concerns, and feedback promptly. We adhere to the principle of free, prior, and informed consent in all interactions with local communities.",
    description2:
      "We are dedicated to respecting cultural heritage values through avoidance strategies and conducting thorough cultural heritage surveys before any ground activities commence. This ensures we identify and protect cultural or heritage sites, allowing us to adjust our activities to avoid these areas. Our focus extends to enriching community lives through partnerships, employment, contracting, and local procurement opportunities. We are committed to sustainable development and upholding fundamental human rights in every aspect of our operations.Our community engagement program aims to mitigate any potential negative impacts while promoting regional sustainable development. We invest in initiatives that address social needs, build capacity, and align with strategic business goals, focusing on three key areas: Education and Youth, Environment, and Community.",
    subSection: {
      title: "Working with Local Communities",
      points: [
        "We are hiring locals: the majority of our workforce and our suppliers are from surrounding communities or within the region, contributing to a prosperous community and a skilled workforce.",
        "We maintain strong relations with local communities and have a designated representative to maintain open communications, among other channels to update local stakeholders on activities and gather feedback.",
        "We support local sports and culture: we sponsor fishing derbies, hockey, and curling teams, and donate opportunities that bring cultures together.",
        "We support community infrastructure in many ways, from donating the use of chemicals for the water treatment plant to donating our electricians to maintain the town's power system.",
      ],
    },
    bgColor: "bg-gray-100",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Our Environment",
    description:
      "At Breakthrough Resources, our commitment to the Sewum Gold Project is rooted in environmental responsibility and sustainability. We are dedicated to finding, developing, and operating mines in a manner that prioritizes environmental protection.",
    description2:
      "We apply the precautionary principle across all our exploration and development activities, ensuring we minimize negative environmental impacts and continuously enhance our management practices. Our approach includes strict regulatory compliance and collaborative efforts with stakeholders to improve environmental outcomes in the regions where we operate.",
    description3:
      "A core component of our environmental strategy is conducting pre-clearing environmental surveys and cultural heritage assessments before commencing exploration. This helps us identify and protect important cultural and biodiversity aspects. We avoid exploring land deemed culturally significant by Traditional Owners or where environmental impacts cannot be sustainably managed.",
    description4:
      "Our dedication to environmental stewardship is demonstrated by our unwavering adherence to all necessary environmental licenses, permits, and approvals, ensuring that we meet or exceed local and international standards of environmental protection.",
    bgColor: "bg-gray-100",
  },
];

const Sustainability = () => {
  const [selectedSection, setSelectedSection] = useState<any>(null);

  return (
    <section className="">
      <Hero
        background="/images/pro1.jpg"
        title="Sustainability"
        description="At Breakthrough Resources, we are revitalizing the Sewum region, which has a mining history that dates back to 1909. Our mission is to explore, develop and establish a medium-scale underground mine that embodies 21st-century sustainability. As we advance with the Sewum Gold Project, we are committed to integrating sustainable practices into every facet of our operations. Our strategy is firmly rooted in a global vision that values local impact, ensuring the well-being of our people, the environment, and the communities we serve."
      />
      <div className="container mx-auto px-4 md:px-20">
        <h3 className="text-4xl uppercase text-center my-12">
          Explore this section
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
            width: "40vw",
            maxWidth: "90vw",
            maxHeight: "100vh",
            overflowY: "auto",
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
            {selectedSection?.description4 && (
              <SheetDescription className="leading-relaxed text-base">
                {selectedSection?.description4}
              </SheetDescription>
            )}

            {/* subpoints */}
            {selectedSection?.subSection && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">
                  {selectedSection.subSection.title}
                </h3>
                <div className="space-y-2">
                  {selectedSection.subSection.points.map(
                    (point: string, index: number) => (
                      <SheetDescription
                        key={index}
                        className="text-base leading-relaxed"
                      >
                        {point}
                      </SheetDescription>
                    )
                  )}
                </div>
              </div>
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <RssFeed />
    </section>
  );
};

export default Sustainability;
