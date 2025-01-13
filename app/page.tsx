import RssFeed from "@/components/RssFeed";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
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
