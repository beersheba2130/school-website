"use client";

import React, { useState } from "react";
import Pagination from "./pagination";
import Image from "next/image";
import { Button } from "../ui/button";
import { poppins } from "@/utils/font";
import Link from "next/link";

const Slider = ({
  source,
}: {
  source: {
    url: string;
    heading: string;
    content: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* @ts-expect-error */
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {source.map((src, index) => (
          <div key={index} className="relative min-w-full ">
            <Image
              src={src?.url}
              alt="Slide Image"
              width={800}
              quality={100}
              height={700}
              className="w-full h-72 lg:h-96 object-cover "
            />
            <div className="absolute inset-0 mb-16 overflow-hidden lg:mb-[4.4rem] bg-[#3B2565]/70 p-5 text-white flex justify-center items-center flex-col gap-3 lg:gap-5  h-72 lg:h-96">
              <div
                className={`${poppins.className} text-2xl lg:text-3xl font-semibold tracking-tight leading-snug text-center`}
              >
                <p>{src?.heading}</p>
              </div>
              <div className="text-center text-white text-sm lg:text-base">
                <p>{src?.content}</p>
              </div>
              <div className="flex gap-10 items-center z-50">
                <Link href={"/registeration"}>
                  <Button>Apply Now</Button>
                </Link>
                <Link href={"/about"}>
                  <Button>Virtual Tour</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentIndex={currentIndex} goToSlide={goToSlide} />
    </div>
  );
};

export default Slider;

{
  /* <div className="absolute inset-0 mb-16 overflow-hidden lg:mb-[4.4rem] bg-[#3B2565]/70 p-5 text-white flex justify-center items-center flex-col gap-3 lg:gap-5 pointer-events-none">
<div
  className={`${poppins.className} text-2xl lg:text-3xl font-semibold tracking-tight leading-snug text-center`}
>
  <p>WELCOME TO</p>
  <p>BEERSHEBA SCHOOL</p>
</div>
<div className="text-center text-white text-sm lg:text-base">
  <p>
    Empowering students with knowledge and skills for a brighter future
  </p>
</div>
<div className="flex gap-10 items-center">
  <Button>Apply Now</Button>
  <Button>Virtual Tour</Button>
</div>
</div> */
}
