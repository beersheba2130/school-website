"use client";
import { server_query_function } from "@/lib/graphql";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [filteredNews, setFilteredNews] = useState<NewsEvent[]>([]);
  const query = `query MyQuery {
  newsEvents {
    newsImage {
      url
    }
    newsHeading
    id
  }
}`;

  interface NewsEvent {
    newsImage: {
      url: string;
    };
    newsHeading: string;
    id: string;
  }

  interface VideoResponse {
    newsEvents: NewsEvent[];
  }

  useEffect(() => {
    news();
  }, []);

  async function news() {
    const result = (await server_query_function(query)) as VideoResponse;
    setFilteredNews(result.newsEvents);
  }

  console.log(news);

  return (
    <div>
      <div className="container mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <input
        type="text"
        placeholder="Search news..."
        className="w-full p-2 border rounded-lg"
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase().trim();
          if (!searchTerm) {
          news(); // Reset to original data if search is empty
          return;
          }
          const searchResults = filteredNews.filter((item) => {
          const heading = item.newsHeading.toLowerCase();
          return heading.includes(searchTerm) || 
               heading.startsWith(searchTerm) || 
               heading.split(' ').some(word => word === searchTerm);
          });
          setFilteredNews(searchResults);
        }}
        />
        <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => news()} // Reset search
        >
        Reset
        </button>
      </div>
      <div className="container grid py-10 md:py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredNews.reverse().map((item) => (
        <Link href={`/news-event/${item?.id}`} key={item?.id}>
          <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
          <Image
            src={item?.newsImage.url}
            alt={item?.newsHeading}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
            {item?.newsHeading}
            </h2>
          </div>
          </div>
        </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
