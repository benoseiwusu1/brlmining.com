import Hero from "../../../components/Hero";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
}) => (
  <div className="p-4 mb-6 md:w-1/2">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <h4 className="text-sm font-semibold  mb-2">{title}</h4>
    <p className="text-sm leading-loose">{description}</p>
  </div>
);

const teamMembers = [
  {
    name: "Yaw Boadi",
    title: "Managing Director",
    description:
      "Yaw's extensive experience of over 33 years in the West African underground and surface mining sector reflects a wealth of knowledge in the industry. His background in operations, mine management, and business development, along with his previous role as General Manager at Central African Gold – Bibiani, showcases his leadership and managerial capabilities. Yaw holds a Batchelor of Science in Metallurgical Engineering from Kwame Nkrumah University of Science and Technology (KNUST), and an Executive MBA from Ghana Institute of Management and Public Administration (GIMPA).",
  },
  {
    name: "David Renner",
    title: "Director",
    description:
      "David has over 35 years of experience in mining, project management, and business development, David has played a pivotal role in significant projects, including the development and commissioning of AngloGold Ashanti’s Geita Mine in Tanzania. David has distinguished career includes key leadership positions such as Managing Director of AngloGold Ashanti’s Iduapriem Mine in Ghana and overseeing operations at AngloGold Ashanti’s Sadiola and Yatela Joint Venture in Mali. David holds a Bachelor of Science (Hons) in Civil Engineering from the Kwame Nkrumah University of Science and Technology, Kumasi, and MSc in Geotechnical Engineering from the University of Newcastle-upon-Tyne (UK) and MBA from the Wits Business School (South Africa).",
  },
  {
    name: "Kwabena Atuahene",
    title: "Director",
    description:
      "Kwabena is a highly qualified professional with a solid educational foundation and extensive practical experience in the financial sector. He holds a Bachelor of Science (BSc) in Financial Management from St. Clement University in the UK, demonstrating his commitment to excellence in financial education. Kwabena brings a wealth of experience to the table with over 25 years in the financial sector. Previously serving as the Chief Executive Officer of Utrak Financial Services, he has demonstrated leadership and expertise in various facets of financial operations. As a seasoned professional in the financial sector, Kwabena's skills and insights are likely to contribute significantly to any organization, reflecting a comprehensive understanding of financial mechanisms, risk management, and strategic decision-making.",
  },
  {
    name: "Lorando Amenume",
    title: "Director ",
    description:
      "Lorando is a retired Mechanical Engineer and businessman with a wealth of experience spanning over 20 years in the field of mechanical engineering. His professional journey includes notable stints with reputable companies such as Henshel in Kassel, Germany, and All Afra and Construction in Germany. After gaining significant experience, Lorando took the entrepreneurial path by establishing his businesses.",
  },
  {
    name: "Dan Bansah",
    title: "Non-Executive Director ",
    description:
      "Dan is a highly experienced professional in the gold mining industry with a career spanning over 35 years. Currently serving as the Chairman and Managing Director of MINECON Resources and Services Limited since July 2018, he holds a key leadership position in the company. Prior to joining MINECON, Dan played a pivotal role at Banro Corporation, where he served as the Head of Projects and Operations. In this capacity, he oversaw two mining operations, managed two advanced projects, and was responsible for an extensive exploration portfolio in the Democratic Republic of Congo. Dan's association with Banro dates back to 2004, where he initially served as the Group Mineral Resource Manager with Ashanti Goldfields. During his time at Banro, he demonstrated remarkable leadership as the Vice President of Exploration from 2007 to 2013, leading a team that discovered over 17 million ounces of gold in Banro’s prospective Twangiza – Namoya Gold Belt.",
  },
  {
    name: "Paul Gyasi",
    title: "Finance Manager",
    description:
      "Paul is a seasoned finance and accounting professional with an impressive track record, amassing over 35 years of experience in the field. His expertise extends to various aspects of financial management and accounting. Before his role as Finance Director for Noble Minerals Resources Ltd, Paul contributed to the financial landscape at Goldfields Ghana Ltd, specifically at the Damang Mine. As the Finance Director for Noble Minerals Resources Ltd, Paul would have played a crucial role in shaping the financial strategies and ensuring sound fiscal practices within the organization. With a career spanning over three decades, Paul brings a wealth of knowledge, and a robust skill set to the table, making him a key player in the financial and accounting realms, particularly within the context of mining and resources.",
  },
];

const Management = () => {
  return (
    <>
      <Hero
        title="Management & Advisors"
        description="Experienced, technically-driven & fiscally prudent management applying a methodical approach to exploration using modern techniques and up-to-date deposit models."
        background="https://images.pexels.com/photos/5439374/pexels-photo-5439374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="px-4 md:px-24 bg-deep font-primary pt-12">
        <h1 className="text-xl md:text-2xl font-bold mb-8">
          Management & Board of Directors
        </h1>
        <div className="flex flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Management;
