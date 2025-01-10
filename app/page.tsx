import RssFeed from "@/components/RssFeed";
import Hero from "../components/Hero";
import News from "../components/News";

export default function Home() {
  return (
    <div>
      <Hero
        title="Exploring for Ontario’s next Gold Mine"
        background="/images/hero1.jpg"
        button={true}
        mainPage={true}
      />
      <RssFeed />
    </div>
  );
}
