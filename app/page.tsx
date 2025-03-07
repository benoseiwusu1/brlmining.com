import RssFeed from "@/components/RssFeed";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Breakthrough Resources Limited - Mining & Exploration Experts
        </title>
        <meta
          name="description"
          content="Breakthrough Resources Limited (BRL Mining) provides expert mining consultancy, exploration, and resource management solutions for sustainable development."
        />
        <meta
          name="keywords"
          content="Breakthrough Resources Limited, mining consultancy, BRL Mining, exploration, resource management, Ghana mining"
        />
        <meta name="author" content="Breakthrough Resources Limited" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Breakthrough Resources Limited - Mining & Exploration Experts"
        />
        <meta
          property="og:description"
          content="Leading mining consultancy and exploration services provider in Ghana."
        />
        <meta property="og:image" content="/public/brl-mining-banner.jpg" />
        <meta property="og:url" content="https://www.brlmining.com" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Breakthrough Resources Limited - Mining & Exploration Experts"
        />
        <meta
          name="twitter:description"
          content="Offering industry-leading mining solutions and resource management."
        />
        <meta name="twitter:image" content="/public/brl-mining-banner.jpg" />
      </Head>
      <Hero
        title="Breakthrough Resources is a Junior Explorer, developing the historic high grade Sewum underground asset"
        background="/images/hero1.jpg"
        button={true}
        mainPage={true}
      />
      <RssFeed />
    </div>
  );
}
