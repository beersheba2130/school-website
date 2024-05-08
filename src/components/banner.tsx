import Image from "next/image";
import React from "react";

type props = {
  source: string;
  title: string;
  description: string;
};

const Banner = ({ source, title, description }: props) => {
  return (
    <section className=" relative h-52 md:h-72 bg-primary text-white">
      <Image
        src={source}
        width={1200}
        height={600}
        alt="banner"
        className="w-full object-cover h-52 md:h-72"
      />

      <div className="absolute w-full h-full bg-gradient-to-r from-[#3B2565] to-[#774ACB]/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-center lg:justify-evenly items-center">
        <div>
          <h1 className="font-bold text-4xl md:text-6xl">{title}</h1>
          <p className="font-medium text-lg md:text-xl text-yellow-400">
            {" "}
            {description}
          </p>
        </div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Banner;
