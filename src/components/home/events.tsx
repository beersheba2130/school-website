import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Heading2 from "../heading2";

const Events = () => {
  return (
    <section className="p-5 lg:p-10 container bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2">
      <div className="pt-5 ">
        <Heading2 title="News & Events" />
        <Carousel className="mt-10 overflow-hidden md:overflow-visible">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 rounded-3xl">
              <div className=" w-72 lg:w-80 bg-white">
                <Image
                  src={"/assets/image/image 7.jpg"}
                  alt="events"
                  width={400}
                  height={150}
                />

                <h3 className="p-3 text-[#3B2565] text-2xl font-semibold tracking-tight leading-snug">
                  Inter School Quiz Bharat Ko Jano
                </h3>

                <p className="text-gray-600 p-3">
                  Himalaya Diwas 2024: Each year, on September 9th, the world
                  observes Himalaya Day, also known as Himalaya Diwas.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 rounded-3xl">
              <div className="w-72 lg:w-80 bg-white">
                <Image
                  src={"/assets/image/image 8.jpg"}
                  alt="events"
                  width={400}
                  height={150}
                />

                <h3 className="p-3 text-[#3B2565] text-2xl font-semibold tracking-tight leading-snug">
                  Himalyan Day 14th Celebration
                </h3>

                <p className="text-gray-600 p-3">
                  Himalaya Diwas 2024: Each year, on September 9th, the world
                  observes Himalaya Day, also known as Himalaya Diwas.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 rounded-3xl">
              <div className=" bg-white w-72 lg:w-80">
                <Image
                  src={"/assets/image/image 7.jpg"}
                  alt="events"
                  width={400}
                  height={150}
                />

                <h3 className="p-3 text-[#3B2565] text-2xl font-semibold tracking-tight leading-snug">
                  Inter School Quiz Bharat Ko Jano
                </h3>

                <p className="text-gray-600 p-3">
                  Himalaya Diwas 2024: Each year, on September 9th, the world
                  observes Himalaya Day, also known as Himalaya Diwas.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-5 flex justify-center items-center flex-col">
        <Heading2 title="Upcoming Events" />

        <div className="pt-5">
          <div className="rounded-3xl bg-white">
            <div className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2">
              <div className="bg-[#F8EF2E] p-2">
                <span className="text-lg lg:text-xl font-semibold">01</span>
                <p className="text-base font-semibold">May</p>
              </div>
              <div>
                <p className="text-xl font-semibold px-3">
                  Special Assembly For Labour Day
                </p>
              </div>
            </div>
            <div className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2">
              <div className="bg-[#F8EF2E] p-2">
                <span className="text-lg lg:text-xl font-semibold">01</span>
                <p className="text-base font-semibold">May</p>
              </div>
              <div>
                <p className="text-xl font-semibold px-3">
                  Special Assembly For Labour Day
                </p>
              </div>
            </div>
            <div className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2">
              <div className="bg-[#F8EF2E] p-2">
                <span className="text-lg lg:text-xl font-semibold">01</span>
                <p className="text-base font-semibold">May</p>
              </div>
              <div>
                <p className="text-xl font-semibold px-3">
                  Special Assembly For Labour Day
                </p>
              </div>
            </div>
            <div className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2">
              <div className="bg-[#F8EF2E] p-2">
                <span className="text-lg lg:text-xl font-semibold">01</span>
                <p className="text-base font-semibold">May</p>
              </div>
              <div>
                <p className="text-xl font-semibold px-3">
                  Special Assembly For Labour Day
                </p>
              </div>
            </div>
            <div className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2">
              <div className="bg-[#F8EF2E] p-2">
                <span className="text-lg lg:text-xl font-semibold">01</span>
                <p className="text-base font-semibold">May</p>
              </div>
              <div>
                <p className="text-xl font-semibold px-3">
                  Special Assembly For Labour Day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
