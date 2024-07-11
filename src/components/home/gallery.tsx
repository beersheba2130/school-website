"use client";
import Image from "next/image";
import React from "react";
import Heading3 from "../heading3";

export const dynamic = "force-dynamic";

const Gallery = ({
  image,
}: {
  image: {
    url: string;
  }[];
}) => {
  console.log(image[0].url);

  return (
    <section className="container p-5 lg:p-10 ">
      <Heading3 title="Gallery" />

      <div className="grid grid-cols-3 gap-1 py-10">
        <Image
          src={image[0]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={image[1]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={image[2]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={700}
        />
        <Image
          src={image[3]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
          width={700}
          height={700}
        />
        <div>
          <Image
            src={image[4]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
            width={700}
            height={700}
          />
          <Image
            src={image[5]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mt-1"
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 py-10">
        <Image
          src={image[6]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={image[7]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={image[8]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={700}
        />
        <Image
          src={image[9]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
          width={700}
          height={700}
        />
        <div>
          <Image
            src={image[10]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
            width={700}
            height={700}
          />
          <Image
            src={image[11]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mt-1"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
