"use client";

import React, { useState } from "react";
import Pagination from "./pagination";
import Image from "next/image";
import { Button } from "../ui/button";
import { poppins } from "@/utils/font";
// @ts-expect-error
const Slider = ({ source }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* @ts-expect-error */

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative container w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* @ts-expect-error */}
        {source.map((source, index) => (
          <div
            key={index}
            className={`min-w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={source}
              alt="Main Image"
              width={800}
              quality={100}
              height={700}
              className="w-full h-96 object-cover"
            />

            <div className="bg-[#3B2565]/70 absolute inset-0 text-white flex justify-center items-center flex-col gap-5">
              <div
                className={`${poppins.className} text-3xl font-semibold tracking-tight leading-snug text-center`}
              >
                <p>WELCOME TO</p>
                <p>BEERSHEBA SCHOOL</p>
              </div>
              <div className="text-center text-white">
                <p>
                  Beersheba School offers a diverse range of courses,
                  including Humanities,{" "}
                </p>
                <p>
                  Commerce, Artificial Intelligence, Coding, Yoga, and Science,
                </p>
              </div>
              <div className="flex gap-10 items-center">
                <Button>Apply Now</Button>
                <Button>Virtual Tour</Button>
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
