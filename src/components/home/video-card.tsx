import { poppins } from "@/utils/font";
import Image from "next/image";
import React from "react";

type VideoCardProps = {
  source: string;
  title: string;
  desc: string;
};

const VideoCard = ({ source, title, desc }: VideoCardProps) => {
  return (
    <div className="w-36 shadow-xl lg:w-52 p-5 bg-white flex flex-col items-center gap-5 ">
      <Image src={source} width={80} height={80} alt="logo" />
      <h5
        className={`${poppins.className} text-lg lg:text-xl font-bold text-balance underline underline-offset-8 decoration-[#E74040]`}
      >
        {title}
      </h5>
      <p className="text-gray-600 text-sm md:text-base font-medium">{desc}</p>
    </div>
  );
};

export default VideoCard;
