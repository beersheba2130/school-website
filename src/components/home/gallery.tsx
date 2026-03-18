import Image from "next/image";
import React from "react";
import Heading3 from "../heading3";
import Link from "next/link";
import { getOptimizedImage } from "@/utils/image-optimization";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Gallery = ({
  image,
}: {
  image: {
    url: string;
  }[];
}) => {
  if (!image || image.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-8 lg:py-16">
      <div className="text-center mb-6 lg:mb-10">
        <Heading3 title="Our Gallery" />
        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm lg:text-base font-medium">
          A glimpse into the vibrant campus life and memorable moments at Beersheba School.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {image?.slice(0, 6).map((uri, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl shadow-md aspect-[4/3]">
            <Image
              src={getOptimizedImage(uri.url, { width: 800, height: 600, fit: "crop" })}
              alt="Gallery Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link 
          href="/image-gallery" 
          className="bg-[#3B2565] hover:bg-[#2A1a4a] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
