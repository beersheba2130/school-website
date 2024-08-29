import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { server_query_function } from "@/lib/graphql";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

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
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="w-fit h-96 "
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
