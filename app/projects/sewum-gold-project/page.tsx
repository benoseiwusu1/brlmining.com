import ProjectDetails from "@/components/ProjectDetails";
import React from "react";

const SewumGoldProject = () => {
  return (
    <>
      <ProjectDetails
        title="Sewum Gold Project"
        location="Aowin District, Western North Region, Ghana"
        sections={[
          {
            title: "Prime Location",
            content:
              "The Sewum project is strategically located in an emerging gold mining district, neighboring major projects and deposits within the southwest end of the Sefwi belt, which is second only to the Ashanti belt in terms of gold endowment.",
            image: "/images/sewum-map.jpg",
          },

          {
            title: "Gold Inventory",
            content:
              "The project boasts a significant gold inventory, with an inferred resource of 355,000 ounces. This includes an open pit resource of 25,000 ounces at 0.68g/t Au and an underground resource of 330,000 ounces at 7.1g/t Au.",
          },
          {
            title: "Exploration Upside",
            content:
              "1900: Rainy Lake Mining and Power Co. sank a shaft to 22.8m with 7.4m of cross cuts at Sairy Camp on the shore of Grant Lake. 1901-1903: Gold Standard Mining Co. sank two shafts in the area. One near Napanee Lake was sunk to a depth of 45.7m. 1969-1971: The International Nickel Co. drilled four exploratory holes totalling 180m. 1989: Canhorn Mining Corporation optioned the property.",
          },
          {
            title: "Encouraging PEA Results",
            content:
              "Recent Preliminary Economic Assessment (PEA) results indicate strong technical and financial merits, with a 9-year life of mine (LOM), an after-tax Net Present Value (NPV) at 9.5% of US$80.6 million, and an Internal Rate of Return (IRR) of 42.14%.",
          },
          {
            title: "Infrastructure and Proximity",
            content:
              "The project benefits from good infrastructure, including roads and a water source, and is close to Enchi, the capital of the Aowin Administrative District. Moreover, the project is geologically contiguous with Newcore Gold’s Enchi project, which boasts an NI 43-101 compliant Inferred Resource of 37.37 million tonnes at a grade of 0.9g/t Au, totaling 1.08 million ounces.",
          },
          {
            title: "History",
            content:
              "Since acquiring the Sewum project in 2010, Morchekrom Gold Limited, in joint venture with Breakthrough Resources Limited and Lorando Mining Company Limited, has carried out a comprehensive exploration program. This includes geological mapping, digital compilation of historical data, auger geochemistry drilling, underground sampling, topographic surveys, and successful drilling campaigns totaling 2,582 meters. The historical development of the Sewum deposit has involved intermittent activity, with over 170,000 tons of ore mined at an average grade of 15g/t. Noteworthy historical drilling results include intersections of 1.4 meters at 14.87g/t and 2 meters at 18.8g/t. In addition, the property was soil sampled by Leo Shield Exploration in the late 1980s and by Redback/Edgewater Exploration in the mid-2000s. Trenching and pitting programs from these earlier campaigns confirmed gold-in-soil anomalies.",
          },
        ]}
        prevProject={{ name: "Miminiska", path: "/project/miminiska" }}
        nextProject={{ name: "Keezhik", path: "/project/keezhik" }}
      />
    </>
  );
};

export default SewumGoldProject;
