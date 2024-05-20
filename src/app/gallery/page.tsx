import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Gallery"
        description="Beersheba - Haldwani"
        source="/assets/image/aboutImage.jpg"
      />
      <section className="container p-5 lg:p-10 ">
        <Heading3 title="Gallery" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 py-10">
          <Image
            src={"/assets/image/unsplash_fwfobhsF1Kw.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            width={700}
            height={500}
          />
          <Image
            src={"/assets/image/unsplash_iwJscb2Ezsk.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            width={700}
            height={500}
          />
          <Image
            src={"/assets/image/unsplash_9856jObeogs.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            width={700}
            height={700}
          />
          <Image
            src={"/assets/image/unsplash_LAY19dUD_ro.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
            width={700}
            height={700}
          />
          <div>
            <Image
              src={"/assets/image/unsplash_yQnyP1g5zl4.png"}
              alt="Gallery Photo"
              className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
              width={700}
              height={700}
            />
            <Image
              src={"/assets/image/unsplash_yQnyP1g5zl4.png"}
              alt="Gallery Photo"
              className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mt-1"
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
