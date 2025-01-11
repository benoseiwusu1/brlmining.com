"use client";
import moment from "moment";
import NewsCard from "../../components/NewsCard";
import { NewsPlaceHolder } from "../../components/NewsPlaceHolder";
import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";

const formatDate = (dateString: string): string => {
  return moment(dateString).format("MMMM Do, YYYY");
};

type FeedItem = {
  title: string;
  link: string;
  categories?: string[];
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

const fetchRss = async (): Promise<FeedItem[]> => {
  const response = await fetch("/api/rss");
  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }
  return response.json();
};

const Newsroom = () => {
  const {
    data: rssData = [],
    isLoading,
    isError,
    error,
  } = useQuery<FeedItem[]>({
    queryKey: ["rssFeed"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 10,
  });

  console.log("data", rssData);

  return (
    <section>
      <Hero title="Newsroom" background="/images/news-bg.jpg" />
      <div className="container mx-auto px-4 md:px-20 my-20">
        {isError ? (
          <p style={{ color: "red", textAlign: "center" }}>
            Error: {error?.message}
          </p>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <NewsPlaceHolder key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rssData.slice(0, 12).map((item: FeedItem, index: number) => (
              <NewsCard
                key={index}
                title={item.title}
                date={formatDate(item.pubDate || "")}
                categories={item.categories}
                imageUrl={item.imageUrl || "/placeholder-image.jpg"}
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsroom;
