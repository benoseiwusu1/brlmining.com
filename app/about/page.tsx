import About from "@/components/About";
import Hero from "@/components/Hero";
import Head from "next/head";

const AboutPage = () => {
  return (
    <section>
      <Head>
        <title>About Breakthrough Resources Limited - Mining Experts</title>
        <meta
          name="description"
          content="Learn about Breakthrough Resources Limited, a leading mining consultancy and resource management company in Ghana."
        />
        <meta
          name="keywords"
          content="About Breakthrough Resources Limited, mining consultancy, BRL Mining, resource management, Ghana mining experts"
        />
        <meta name="author" content="Breakthrough Resources Limited" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="About Breakthrough Resources Limited - Mining Experts"
        />
        <meta
          property="og:description"
          content="We provide expert solutions in mining consultancy, exploration, and sustainable resource management."
        />
        <meta property="og:image" content="/public/brl-mining-about.jpg" />
        <meta property="og:url" content="https://www.brlmining.com/about" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Breakthrough Resources Limited - Mining Experts"
        />
        <meta
          name="twitter:description"
          content="Industry leaders in mining consultancy and sustainable exploration."
        />
        <meta name="twitter:image" content="/public/brl-mining-about.jpg" />
      </Head>

      <Hero
        title="About the Company"
        background="/images/aboutt.jpg"
        description="Breakthrough Resources Ltd. is a forward-thinking junior exploration and development company dedicated to unlocking the full potential of our flagship Sewum Gold Project. Located in the Aowin district of Ghana's Western North Region, the Sewum Gold Project spans approximately 0.63 square kilometers and is situated in one of West Africa's most prolific gold mining areas."
      />
      <About />
    </section>
  );
};

export default AboutPage;
