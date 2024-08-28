import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { server_query_function } from "@/lib/graphql";
import Image from "next/image";
import React from "react";

const query = `
query MyQuery {
  beersheebaImages {
    imageGallery {
      imageCategoryName
      image {
        url
      }
    }
  }
}
`;

const gImages = [
  {
    id: 1,
    src: "/assets/image/image-1.jpeg",
  },
  {
    id: 2,
    src: "/assets/image/image-2.jpeg",
  },
  {
    id: 3,
    src: "/assets/image/image-3.jpeg",
  },
  {
    id: 4,
    src: "/assets/image/image-4.jpeg",
  },
  {
    id: 5,
    src: "/assets/image/image-5.jpeg",
  },
  {
    id: 6,
    src: "/assets/image/image-6.jpeg",
  },
  {
    id: 7,
    src: "/assets/image/image-7.jpeg",
  },
  {
    id: 8,
    src: "/assets/image/image-8.jpeg",
  },
  {
    id: 9,
    src: "/assets/image/image-9.jpeg",
  },
  {
    id: 10,
    src: "/assets/image/image-10.jpeg",
  },
  {
    id: 11,
    src: "/assets/image/image-11.jpeg",
  },
  {
    id: 12,
    src: "/assets/image/image-12.jpeg",
  },
  {
    id: 13,
    src: "/assets/image/image-13.jpeg",
  },
  {
    id: 14,
    src: "/assets/image/image-14.jpeg",
  },
  {
    id: 15,
    src: "/assets/image/image-15.jpeg",
  },
  {
    id: 16,
    src: "/assets/image/image-16.jpeg",
  },
  {
    id: 17,
    src: "/assets/image/image-17.jpeg",
  },
  {
    id: 18,
    src: "/assets/image/image-18.jpeg",
  },
  {
    id: 19,
    src: "/assets/image/image-19.jpeg",
  },
  {
    id: 20,
    src: "/assets/image/image-20.jpeg",
  },
  {
    id: 21,
    src: "/assets/image/image-21.jpeg",
  },
  {
    id: 22,
    src: "/assets/image/image-22.jpeg",
  },
  {
    id: 23,
    src: "/assets/image/image-23.jpeg",
  },
  {
    id: 24,
    src: "/assets/image/image-24.jpeg",
  },
  {
    id: 25,
    src: "/assets/image/image-25.jpeg",
  },
  {
    id: 26,
    src: "/assets/image/image-26.jpeg",
  },
];

const page = async () => {
  const res = (await server_query_function(query)) as galleryType;

  const images = res.beersheebaImages[0].imageGallery;
  // console.log("😒😒😒😒😒", images);

  return (
    <>
      <Banner
        title="Gallery"
        description="Beersheba - Haldwani"
        source="/assets/image/aboutImage.jpg"
      />
      <section className="container p-5 lg:p-10 ">
        <Heading3 title="Gallery" />

        {images?.map((img, i) => {
          return (
            <div className="my-5 md:my-10" key={i}>
              <h2 className="text-3xl text-balance md:text-4xl font-semibold text-center">
                {img.imageCategoryName}
              </h2>

              <div className="flex flex-wrap items-center gap-5 justify-center md:justify-evenly py-5 md:py-10">
                {img.image?.map((uri, i) => (
                  <Image
                    key={i}
                    src={uri.url}
                    alt="gallery"
                    width={350}
                    height={200}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* <div className="flex flex-wrap justify-center gap-5 mt-5 items-center">
          {gImages.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="gallery"
              width={300}
              height={300}
              objectFit="cover"
            />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default page;
