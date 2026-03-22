import { poppins } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type VideoCardProps = {
  source: string;
  title: string;
  desc: string;
  link: string;
};

const VideoCard = ({ source, title, desc, link }: VideoCardProps) => {
  return (
    <Link href={`${link}`} className="block group h-full">
      <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,37,101,0.12)] flex flex-col items-center text-center gap-3 transition-all duration-500 group-hover:-translate-y-3 border border-white/60 hover:border-[#3B2565]/20 relative overflow-hidden">
        {/* Hover Highlight Gradient */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#3B2565]/5 rounded-full blur-3xl group-hover:bg-[#3B2565]/10 transition-colors duration-500" />
        
        <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:from-[#3B2565]/5 group-hover:to-white transition-all duration-500 shadow-inner">
           <Image src={source} width={44} height={44} alt={title} unoptimized={true} className="w-10 h-10 lg:w-11 lg:h-11 object-contain transition-transform duration-500 group-hover:scale-110" />
        </div>
        
        <div className="space-y-2 relative z-10">
          <h5
            className={`${poppins.className} text-base lg:text-lg font-bold text-[#3B2565] transition-colors duration-300 group-hover:text-[#2A1a4a]`}
          >
            {title}
          </h5>
          <div className="w-8 h-1 bg-[#E74040]/30 rounded-full mx-auto group-hover:w-12 group-hover:bg-[#E74040] transition-all duration-500" />
          <p className="text-gray-500 text-[11px] lg:text-xs font-medium leading-relaxed px-2">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
