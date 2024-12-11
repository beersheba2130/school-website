"use client";
import React, { useEffect, useState } from "react";
import Heading3 from "../heading3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { client_query_function } from "@/lib/graphql";

const ToppersResult = () => {
  const [topper, setTopper] = useState<TopperType>();
  const [otherTopper, setOtherTopper] = useState<TopperType>();

  useEffect(() => {
    toppers();
  }, []);

  const query = `
  query MyQuery {
    haldwaniHomes {
      toppers {
        class
        id
        topperDetails {
          id
          name
          percentage
          subject
          topperImage {
            url
          }
        }
      }
    }
  }
  `;

  async function toppers() {
    const response = (await client_query_function(query)) as HomeType;
    setTopper(response.haldwaniHomes[0].toppers[0]);
    setOtherTopper(response.haldwaniHomes[0].toppers[1]);
  }

  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="Our Outstanding Result" />

      <div className=" my-5 lg:my-0 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:p-5">
          <Carousel>
            <CarouselContent>
              {topper?.topperDetails?.map((t) => (
                <CarouselItem className="basis-1/2 lg:basis-1/3" key={t?.id}>
                  <div className="rounded-md w-40 bg-gray-300">
                    <div className=" grid grid-cols-3">
                      <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                        {t?.subject} Topper
                      </div>
                      <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                        {t?.percentage}%
                      </div>
                    </div>
                    <Image
                      src={t?.topperImage?.url}
                      alt="topper image"
                      width={170}
                      height={200}
                    />
                    <div className="bg-[#3B2565]  text-center">
                      <p className="text-white">{t?.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:p-10 py-10">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
          performance in grade X.
          </h3>
          <p className="py-5">
            At Beersheba School, our Early Years program is designed to provide
            a caring and safe environment that caters to the specific needs of
            young learners. With a strong focus on developing fundamental
            literacy skills, our program ensures that every child receives the
            support they need to excel academically and beyond. As a result, our students display exemplary
            performance in grade X.
          </p>
        </div>
      </div>
      <div className="lg:p-10 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:p-5 order-1 lg:order-2">
          <Carousel>
            <CarouselContent>
              {otherTopper?.topperDetails?.map((oT) => (
                <CarouselItem key={oT?.id} className="basis-1/2 lg:basis-1/3">
                  <div className="rounded-md w-40 bg-gray-300">
                    <div className=" grid grid-cols-3">
                      <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                        {oT?.subject} Topper
                      </div>
                      <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                        {oT?.percentage}%
                      </div>
                    </div>
                    <Image
                      src={oT?.topperImage?.url}
                      alt="topper image"
                      width={170}
                      height={200}
                    />
                    <div className="bg-[#3B2565]  text-center">
                      <p className="text-white">{oT?.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="my-5 lg:my-0 lg:p-10 order-2 lg:order-1">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
          performance in grade XII.
          </h3>
          <p className="py-5">
            At Beersheba School, our Class XII program is tailored to provide a
            supportive and enriching environment that meets the academic needs
            of senior students. With a focus on comprehensive learning and
            preparation for board examinations, our program aims to equip
            students with the knowledge and skills essential for future success
            in higher education and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToppersResult;
