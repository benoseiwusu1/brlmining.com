import { NextResponse } from "next/server";
import RSSParser from "rss-parser";
import axios from "axios";
import * as cheerio from "cheerio";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

// Fetch the image from the article using Cheerio
const fetchImageFromArticle = async (url: string): Promise<string | null> => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });
    const $ = cheerio.load(data);
    const ogImage = $('meta[property="og:image"]').attr("content");
    const firstImage = $("img").attr("src");
    return ogImage || firstImage || null;
  } catch (error) {
    console.error(`Failed to fetch image from ${url}:`, error);
    return null;
  }
};

export async function GET() {
  const parser = new RSSParser<FeedItem>();
  const feedUrl = "https://www.mining.com/region/africa/feed";

  try {
    // Fetch the raw RSS XML feed
    const feedResponse = await axios.get(feedUrl, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    // Parse the RSS XML feed into a JavaScript object
    const feed = await parser.parseString(feedResponse.data);

    // Fetch images for each feed item
    const itemsWithImages = await Promise.all(
      feed.items.map(async (item) => {
        const imageUrl = await fetchImageFromArticle(item.link || "");
        return {
          ...item,
          imageUrl,
        };
      })
    );

    // Return the enriched feed items
    return NextResponse.json(itemsWithImages);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
