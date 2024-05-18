"use client";
import React from "react";
import Heading3 from "../heading3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ToppersResult = () => {
  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="Our Outstanding Result" />

      <div className=" my-5 lg:my-0 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:p-5">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="lg:p-10 py-10">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
            Toppers Class XII
          </h3>
          <p className="py-5">
            Beersheba School&apos;s Early Years program provides a caring and
            safe environment that meets the specific needs of young learners.
            This program focuses on developing fundamental literacy. Beersheba
            School&apos;s Early Years program provides a caring and safe
            environment that meets the specific needs of young learners. This
            program focuses on developing fundamental literacy.
          </p>
        </div>
      </div>
      <div className="lg:p-10 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:p-5 order-1 lg:order-2">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="rounded-md w-40 bg-gray-300">
                  <div className=" grid grid-cols-3">
                    <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                      Science Topper
                    </div>
                    <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                      89%
                    </div>
                  </div>
                  <Image
                    src={"/assets/image/topper2.png"}
                    alt="topper image"
                    width={170}
                    height={200}
                  />
                  <div className="bg-[#3B2565]  text-center">
                    <p className="text-white">Kum Kum Bharti</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="my-5 lg:my-0 lg:p-10 order-2 lg:order-1">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
            Toppers Class XII
          </h3>
          <p className="py-5">
            Beersheba School&apos;s Early Years program provides a caring and
            safe environment that meets the specific needs of young learners.
            This program focuses on developing fundamental literacy. Beersheba
            School&apos;s Early Years program provides a caring and safe
            environment that meets the specific needs of young learners. This
            program focuses on developing fundamental literacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToppersResult;
