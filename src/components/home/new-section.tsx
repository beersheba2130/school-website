import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Link from "next/link";

const NewSection = () => {
  return (
    <section className="container pt-20 lg:pt-24 p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="p-5 relative flex justify-center items-center">
        <Image
          src={"/assets/image/about (1).jpg"}
          alt="About Image"
          width={330}
          height={330}
          className="object-cover z-10 rounded-md"
        />

        <div className="absolute top-0 left-0 lg:left-32 border-2 border-dashed border-[#DB2F2F] rounded-md h-64 w-64 lg:h-80 lg:w-80 -z-10"></div>
      </div>
      <div className="md:px-10">
        <p
          className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
        >
          Embracing Every Voice
        </p>

        <Heading2 title="Our Inclusive Learning Community" />

        <p className="text-gray-600 mt-5">
          At Beersheba, we believe in the power of every child&apos;s potential.
          Our specialized program for deaf and hard-of-hearing students creates
          a vibrant, barrier-free environment where communication flourishes in
          all forms. Through innovative teaching methods and cutting-edge
          technology, we nurture these bright minds, helping them express
          themselves confidently and achieve their dreams. Here, every gesture
          speaks volumes, and every milestone is celebrated with joy. Join our
          inclusive community where diversity is our strength, and every
          child&apos;s unique voice is heard and valued.
        </p>
      </div>
    </section>
  );
};

export default NewSection;
