import { server_query_function } from "@/lib/graphql";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
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
  const news = (await server_query_function(query)) as VideoResponse;

  console.log(news);

  return (
    <div className="container grid py-10 md:py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {news?.newsEvents?.reverse()?.map((item) => (
        <Link href={`/news-event/${item?.id}`} key={item?.id}>
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
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
  );
};

export default page;
