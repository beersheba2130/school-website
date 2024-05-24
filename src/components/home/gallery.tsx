import Image from "next/image";
import React from "react";
import Heading3 from "../heading3";
import { server_query_function } from "@/lib/graphql";

const Gallery = async () => {
  const query = `
  query MyQuery {
    homes {
      homeGallery {
        homeGalleryImage {
          url
        }
      }
    }
  }
  
  `;

  const response = (await server_query_function(query)) as HomeType;
  // console.log(response.homes[0].homeGallery.homeGalleryImage, "🟢🟢🟢🟢🟢");

  return (
    <section className="container p-5 lg:p-10 ">
      <Heading3 title="Gallery" />

      <div className="grid grid-cols-3 gap-1 py-10">
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[0]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[1]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[2]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={700}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[3]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
          width={700}
          height={700}
        />
        <div>
          <Image
            src={response.homes[0].homeGallery.homeGalleryImage[4]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
            width={700}
            height={700}
          />
          <Image
            src={response.homes[0].homeGallery.homeGalleryImage[5]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mt-1"
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 py-10">
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[6]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[7]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[8]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={700}
        />
        <Image
          src={response.homes[0].homeGallery.homeGalleryImage[9]?.url}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
          width={700}
          height={700}
        />
        <div>
          <Image
            src={response.homes[0].homeGallery.homeGalleryImage[4]?.url}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
            width={700}
            height={700}
          />
          <Image
            src={response.homes[0].homeGallery.homeGalleryImage[5]?.url}
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
