// components/Sustainability.tsx
import React from "react";
import Message from "../../components/Message";
import SustainabilityCard from "../../components/SustainabilityCard";
import News from "../../components/News";
import Hero from "@/components/Hero";

const sections = [
  {
    imageSrc: "/images/pro1.jpg",
    title: "Our People Commitment",
    description:
      "At Breakthrough, diversity and inclusion are fundamental to our values as we progress with the Sewum Gold Project. We are committed to fostering a workplace that supports the health, safety, and well-being of every team member, ensuring a culture of personal growth, professional development, and job satisfaction. Our diversity and inclusion initiatives aim to achieve measurable targets, including a 30% increase in diverse representation within leadership roles by 2027 and the implementation of quarterly employee engagement surveys to assess satisfaction and inclusivity. We will ensure that our policies are regularly reviewed and updated to reflect evolving best practices in inclusivity. We are dedicated to creating an environment where every team member is empowered to excel and contribute to positive change. This commitment is not only essential for achieving a high-performing organization but also aligns with our long-term vision of sustainability and success. By celebrating individual contributions and prioritizing diversity in every decision and action, we will drive a culture of collective success and foster an environment where inclusion is integral to everything we do.",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Health & Safety",
    description:
      "Our objective for the Sewum Gold Project is to eliminate workplace injuries and illnesses, extending the same high standards of health, safety, and well-being to both our employees and contractors. We are committed to adhering to all relevant legislation and maintaining a rigorous approach to these critical aspects. Our dedication is reflected in the oversight provided by our Risk and ESG Board Committee, which meticulously monitors health, safety, and well-being governance and performance throughout the year. We prioritize the welfare of our workforce and partners, ensuring a safe and secure environment for everyone involved in the Sewum Project.",
    linkUrl: "#",
    bgColor: "bg-white",
    reverse: true,
  },
  {
    imageSrc: "/images/pro3.jpg",
    title: "Value Creation Connections",
    description:
      "We are working to make mining sustainable by creating value throughout our chain as one of our purposes, and  innovation and collaboration are the essential principles to achieve this, along with our main stakeholders: suppliers, partners, clients and communities. Thus, we seek to actively integrate, by mobilizing sustainability from the origin of the industrial process to the end customer, in our surroundings and each region where we operate. Along with our suppliers and partners, we  want to develop programs that enhance their capabilities;  with Clients, we want to listen to their needs and offer the best alternatives, enhancing our role as a strategic ally to meet their own goals. Regarding Communities, we seek to recognize each other, collaborating with their organizations, addressing their needs and mitigating the effects of our operations, while enhancing the benefits of our mutual vicinity.",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
];

const Sustainability: React.FC = () => {
  return (
    <section>
      <Hero
        background="/images/pro1.jpg"
        title="Sustainability"
        description="At Breakthrough Resources, we are revitalizing the Sewum region, which has a mining history that dates back to 1909. Our mission is to explore, develop and establish a medium-scale underground mine that embodies 21st-century sustainability. As we advance with the Sewum Gold Project, we are committed to integrating sustainable practices into every facet of our operations. Our strategy is firmly rooted in a global vision that values local impact, ensuring the well-being of our people, the environment, and the communities we serve."
      />
      <div className="container mx-auto">kdkdk</div>

      <Message />
      {sections.map((section, index) => (
        <SustainabilityCard
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          linkUrl={section.linkUrl}
          bgColor={section.bgColor}
          reverse={section.reverse}
        />
      ))}
      <News />
    </section>
  );
};

export default Sustainability;
