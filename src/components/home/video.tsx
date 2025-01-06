import React from "react";
import Heading2 from "../heading2";
import VideoCard from "./video-card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const Video = ({
  featured,
}: {
  featured: {
    featuredNews: {
      imageCategoryName: string;
      image: {
        url: string;
      }[];
    }[];
  };
}) => {
  return (
    <section className="container relative  bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2 pt-20 pb-96 lg:pb-48">
      <div>
        <Heading2
          title="Leading School in City
Since 1977"
        />
        <p className="text-gray-600 my-5">
          Empowering Minds, Inspiring Futures: Since 1977, Beersheba School in
          Haldwani has been a beacon of educational excellence. With a rich
          legacy spanning over four decades, we shape tomorrow&apos;s leaders
          through academic rigor and holistic development. At Beersheba, we
          unlock every child&apos;s potential, preparing them for life&apos;s
          greater challenges. Join our transformative journey where students are
          empowered to dream big, achieve more, and impact the world.
        </p>
        <Link href={"/blogs"}>
          <Button>Explore Our Highlights</Button>
        </Link>
      </div>
      <div className=" flex justify-center ">
        <Carousel>
          <CarouselContent className="flex justify-center items-center w-72 mx-auto">
            {featured?.featuredNews?.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Image
                      src={item?.image[0]?.url}
                      alt="featured news"
                      width={400}
                      height={300}
                      className="w-64 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-800">
                        {item?.imageCategoryName}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="absolute lg:-bottom-24 -bottom-52 flex justify-evenly items-center w-full flex-wrap gap-2">
        <VideoCard
          title="Campus"
          desc="Discover our state-of-the-art facilities and vibrant learning spaces."
          source="/assets/image/icon cool-icon-l19.svg"
        />
        <VideoCard
          title=" Teacher"
          desc="Meet our dedicated educators shaping bright futures with passion."
          source="/assets/image/icon cool-icon-l22.svg"
        />
        <VideoCard
          title="Library"
          desc="Explore our vast collection of books and digital resources for knowledge seekers."
          source="/assets/image/icon cool-icon-l25.svg"
        />
        <VideoCard
          title="Smart School"
          desc="Experience cutting-edge technology enhancing every aspect of learning"
          source="/assets/image/icon cool-icon-l28.svg"
        />
      </div>
    </section>
  );
};

export default Video;
